import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PostHogProvider } from '@/components/ui/PostHogProvider';
import './globals.css';

// Las fuentes se cargan desde Google Fonts en el navegador (no al compilar),
// para que un corte de red en Vercel no vuelva a tumbar el deploy.
const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter+Tight:wght@400;500;600&display=swap';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Kairós — Una app bíblica para tu generación',
    template: '%s · Kairós',
  },
  description:
    'Una app cristiana hecha en comunidad, gratis para siempre. καιρός — el momento exacto es ahora.',
  keywords: [
    'biblia',
    'app cristiana',
    'kairós',
    'oración',
    'devocional',
    'jóvenes cristianos',
    'lectura bíblica',
    'biblia app',
    'devocional diario',
  ],
  authors: [{ name: 'Kairós A.C.' }],
  creator: 'Kairós A.C.',
  publisher: 'Kairós A.C.',
  openGraph: {
    title: 'Kairós — El momento exacto es ahora',
    description: 'Una app bíblica hecha con cariño, gratis para siempre.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Kairós',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kairós — El momento exacto es ahora',
    description: 'Una app bíblica hecha con cariño, gratis para siempre.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0E6CC' },
    { media: '(prefers-color-scheme: dark)', color: '#14100D' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>
        <ThemeProvider>
          <Suspense fallback={null}>
            <PostHogProvider>{children}</PostHogProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
