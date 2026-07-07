// components/legal-layout.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  title: string;
  intro?: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalLayout({ title, intro, lastUpdated, children }: Props) {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[600px] w-[900px] -translate-x-1/2 blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--amber-glow-rgb),0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[720px]">
        {/* Breadcrumb sutil */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-[13px] text-[var(--ink-soft)] underline decoration-[var(--ink-line)] underline-offset-4 transition hover:text-[var(--ink)] hover:decoration-[var(--amber)] md:text-[14px]"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* καιρός header */}
        <div
          className="mb-3 text-[16px] italic text-[var(--amber)] md:text-[18px]"
          style={{ fontFamily: 'var(--font-cardo)' }}
        >
          καιρός
        </div>

        {/* Título */}
        <h1
          className="mb-6 text-[38px] leading-[1.1] tracking-tight text-[var(--ink)] md:text-[56px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 144',
            fontWeight: 400,
          }}
        >
          {title}
        </h1>

        {intro && (
          <p
            className="mb-4 text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[19px]"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontStyle: 'italic',
            }}
          >
            {intro}
          </p>
        )}

        <p className="mb-14 text-[13px] text-[var(--ink-soft)]/70 md:mb-16 md:text-[14px]">
          Última actualización: {lastUpdated}
        </p>

        {/* Contenido */}
        <article
          className="legal-content text-[16px] leading-[1.75] text-[var(--ink)] md:text-[17px]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {children}
        </article>

        {/* Footer */}
        <div className="mt-20 border-t border-[var(--ink-line)] pt-10">
          <p className="text-[14px] text-[var(--ink-soft)] md:text-[15px]">
            ¿Dudas? Escríbenos a{' '}
            <a
              href="mailto:fernandomgarcia373@gmail.com"
              className="text-[var(--amber)] underline decoration-[var(--amber)]/40 underline-offset-4 transition hover:decoration-[var(--amber)]"
            >
              fernandomgarcia373@gmail.com
            </a>
            . Respondemos personalmente.
          </p>
        </div>
      </div>
    </section>
  );
}
