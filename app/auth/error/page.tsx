// app/auth/error/page.tsx

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ups, algo pasó',
  robots: { index: false, follow: false },
};

export default function AuthErrorPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-10">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 blur-[70px]"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--amber-glow-rgb),0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[520px] text-center">
        <div
          className="mb-3 text-[18px] italic text-[var(--amber)] md:text-[22px]"
          style={{ fontFamily: 'var(--font-cardo)' }}
        >
          καιρός
        </div>

        <h1
          className="mb-6 text-[38px] leading-[1.05] tracking-tight text-[var(--ink)] md:text-[56px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 144',
            fontWeight: 400,
          }}
        >
          Algo no salió bien.
        </h1>

        <p className="mb-10 text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[19px]">
          No pudimos completar tu inicio de sesión. Podría ser un enlace
          expirado, un problema temporal, o simplemente el momento no era el
          exacto.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="whitespace-nowrap rounded-md border-none bg-[var(--amber)] px-6 py-3 text-[14px] font-semibold text-[var(--cream-soft)] transition-all hover:-translate-y-px hover:bg-[var(--amber-deep)] md:px-[30px] md:py-[15px]"
          >
            Volver al inicio
          </Link>
          <a
            href="mailto:hola@kairoslat.com"
            className="text-[14px] text-[var(--ink-soft)] underline decoration-[var(--ink-line)] underline-offset-4 transition hover:text-[var(--ink)] hover:decoration-[var(--amber)]"
          >
            Escríbenos si persiste
          </a>
        </div>
      </div>
    </section>
  );
}
