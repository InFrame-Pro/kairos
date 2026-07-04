export function AmigosMockup() {
  const amigos = [
    { initials: 'MG', name: 'Matías', status: 'leyó Salmo 23 · hace 2 h', action: 'mandar versículo', online: true, avatarClass: 'bg-gradient-to-br from-[var(--amber)] to-[var(--amber-deep)]' },
    { initials: 'SR', name: 'Sofía', status: 'pidió oración por su mamá', action: 'orar por esto', online: true, primary: true, avatarClass: 'bg-gradient-to-br from-[var(--sage)] to-[#5C6B4D]' },
    { initials: 'JL', name: 'Juan', status: 'no ha pasado hoy', action: 'mandar versículo', online: false, avatarClass: 'bg-gradient-to-br from-[#B86A1F] to-[#6B3814]' },
    { initials: 'EP', name: 'Emilia', status: 'memorizó Romanos 8 · 28', action: 'mandar versículo', online: true, avatarClass: 'bg-gradient-to-br from-[#8B6F47] to-[#4F3D29]' },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[var(--ink-line)] bg-[var(--card)]"
      style={{ boxShadow: '0 30px 60px rgba(var(--shadow-rgb),0.12)' }}
    >
      <div className="flex items-center justify-between border-b border-[var(--ink-line)] px-6 py-5">
        <h4
          className="text-[20px] text-[var(--ink)] md:text-[22px]"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontVariationSettings: '"opsz" 30',
          }}
        >
          Mis amigos
        </h4>
        <span
          className="text-[14px] italic text-[var(--ink-soft)]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          6 personas
        </span>
      </div>

      {amigos.map((a, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 border-b border-[var(--ink-line)] px-5 py-4 transition-colors last:border-b-0 hover:bg-[var(--cream-soft)] md:gap-4 md:px-6`}
        >
          <div className={`relative flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full font-medium text-[var(--cream-soft)] ${a.avatarClass}`}
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: '16px' }}
          >
            {a.initials}
            <span
              className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[var(--card)] ${
                a.online ? 'bg-[var(--sage)]' : 'bg-[var(--cream-deep)]'
              }`}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-[14.5px] font-medium text-[var(--ink)] md:text-[15px]">
              {a.name}
            </div>
            <div className="text-[12.5px] text-[var(--ink-soft)] md:text-[13px]">
              {a.status}
            </div>
          </div>

          <button
            className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-[11.5px] transition-colors md:px-3.5 md:text-[12.5px] ${
              a.primary
                ? 'border border-[var(--amber)] bg-[rgba(var(--amber-rgb),0.1)] text-[var(--amber)]'
                : 'border border-[var(--ink-line)] text-[var(--ink-soft)] hover:border-[var(--amber)] hover:text-[var(--amber)]'
            }`}
          >
            {a.action}
          </button>
        </div>
      ))}
    </div>
  );
}
