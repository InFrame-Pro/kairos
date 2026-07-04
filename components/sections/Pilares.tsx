export function Pilares() {
  return (
    <section
      id="producto"
      className="px-6 py-[88px] md:px-10 md:py-[160px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <p
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)] md:mb-7 md:text-[12px]"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Lo que vas a encontrar
        </p>
        <h2
          className="mb-7 tracking-tight text-[var(--ink)] md:mb-8"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(34px, 5.8vw, 78px)',
            lineHeight: 1.05,
            fontVariationSettings: '"opsz" 100',
            fontWeight: 400,
          }}
        >
          Tres cosas, hechas con cariño.
        </h2>
        <p className="mb-13 max-w-[560px] text-[17px] leading-relaxed text-[var(--ink-soft)] md:mb-20 md:text-[18px]">
          Nada extra, nada de relleno.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <Pilar
            title="Lectura"
            description="Múltiples traducciones de la Biblia. Planes guiados, audio, modo oscuro. La lectura del domingo sincronizada con tu iglesia."
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4z" />
                <path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8V4z" />
              </svg>
            }
          />
          <Pilar
            title="Reflexión"
            description="Pregunta lo que sea — sobre dudas, miedos, versículos confusos — y recibe respuestas honestas, supervisadas por pastores y sacerdotes reales."
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            }
          />
          <Pilar
            title="Amigos"
            description="Una red pequeña de personas cercanas que te acompañan. Sin rankings, sin competencia."
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Pilar({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[var(--ink-line)] bg-[var(--cream-soft)] px-7 py-8 transition-all hover:-translate-y-1 hover:border-[var(--amber)] hover:shadow-[0_20px_40px_rgba(var(--shadow-rgb),0.1)] md:px-10 md:py-11">
      <div className="mb-6 h-9 w-9 text-[var(--amber)] md:mb-8 md:h-11 md:w-11">{icon}</div>
      <h3
        className="mb-3 text-[23px] tracking-tight text-[var(--ink)] md:text-[28px]"
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 36',
        }}
      >
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-[var(--ink-soft)]">{description}</p>
    </div>
  );
}
