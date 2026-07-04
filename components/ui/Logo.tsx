import Image from 'next/image';
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
      <Image
        src="/logo/logo_negro.png"
        alt="Kairós"
        width={height * 3}
        height={height}
        priority
        className="block dark:hidden"
        style={{ height: `${height}px`, width: 'auto' }}
      />
      {/* Dark mode: logo blanco sobre fondo carbón */}
      <Image
        src="/logo/logo_blanco.png"
        alt="Kairós"
        width={height * 3}
        height={height}
        priority
        className="hidden dark:block"
        style={{ height: `${height}px`, width: 'auto' }}
      />
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
