import Link from 'next/link';

interface LogoProps {
  href?: string;
  height?: number;
  className?: string;
}

export function Logo({ href = '#top', height = 32, className = '' }: LogoProps) {
  const content = (
    <span className={`inline-block leading-none ${className}`}>
      {/* Light mode: logo negro sobre fondo cream */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logo_negro.svg"
        alt="Kairós"
        className="block dark:hidden"
        style={{ height: `${Math.round(height * 0.8)}px`, width: 'auto' }}
      />
      {/* Dark mode: logo blanco sobre fondo carbón */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logo_blanco.svg"
        alt=""
        aria-hidden="true"
        className="hidden dark:block"
        style={{ height: `${Math.round(height * 0.8)}px`, width: 'auto' }}
      />
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
