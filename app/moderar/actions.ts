// app/moderar/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { adminClient, getReport, verifyLink } from "@/lib/moderation";

export type ModAction = "ocultar" | "borrar" | "suspender" | "descartar";

export async function moderate(formData: FormData) {
  const r = String(formData.get("r") ?? "");
  const e = String(formData.get("e") ?? "");
  const t = String(formData.get("t") ?? "");
  const action = String(formData.get("action") ?? "") as ModAction;
  if (!verifyLink(r, e, t)) throw new Error("Enlace inválido o vencido");

  const report = await getReport(r);
  if (!report) throw new Error("El reporte ya no existe");
  const db = adminClient();

  if (action === "ocultar" && report.comment) {
    await db.from("post_comments").update({ hidden: true }).eq("id", report.comment.id);
  } else if (action === "borrar") {
    if (report.comment) await db.from("post_comments").delete().eq("id", report.comment.id);
    else await db.from("channel_posts").update({ deleted_at: new Date().toISOString() }).eq("id", report.post.id);
  } else if (action === "suspender") {
    const uid = report.comment ? report.comment.user_id : report.post.author_id;
    if (uid) {
      // Suspensión indefinida: no puede volver a entrar. Se revierte desde Supabase → Authentication.
      await db.auth.admin.updateUserById(uid, { ban_duration: "876000h" });
      if (report.comment) await db.from("post_comments").update({ hidden: true }).eq("id", report.comment.id);
    }
  }

  // Todos los reportes del mismo contenido quedan resueltos.
  const q = db.from("content_reports").update({ resolved: true }).eq("post_id", report.post.id);
  await (report.comment ? q.eq("comment_id", report.comment.id) : q.is("comment_id", null));

  revalidatePath("/moderar");
}
