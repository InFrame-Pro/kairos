// app/api/reportes/route.ts
// Supabase llama aquí (Database Webhook) cada vez que alguien reporta algo.
// Mandamos un correo con el contenido y un enlace para moderarlo.
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getReport, moderationLink, verifyWebhook } from "@/lib/moderation";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  if (!verifyWebhook(req.headers.get("x-kairos-secret"))) {
    return NextResponse.json({ error: "no autorizado" }, { status: 401 });
  }
  const payload = await req.json().catch(() => null);
  const id: string | undefined = payload?.record?.id;
  if (payload?.type !== "INSERT" || !id) return NextResponse.json({ ok: true, skipped: true });

  const r = await getReport(id);
  if (!r) return NextResponse.json({ ok: true, missing: true });

  const what = r.comment ? `Comentario de ${r.comment.author_name}` : `Publicación (${r.post.kind})`;
  const text = (r.comment ? r.comment.body : [r.post.title, r.post.body].filter(Boolean).join("\n\n")) || "(sin texto)";
  const link = moderationLink(r.id);

  const html = `<div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:560px;margin:auto;color:#1E1812">
  <p style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#B77A2B">Kairós · Reporte nuevo</p>
  <h2 style="font-weight:500;margin:6px 0 14px">${esc(what)} en ${esc(r.channel.name)}</h2>
  ${r.reason ? `<p style="color:#6b5a44"><b>Motivo:</b> ${esc(r.reason)}</p>` : ""}
  <blockquote style="margin:0;padding:14px 16px;background:#F3EBD8;border-radius:12px;white-space:pre-wrap">${esc(text.slice(0, 1500))}</blockquote>
  <p style="margin:24px 0"><a href="${link}" style="background:#1E1812;color:#F0E6CC;padding:12px 22px;border-radius:99px;text-decoration:none">Revisar y moderar</a></p>
  <p style="font-size:12px;color:#8b7a62">Recuerda: los términos prometen atender reportes en menos de 24 horas. El enlace vence en 14 días.</p>
</div>`;

  const to = process.env.MODERATION_EMAIL;
  if (!process.env.RESEND_API_KEY || !to) {
    console.error("Reporte sin aviso: falta RESEND_API_KEY o MODERATION_EMAIL", r.id);
    return NextResponse.json({ ok: false, error: "sin configuración de correo" }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Kairós <hola@kairoslat.com>",
    to: to.split(",").map((s) => s.trim()),
    subject: `Reporte en ${r.channel.name}: ${what}`,
    html,
  });
  if (error) {
    console.error("Resend", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
