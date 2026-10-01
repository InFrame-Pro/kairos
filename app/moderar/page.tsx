// app/moderar/page.tsx
// Página a la que lleva el correo de cada reporte. Solo funciona con el
// enlace firmado; las acciones se hacen con un botón (POST), nunca al abrir.
import type { Metadata } from "next";
import { getReport, verifyLink } from "@/lib/moderation";
import { moderate } from "./actions";

export const metadata: Metadata = { title: "Moderar reporte", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const box: React.CSSProperties = { maxWidth: 620, margin: "0 auto", padding: "64px 24px", fontFamily: "var(--font-inter-tight), system-ui, sans-serif", color: "#1E1812" };
const btn = (bg: string, fg = "#F0E6CC"): React.CSSProperties => ({ background: bg, color: fg, border: 0, borderRadius: 99, padding: "12px 20px", fontSize: 15, cursor: "pointer" });

export default async function ModerarPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const { r, e, t } = await searchParams;
  if (!verifyLink(r, e, t)) {
    return <main style={box}><h1 style={{ fontWeight: 400 }}>Enlace no válido</h1><p>Este enlace venció o no es correcto. Revisa los reportes desde el panel de Supabase.</p></main>;
  }
  const rep = await getReport(r!);
  if (!rep) return <main style={box}><h1 style={{ fontWeight: 400 }}>Reporte no encontrado</h1><p>Quizá el contenido ya se borró.</p></main>;

  const text = rep.comment ? rep.comment.body : [rep.post.title, rep.post.body].filter(Boolean).join("\n\n");
  const hidden = rep.comment ? rep.comment.hidden : !!rep.post.deleted_at;

  return (
    <main style={box}>
      <p style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "#B77A2B" }}>Kairós · Moderación</p>
      <h1 style={{ fontWeight: 400, fontSize: 32, margin: "8px 0 6px" }}>
        {rep.comment ? `Comentario de ${rep.comment.author_name}` : `Publicación (${rep.post.kind})`}
      </h1>
      <p style={{ color: "#6b5a44", margin: 0 }}>En {rep.channel.name} · reportado el {new Date(rep.created_at).toLocaleString("es-MX", { timeZone: "America/Cancun" })}</p>
      {rep.reason && <p style={{ color: "#6b5a44" }}><b>Motivo:</b> {rep.reason}</p>}
      <blockquote style={{ margin: "20px 0", padding: "16px 18px", background: "#F3EBD8", borderRadius: 14, whiteSpace: "pre-wrap" }}>{text || "(sin texto)"}</blockquote>

      {rep.resolved ? (
        <p style={{ padding: "12px 16px", borderRadius: 12, background: "#E7F0E2" }}>
          ✓ Este reporte ya está resuelto{hidden ? " y el contenido ya no se muestra" : ""}.
        </p>
      ) : (
        <form action={moderate} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <input type="hidden" name="r" value={r} />
          <input type="hidden" name="e" value={e} />
          <input type="hidden" name="t" value={t} />
          {rep.comment && <button name="action" value="ocultar" style={btn("#1E1812")}>Ocultar comentario</button>}
          <button name="action" value="borrar" style={btn("#9B2C1F")}>{rep.comment ? "Borrar comentario" : "Borrar publicación"}</button>
          <button name="action" value="suspender" style={btn("#5A1E15")}>Suspender cuenta del autor</button>
          <button name="action" value="descartar" style={btn("#E6DBC3", "#1E1812")}>No pasa nada, descartar</button>
        </form>
      )}
      <p style={{ marginTop: 28, fontSize: 13, color: "#8b7a62" }}>
        Suspender impide que esa cuenta vuelva a entrar. Se revierte en Supabase → Authentication → Users.
      </p>
    </main>
  );
}
