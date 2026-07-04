import { LlamaMockup } from '@/components/mockups/LlamaMockup';

export function LaLlama() {
  return (
    <section className="border-y border-[var(--ink-line)] bg-[var(--cream-soft)] px-6 py-[88px] md:px-10 md:py-[160px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <p
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)] md:mb-7 md:text-[12px]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              La Llama
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
              Constancia, no{' '}
              <em className="font-light text-[var(--amber)]" style={{ fontStyle: 'italic' }}>
                perfección
              </em>
              .
            </h2>
            <p className="mb-6 text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
              Tu Llama crece con cada día que pasas con Dios. Pero la vida pasa: tienes{' '}
              <strong className="font-medium text-[var(--ink)]">
                dos días de gracia al mes
              </strong>{' '}
              sin que se rompa.
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
              Y si la rompes, no pasa nada. Empezamos de nuevo. Punto.
            </p>

            <blockquote
              className="mt-8 border-l-2 border-[var(--amber)] pl-6 text-[20px] font-light italic leading-tight text-[var(--ink)] md:mt-10 md:pl-7 md:text-[24px]"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              &ldquo;Me levantaré e iré a mi padre.&rdquo;
              <span
                className="mt-3 block text-[14px] italic text-[var(--amber)]"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Lucas 15 · 18
              </span>
            </blockquote>
          </div>

          <LlamaMockup />
        </div>
      </div>
    </section>
  );
}
