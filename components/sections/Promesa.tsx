export function Promesa() {
  return (
    <section className="px-6 py-[110px] text-center md:py-[200px] md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <span
          className="mb-11 block text-[62px] leading-none italic text-[var(--amber)] opacity-90 md:mb-16 md:text-[150px]"
          style={{ fontFamily: 'var(--font-cardo)' }}
        >
          καιρός
        </span>
        <p
          className="mx-auto max-w-[820px] text-[23px] leading-tight tracking-tight text-[var(--ink)] md:text-[54px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 60',
          }}
        >
          No importa cuánto tiempo haya pasado.
        </p>
        <p
          className="mx-auto mt-3.5 max-w-[820px] text-[23px] font-light italic leading-tight tracking-tight text-[var(--amber)] md:text-[54px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 60',
          }}
        >
          Hoy es el momento perfecto para iniciar.
        </p>
      </div>
    </section>
  );
}
