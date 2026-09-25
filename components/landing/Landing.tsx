'use client';

// Landing de Kairós. El marcado se sirve desde el servidor (bueno para SEO)
// y al montar se vuelve a pintar y se activan las animaciones.

import { useEffect, useRef } from 'react';
import '@/app/landing.css';
import { MARKUP } from './markup';
import { initLanding } from './init';
import { joinWaitlist } from '@/app/actions/waitlist';
import { requestChurchChannel } from '@/app/actions/church';

const FONTS =
  'https://fonts.googleapis.com/css2?family=Cardo:ital@0;1&family=Cinzel:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter+Tight:wght@400;500;600&family=Literata:ital,opsz,wght@0,7..72,400;1,7..72,400&display=swap';

export function Landing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    // Marcado limpio en cada montaje: así los listeners nunca se duplican.
    root.innerHTML = MARKUP;
    return initLanding(root, { waitlist: joinWaitlist, church: requestChurchChannel });
  }, []);

  return (
    <>
      <link rel="stylesheet" href={FONTS} precedence="default" />
      <div ref={ref} className="kx" dangerouslySetInnerHTML={{ __html: MARKUP }} />
    </>
  );
}
