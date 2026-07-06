'use client';
import { WaitlistForm } from '@/components/waitlist-form';

export function FinalCTA() {
  return (
    <section
      id="beta"
      className="relative overflow-hidden border-t border-[var(--ink-line)] bg-[var(--cream-soft)] px-6 py-[100px] md:px-10 md:py-[160px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 z-0 h-[700px] w-[700px] -translate-x-1/2"
        style={{
          top: '-250px',
          background:
            'radial-gradient(circle, rgba(var(--amber-glow-rgb),0.16) 0%, transparent 65%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1180px] text-center">
        <h2
          className="mb-7 tracking-tight text-[var(--ink)]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(34px, 5.8vw, 78px)',
            lineHeight: 1.05,
            fontVariationSettings: '"opsz" 100',
            fontWeight: 400,
          }}
        >
          Súbete a la beta.
        </h2>
        <p className="mx-auto mb-10 max-w-[540px] text-[16px] leading-relaxed text-[var(--ink-soft)] md:mb-13 md:text-[18px]">
          Estamos invitando a los primeros 500. Acceso anticipado y voz directa en lo que vamos
          construyendo.
        </p>
        <WaitlistForm source="final_cta" ctaLabel="Quiero entrar" />
      </div>
    </section>
  );
}