// lib/moderation.ts
// Moderación de reportes: cliente con service role (solo servidor) y enlaces
// firmados para moderar desde el correo sin iniciar sesión.
import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const DAY = 24 * 60 * 60 * 1000;

function secret() {
  const s = process.env.MODERATION_SECRET;
  if (!s || s.length < 24) throw new Error("Falta MODERATION_SECRET");
  return s;
}

export function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    (process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY)!,
    { auth: { persistSession: false } }
  );
}

const sign = (reportId: string, exp: number) =>
  createHmac("sha256", secret()).update(`${reportId}.${exp}`).digest("base64url");

/** Enlace a /moderar válido por 14 días. */
export function moderationLink(reportId: string) {
  const exp = Date.now() + 14 * DAY;
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kairoslat.com";
  return `${site}/moderar?r=${reportId}&e=${exp}&t=${sign(reportId, exp)}`;
}

export function verifyLink(reportId?: string, exp?: string, token?: string) {
  if (!reportId || !exp || !token) return false;
  const e = Number(exp);
  if (!Number.isFinite(e) || e < Date.now()) return false;
  const a = Buffer.from(sign(reportId, e));
  const b = Buffer.from(token);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** El webhook de Supabase manda este encabezado. */
export function verifyWebhook(header: string | null) {
  if (!header) return false;
  const a = Buffer.from(header);
  const b = Buffer.from(secret());
  return a.length === b.length && timingSafeEqual(a, b);
}

export type ReportDetail = {
  id: string;
  reason: string | null;
  resolved: boolean;
  created_at: string;
  post: { id: string; kind: string; title: string | null; body: string | null; author_id: string | null; deleted_at: string | null };
  channel: { name: string; slug: string };
  comment: { id: string; body: string; author_name: string; user_id: string; hidden: boolean } | null;
};

export async function getReport(id: string): Promise<ReportDetail | null> {
  const db = adminClient();
  const { data: r } = await db
    .from("content_reports")
    .select("id, reason, resolved, created_at, post_id, comment_id")
    .eq("id", id)
    .maybeSingle();
  if (!r) return null;
  const { data: post } = await db
    .from("channel_posts")
    .select("id, kind, title, body, author_id, deleted_at, channel_id")
    .eq("id", r.post_id)
    .maybeSingle();
  if (!post) return null;
  const { data: channel } = await db.from("channels").select("name, slug").eq("id", post.channel_id).maybeSingle();
  const { data: comment } = r.comment_id
    ? await db.from("post_comments").select("id, body, author_name, user_id, hidden").eq("id", r.comment_id).maybeSingle()
    : { data: null };
  return {
    id: r.id,
    reason: r.reason,
    resolved: r.resolved,
    created_at: r.created_at,
    post,
    channel: channel ?? { name: "Canal", slug: "" },
    comment: comment ?? null,
  };
}
