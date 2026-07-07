// app/gracias/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShareButtons } from '@/components/share-buttons';

export const metadata: Metadata = {
  title: 'Gracias',
  description:
    'Gracias por unirte a Kairós. Te avisamos cuando encendamos la primera vela.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 blur-[70px]"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--amber-glow-rgb),0.14) 0%, rgba(var(--amber-glow-rgb),0.04) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[720px] text-center">
        {/* Vela pequeña como símbolo */}
        <div
          className="mb-8 text-[48px] leading-none md:text-[64px]"
          aria-hidden="true"
        >
          🕯️
        </div>

        {/* καιρός chico */}
        <div
          className="mb-4 text-[20px] italic text-[var(--amber)] md:text-[24px]"
          style={{ fontFamily: 'var(--font-cardo)' }}
        >
          καιρός
        </div>

        {/* Headline */}
        <h1
          className="mb-8 text-[42px] leading-[1.05] tracking-tight text-[var(--ink)] md:text-[68px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 144',
            fontWeight: 400,
          }}
        >
          Gracias por{' '}
          <em
            className="font-light text-[var(--amber)]"
            style={{ fontStyle: 'italic' }}
          >
            estar
          </em>
          .
        </h1>

        {/* Copy devocional */}
        <p className="mx-auto mb-10 max-w-[540px] text-[17px] leading-relaxed text-[var(--ink-soft)] md:mb-12 md:text-[20px]">
          Te avisamos en cuanto encendamos la primera vela.
          <br />
          Mientras tanto, compártelo con alguien a quien también le hará bien.
        </p>

        {/* Share buttons */}
        <ShareButtons />

        {/* Volver al inicio */}
        <div className="mt-14 md:mt-16">
          <Link
            href="/"
            className="text-[14px] text-[var(--ink-soft)] underline decoration-[var(--ink-line)] underline-offset-4 transition hover:text-[var(--ink)] hover:decoration-[var(--amber)] md:text-[15px]"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Versículo sutil al final */}
        <p
          className="mx-auto mt-16 max-w-[420px] text-[14px] italic leading-relaxed text-[var(--ink-soft)]/70 md:mt-20 md:text-[15px]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          «Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su
          hora.»
          <br />
          <span className="mt-2 block not-italic text-[12px] text-[var(--ink-soft)]/60 md:text-[13px]">
            — Eclesiastés 3:1
          </span>
        </p>
      </div>
    </section>
  );
}
