import type { Metadata, Viewport } from 'next';
import { Fraunces, Cinzel, Cardo, Inter_Tight } from 'next/font/google';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PostHogProvider } from '@/components/ui/PostHogProvider';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600'],
  display: 'swap',
});
const cardo = Cardo({
  subsets: ['latin'],
  variable: '--font-cardo',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

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
    icon: '/favicon.ico',
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
      className={`${fraunces.variable} ${cinzel.variable} ${cardo.variable} ${interTight.variable}`}
    >
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
