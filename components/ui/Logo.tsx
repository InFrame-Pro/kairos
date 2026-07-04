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
      <Image
        src="/logo/logo_negro.png"
        alt="Kairós"
        width={height * 3}
        height={height}
        priority
        className="dark:invert dark:brightness-[0.94] transition-[filter] duration-[400ms]"
        style={{ height: `${height}px`, width: 'auto' }}
      />
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
