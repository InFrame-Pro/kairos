// components/share-buttons.tsx
'use client';

import { useState } from 'react';
import posthog from 'posthog-js';

const SHARE_TEXT =
  'Encontré Kairós, una app bíblica hecha con cariño. Súbete a la beta:';

export function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/?utm_source=share&utm_medium=organic&utm_campaign=gracias`
      : 'https://kairos.lat';

  const track = (channel: string) => {
    try {
      posthog.capture('waitlist_shared', { channel });
    } catch {
      // sin analytics no rompemos
    }
  };

  const handleWhatsApp = () => {
    track('whatsapp');
    const msg = encodeURIComponent(`${SHARE_TEXT} ${url}`);
    window.open(`https://wa.me/?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleX = () => {
    track('x');
    const msg = encodeURIComponent(SHARE_TEXT);
    window.open(
      `https://twitter.com/intent/tweet?text=${msg}&url=${encodeURIComponent(url)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopy = async () => {
    track('copy');
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback silencioso
    }
  };

  const base =
    'inline-flex items-center justify-center gap-2 rounded-md border border-[var(--ink-line)] bg-[var(--cream-soft)] px-5 py-3 text-[14px] font-medium text-[var(--ink)] transition-all hover:-translate-y-px hover:border-[var(--amber)] hover:bg-[var(--card)] md:px-6 md:py-[13px] md:text-[15px]';

  return (
    <div className="mx-auto flex max-w-[520px] flex-col gap-3 sm:flex-row sm:justify-center">
      <button type="button" onClick={handleWhatsApp} className={base}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.88 11.88 0 005.74 1.46h.01c6.55 0 11.88-5.33 11.89-11.9a11.82 11.82 0 00-3.44-8.42zM12.06 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.87 9.87 0 0115.24-12.19 9.79 9.79 0 012.9 6.98c0 5.46-4.44 9.86-9.75 9.86zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.13 8.13 0 01-2.4-1.48 8.98 8.98 0 01-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.48c0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.11 4.51.71.31 1.27.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
        Compartir en WhatsApp
      </button>

      <button type="button" onClick={handleX} className={base}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Compartir en X
      </button>

      <button type="button" onClick={handleCopy} className={base}>
        {copied ? (
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copiado
          </>
        ) : (
          <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copiar enlace
          </>
        )}
      </button>
    </div>
  );
}
