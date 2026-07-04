'use client';

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

        <form
          className="mx-auto flex max-w-[480px] flex-col gap-2.5 md:flex-row md:gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const btn = e.currentTarget.querySelector('button');
            if (btn) btn.textContent = 'listo, te avisamos ✓';
          }}
        >
          <input
            type="email"
            placeholder="tu correo"
            required
            className="flex-1 rounded-md border border-[var(--ink-line)] bg-[var(--cream-soft)] px-[18px] py-4 text-[16px] text-[var(--ink)] placeholder:text-[var(--ink-soft)]/60 focus:border-[var(--amber)] focus:bg-[var(--card)] focus:outline-none md:px-5 md:py-[17px] md:text-[15px]"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-md border-none bg-[var(--amber)] px-6 py-4 text-[14px] font-semibold text-[var(--cream-soft)] transition-all hover:-translate-y-px hover:bg-[var(--amber-deep)] md:px-[30px] md:py-[17px]"
          >
            Avísame cuando salga
          </button>
        </form>
      </div>
    </section>
  );
}
