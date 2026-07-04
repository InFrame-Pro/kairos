export function Tradiciones() {
  return (
    <section className="px-6 py-[88px] md:px-10 md:py-[160px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)] md:mb-7 md:text-[12px]"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Para todos
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
            Tu tradición.{' '}
            <em className="font-light text-[var(--amber)]" style={{ fontStyle: 'italic' }}>
              Respetada.
            </em>
          </h2>
          <p className="text-[17px] leading-relaxed text-[var(--ink-soft)] md:text-[18px]">
            Al empezar, eliges cómo vives tu fe. La app se adapta.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
          <Tradicion
            name="Católica"
            description="Rosario, Examen Ignaciano, lecturas del leccionario, calendario litúrgico."
          />
          <Tradicion
            name="Evangélica"
            description="Quiet time, devocionales, memorización, oración personal libre."
          />
          <Tradicion
            name="Ortodoxa"
            description="Calendario juliano, oración de Jesús, lecturas patrísticas, modo ayuno."
          />
          <Tradicion
            name="Explorando"
            description="Sin etiquetas. Lecturas básicas, preguntas honestas, sin presión."
          />
        </div>
      </div>
    </section>
  );
}

function Tradicion({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-[14px] border border-[var(--ink-line)] bg-[var(--cream-soft)] px-5 py-6 transition-all hover:-translate-y-1 hover:border-[var(--amber)] md:px-7 md:py-9">
      <div
        className="mb-2.5 text-[20px] text-[var(--ink)] md:text-[24px]"
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 36',
        }}
      >
        {name}
      </div>
      <p className="text-[13px] leading-relaxed text-[var(--ink-soft)] md:text-[13.5px]">
        {description}
      </p>
    </div>
  );
}
