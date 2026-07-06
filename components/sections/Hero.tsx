'use client';

import { WaitlistForm } from '@/components/waitlist-form';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-[100px] pb-[70px] md:pt-[140px] md:pb-[100px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 blur-[70px]"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--amber-glow-rgb),0.14) 0%, rgba(var(--amber-glow-rgb),0.04) 40%, transparent 70%)',
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[820px] px-6 text-center md:px-10">
        <div className="mb-7 md:mb-9">
          <div
            className="text-[24px] md:text-[32px] leading-none italic text-[var(--amber)]"
            style={{ fontFamily: 'var(--font-cardo)' }}
          >
            καιρός
          </div>
          <div
            className="mt-2 text-[13px] italic text-[var(--ink-soft)] md:text-[15px]"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            — el momento exacto, en griego
          </div>
        </div>
        <h1
          className="mb-8 text-[46px] leading-[0.96] tracking-tight md:mb-10 md:text-[112px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 144',
            fontWeight: 400,
          }}
        >
          El momento exacto
          <br />
          es{' '}
          <em
            className="font-light text-[var(--amber)]"
            style={{ fontStyle: 'italic' }}
          >
            ahora
          </em>
          .
        </h1>
        <p className="mx-auto mb-10 max-w-[560px] text-[17px] leading-relaxed text-[var(--ink-soft)] md:mb-12 md:text-[20px]">
          Una app bíblica hecha con cariño,{' '}
          <strong className="font-medium text-[var(--ink)]">gratis para siempre</strong>.
        </p>

        <WaitlistForm source="hero" />
      </div>
    </section>
  );
}