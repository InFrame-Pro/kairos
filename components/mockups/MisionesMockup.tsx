export function MisionesMockup() {
  return (
    <div className="flex flex-col gap-4">
      <MisionCard
        active
        tag="en curso"
        days="día 9 de 14"
        title="Leer Marcos en 14 días"
        people="contigo, Sofía, Emilia y 3 más"
        progress={64}
        progressLabel="+47 capítulos juntos"
      />
      <MisionCard
        tag="próxima"
        tagMuted
        days="comienza el lunes"
        title="5 versículos antes de Navidad"
        people="3 amigos invitados"
      />
    </div>
  );
}

interface MisionCardProps {
  active?: boolean;
  tag: string;
  tagMuted?: boolean;
  days: string;
  title: string;
  people: string;
  progress?: number;
  progressLabel?: string;
}

function MisionCard({
  active,
  tag,
  tagMuted,
  days,
  title,
  people,
  progress,
  progressLabel,
}: MisionCardProps) {
  return (
    <div
      className={`rounded-[14px] border px-8 py-7 transition-all hover:-translate-x-1 hover:border-[var(--amber)] ${
        active
          ? 'border-[rgba(var(--amber-rgb),0.4)] bg-gradient-to-br from-[var(--card)] to-[rgba(var(--amber-rgb),0.05)]'
          : 'border-[var(--ink-line)] bg-[var(--card)]'
      }`}
    >
      <div className="mb-3.5 flex items-center justify-between">
        <span
          className={`text-[14px] italic ${
            tagMuted ? 'text-[var(--ink-soft)]' : 'text-[var(--amber)]'
          }`}
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {tag}
        </span>
        <span
          className="text-[13px] italic text-[var(--ink-soft)]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {days}
        </span>
      </div>

      <h3
        className="mb-1.5 text-[22px] text-[var(--ink)] md:text-[24px]"
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontVariationSettings: '"opsz" 36',
        }}
      >
        {title}
      </h3>

      <p className="mb-4 text-[13.5px] text-[var(--ink-soft)]">{people}</p>

      {progress !== undefined && (
        <>
          <div className="mb-2 h-[5px] overflow-hidden rounded-[3px] bg-[var(--cream-deep)]">
            <div
              className="h-full rounded-[3px] transition-[width] duration-700 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, var(--amber-deep), var(--amber))',
              }}
            />
          </div>
          <div
            className="flex justify-between text-[13px] italic text-[var(--ink-soft)]"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            <span>{progress}%</span>
            <span>{progressLabel}</span>
          </div>
        </>
      )}
    </div>
  );
}
