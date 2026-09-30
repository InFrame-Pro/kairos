'use client';

// Landing de Kairós. El marcado se sirve desde el servidor (bueno para SEO)
// y al montar se vuelve a pintar y se activan las animaciones.

import { useEffect, useRef } from 'react';
import '@/app/landing.css';
import { MARKUP } from './markup';
import { initLanding } from './init';
import { joinWaitlist } from '@/app/actions/waitlist';
import { requestChurchChannel } from '@/app/actions/church';

export function Landing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    // Marcado limpio en cada montaje: así los listeners nunca se duplican.
    root.innerHTML = MARKUP;
    return initLanding(root, {
      waitlist: joinWaitlist,
      church: requestChurchChannel,
      // Enlaces de pago (Stripe, Mercado Pago…). {amount} se reemplaza por el monto.
      donate: {
        monthly: process.env.NEXT_PUBLIC_DONATE_MONTHLY_URL,
        once: process.env.NEXT_PUBLIC_DONATE_ONCE_URL,
      },
    });
  }, []);

  return (
    <div ref={ref} className="kx" dangerouslySetInnerHTML={{ __html: MARKUP }} />
  );
}
