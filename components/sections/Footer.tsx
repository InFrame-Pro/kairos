import { Logo } from '@/components/ui/Logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[var(--ink-line)] bg-[var(--cream)] px-6 py-20 text-[var(--ink-soft)] md:px-10 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-14">
          <div>
            <div className="mb-5">
              <Logo href="#top" height={38} />
            </div>
            <p className="max-w-[380px] text-[14px] leading-relaxed">
              Una iniciativa sin fines de lucro hecha por jóvenes para jóvenes. Sostenida por
              donativos. Hecha en México, para Latinoamérica y el mundo.
            </p>
          </div>

          <div>
            <h5
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Producto
            </h5>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <a href="/#producto" className="hover:text-[var(--ink)]">
                  Qué es
                </a>
              </li>
              <li>
                <a href="/#comunidad" className="hover:text-[var(--ink)]">
                  Amigos
                </a>
              </li>
              <li>
                <a href="/#beta" className="hover:text-[var(--ink)]">
                  Beta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Proyecto
            </h5>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <Link href="/nosotros" className="hover:text-[var(--ink)]">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <a
                  href="mailto:fernandomgarcia373@gmail.com"
                  className="hover:text-[var(--ink)]"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a href="/#beta" className="hover:text-[var(--ink)]">
                  Apoyar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--amber)]"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Legal
            </h5>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <Link href="/privacidad" className="hover:text-[var(--ink)]">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-[var(--ink)]">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center border-t border-[var(--ink-line)] pt-8 text-center text-[13px]">
          <span>© 2026 Kairós · Proyecto en proceso de constituirse como A.C.</span>
        </div>
      </div>
    </footer>
  );
}
