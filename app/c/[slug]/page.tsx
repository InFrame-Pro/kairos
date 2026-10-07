// app/c/[slug]/page.tsx
// Enlace para compartir un canal (WhatsApp, historias…). Con la app
// instalada, iOS lo abre directo en Kairós (Universal Links); si no, esta
// página muestra el canal y cómo conseguir la app.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

type Channel = {
  slug: string;
  name: string;
  city: string | null;
  description: string | null;
  avatar_url: string | null;
  verified: boolean;
  follower_count: number;
};

export const revalidate = 300;

async function getChannel(slug: string): Promise<Channel | null> {
  const db = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!,
    { auth: { persistSession: false } }
  );
  const { data } = await db.rpc("channels_list");
  return ((data as Channel[] | null) ?? []).find((c) => c.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = await getChannel((await params).slug);
  if (!c) return { title: "Canal no encontrado" };
  const description = c.description || `Prédicas, bosquejos y avisos de ${c.name} en Kairós.`;
  return {
    title: `${c.name} en Kairós`,
    description,
    openGraph: {
      title: `${c.name} en Kairós`,
      description,
      images: c.avatar_url ? [{ url: c.avatar_url }] : undefined,
    },
  };
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-ZÁÉÍÓÚÑ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default async function ChannelLinkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = await getChannel(slug);
  if (!c) notFound();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(90% 60% at 50% 0%, #2A1F16, #14100D 70%)",
        color: "#F0E6CC",
        fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 420, width: "100%", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-cinzel), serif", letterSpacing: "0.3em", fontSize: 12, color: "#E8B45A", margin: 0 }}>
          KAIRÓS · CANAL
        </p>
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 52,
            margin: "28px auto 0",
            overflow: "hidden",
            background: "linear-gradient(135deg, #E8B45A, #C97A2C)",
            display: "grid",
            placeItems: "center",
            fontFamily: "var(--font-fraunces), serif",
            fontSize: 38,
            color: "#14100D",
          }}
        >
          {c.avatar_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={c.avatar_url} alt="" width={104} height={104} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          ) : (
            initials(c.name)
          )}
        </div>
        <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400, fontSize: 34, lineHeight: 1.1, margin: "20px 0 6px" }}>
          {c.name} {c.verified && <span title="Verificado" style={{ color: "#E8B45A", fontSize: 22 }}>✓</span>}
        </h1>
        {c.city && <p style={{ color: "#A89876", margin: 0 }}>{c.city}</p>}
        {c.description && <p style={{ color: "#D9CBA8", lineHeight: 1.55, marginTop: 16 }}>{c.description}</p>}
        <p style={{ color: "#A89876", fontSize: 14, marginTop: 14 }}>
          {c.follower_count === 1 ? "1 persona sigue este canal" : `${c.follower_count} personas siguen este canal`}
        </p>

        <a
          href={`kairos://canal/${c.slug}`}
          style={{
            display: "block",
            marginTop: 30,
            padding: "15px 24px",
            borderRadius: 99,
            background: "#E8B45A",
            color: "#14100D",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Abrir en Kairós
        </a>
        <a
          href="/#beta"
          style={{ display: "block", marginTop: 14, color: "#F0E6CC", fontSize: 15, textDecoration: "underline", textUnderlineOffset: 4 }}
        >
          ¿Aún no tienes la app? Únete a la beta
        </a>
        <p style={{ color: "#7F7159", fontSize: 13, marginTop: 36, lineHeight: 1.5 }}>
          Prédicas en audio, bosquejos y avisos de tu iglesia, en el mismo lugar donde lees la Biblia.
        </p>
      </div>
    </main>
  );
}
