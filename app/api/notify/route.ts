// app/api/notify/route.ts
// Supabase llama aquí (Database Webhook) cuando una iglesia publica.
// Avisamos por push a quienes siguen el canal (menos a quien publicó).
import { NextResponse } from "next/server";
import { adminClient, verifyWebhook } from "@/lib/moderation";

export const runtime = "nodejs";

const KIND: Record<string, string> = {
  predica: "Nueva prédica",
  bosquejo: "Nuevo bosquejo",
  aviso: "Nuevo aviso",
};

type PushMessage = {
  to: string;
  title: string;
  body: string;
  sound: "default";
  data: { url: string };
};

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

export async function POST(req: Request) {
  if (!verifyWebhook(req.headers.get("x-kairos-secret"))) {
    return NextResponse.json({ error: "no autorizado" }, { status: 401 });
  }
  const payload = await req.json().catch(() => null);
  const post = payload?.record;
  if (payload?.type !== "INSERT" || !post?.id || post.deleted_at) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const db = adminClient();
  const { data: channel } = await db.from("channels").select("name").eq("id", post.channel_id).maybeSingle();
  if (!channel) return NextResponse.json({ ok: true, missing: true });

  // Seguidores con avisos activos, sin el autor.
  const { data: follows } = await db
    .from("channel_follows")
    .select("user_id")
    .eq("channel_id", post.channel_id)
    .eq("notify", true);
  const users = (follows ?? []).map((f) => f.user_id).filter((u) => u !== post.author_id);
  if (users.length === 0) return NextResponse.json({ ok: true, sent: 0 });

  const tokens: string[] = [];
  for (let i = 0; i < users.length; i += 500) {
    const { data } = await db.from("push_tokens").select("token").in("user_id", users.slice(i, i + 500));
    tokens.push(...(data ?? []).map((t) => t.token));
  }
  if (tokens.length === 0) return NextResponse.json({ ok: true, sent: 0 });

  const what = KIND[post.kind] ?? "Nueva publicación";
  const detail = post.title || post.passage || (post.body ? clip(String(post.body).replace(/\s+/g, " "), 90) : "");
  const messages: PushMessage[] = tokens.map((to) => ({
    to,
    title: channel.name,
    body: detail ? `${what}: ${clip(detail, 120)}` : what,
    sound: "default",
    data: { url: `/post/${post.id}` },
  }));

  // Expo acepta hasta 100 mensajes por llamada.
  const dead: string[] = [];
  let sent = 0;
  for (let i = 0; i < messages.length; i += 100) {
    const chunk = messages.slice(i, i + 100);
    const res = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(chunk),
    }).catch(() => null);
    if (!res?.ok) continue;
    const out = await res.json().catch(() => null);
    (out?.data ?? []).forEach((t: { status: string; details?: { error?: string } }, k: number) => {
      if (t.status === "ok") sent++;
      else if (t.details?.error === "DeviceNotRegistered") dead.push(chunk[k].to);
    });
  }

  // Teléfonos que ya desinstalaron la app: los olvidamos.
  if (dead.length) await db.from("push_tokens").delete().in("token", dead);

  return NextResponse.json({ ok: true, sent });
}
