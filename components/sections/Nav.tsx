'use client';

import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-[var(--ink-line)] px-6 py-[14px] backdrop-blur-md md:px-10 md:py-[22px]"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <Logo href="#top" height={32} />

      <div className="flex items-center gap-3 md:gap-7">
        <div className="hidden md:flex gap-9 text-[14px] text-[var(--ink-soft)]">
          <a href="#producto" className="hover:text-[var(--amber)] transition-colors">
            Qué es
          </a>
          <a href="#comunidad" className="hover:text-[var(--amber)] transition-colors">
            Amigos
          </a>
          <a href="#beta" className="hover:text-[var(--amber)] transition-colors">
            Beta
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
