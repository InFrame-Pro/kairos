import { AmigosMockup } from '@/components/mockups/AmigosMockup';

export function Amigos() {
  return (
    <section
      id="comunidad"
      className="px-6 py-[88px] md:px-10 md:py-[160px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-24">
          {/* En desktop: mockup a la izquierda, texto a la derecha. En mobile: texto arriba, mockup abajo */}
          <div className="order-2 md:order-1">
            <AmigosMockup />
          </div>

          <div className="order-1 md:order-2">
            <p
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)] md:mb-7 md:text-[12px]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Amigos
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
              Caminemos{' '}
              <em className="font-light text-[var(--amber)]" style={{ fontStyle: 'italic' }}>
                juntos
              </em>
              .
            </h2>
            <p className="mb-5 text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
              Cuando un amigo tiene un día pesado, le mandas un versículo en dos toques. Si pide
              oración, ves su petición y un botón para orar con él.
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
              Sin ver quién oró más. Sin ver quién falló. Solo{' '}
              <strong className="font-medium text-[var(--ink)]">
                acompañarse en el camino.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
