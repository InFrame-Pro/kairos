import { MisionesMockup } from '@/components/mockups/MisionesMockup';

export function Misiones() {
  return (
    <section className="border-y border-[var(--ink-line)] bg-[var(--cream-soft)] px-6 py-[88px] md:px-10 md:py-[160px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
          <div>
            <p
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)] md:mb-7 md:text-[12px]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Misiones
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
              Retos cortos.{' '}
              <em className="font-light text-[var(--amber)]" style={{ fontStyle: 'italic' }}>
                Juntos.
              </em>
            </h2>
            <p className="mb-5 text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
              Una misión tiene principio y fin: leer un evangelio en 14 días, orar 30 días por
              la familia, memorizar versículos antes de Navidad.
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
              Cada quien avanza a su ritmo, todos ven la misma barra de progreso.
            </p>
          </div>

          <MisionesMockup />
        </div>
      </div>
    </section>
  );
}
