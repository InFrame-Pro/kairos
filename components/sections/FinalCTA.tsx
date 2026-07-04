'use client';

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
            Quiero entrar
          </button>
        </form>
      </div>
    </section>
  );
}
