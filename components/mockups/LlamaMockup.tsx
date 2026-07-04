'use client';

import { useMemo } from 'react';

export function LlamaMockup() {
  // Generar heatmap determinístico (26 semanas x 7 días)
  const cells = useMemo(() => {
    const total = 26 * 7;
    const pattern: number[] = [];
    // Semilla fija para consistencia entre server y client
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < total; i++) {
      const r = random();
      let lvl = 0;
      if (r > 0.78) lvl = 4;
      else if (r > 0.55) lvl = 3;
      else if (r > 0.35) lvl = 2;
      else if (r > 0.18) lvl = 1;
      pattern.push(lvl);
    }
    // Últimos 47 días mayoritariamente activos
    for (let i = total - 47; i < total; i++) {
      pattern[i] = random() > 0.15 ? (random() > 0.5 ? 4 : 3) : 2;
    }
    return pattern;
  }, []);

  const cellClass = (lvl: number) => {
    if (lvl === 4) return 'bg-[var(--amber)]';
    if (lvl === 3) return 'bg-[rgba(var(--amber-rgb),0.65)]';
    if (lvl === 2) return 'bg-[rgba(var(--amber-rgb),0.4)]';
    if (lvl === 1) return 'bg-[rgba(var(--amber-rgb),0.2)]';
    return 'bg-[var(--cream-deep)]';
  };

  return (
    <div
      className="rounded-2xl border border-[var(--ink-line)] bg-[var(--card)] p-6 md:p-[34px]"
      style={{
        boxShadow:
          '0 30px 60px rgba(var(--shadow-rgb),0.12), 0 0 60px rgba(var(--amber-glow-rgb),0.08)',
      }}
    >
      <div className="mb-7 flex items-center justify-between">
        <span
          className="text-[14px] italic text-[var(--ink-soft)]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Tu llama
        </span>
        <span
          className="text-[14px] italic text-[var(--amber)]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          encendida
        </span>
      </div>

      <div className="mb-8 flex items-baseline gap-3.5">
        <div
          className="font-light leading-none text-[var(--amber)]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(60px, 10vw, 96px)',
            fontVariationSettings: '"opsz" 144',
          }}
        >
          47
        </div>
        <div className="text-[14px] leading-tight text-[var(--ink-soft)]">
          <strong className="block text-[16px] font-medium text-[var(--ink)]">
            días seguidos
          </strong>
          mejor racha: 84 días
        </div>
      </div>

      <div className="mb-7 grid grid-cols-[repeat(20,1fr)] gap-[3px] md:grid-cols-[repeat(26,1fr)]">
        {cells.map((lvl, i) => (
          <div
            key={i}
            className={`aspect-square rounded-[2px] ${cellClass(lvl)}`}
          />
        ))}
      </div>

      <div className="flex justify-between border-t border-[var(--ink-line)] pt-5 text-[13.5px]">
        <span className="text-[var(--ink-soft)]">Días de gracia este mes</span>
        <span className="font-medium text-[var(--ink)]">2 / 2 disponibles</span>
      </div>
    </div>
  );
}
