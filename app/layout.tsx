import type { Metadata, Viewport } from 'next';
import { Fraunces, Cinzel, Cardo, Inter_Tight } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Kairós — Una app bíblica para tu generación',
  description:
    'Una app cristiana hecha en comunidad, gratis para siempre. καιρός — el momento exacto es ahora.',
  keywords: ['biblia', 'app cristiana', 'kairós', 'oración', 'devocional'],
  authors: [{ name: 'Kairós A.C.' }],
  openGraph: {
    title: 'Kairós — El momento exacto es ahora',
    description: 'App bíblica gratuita hecha con cariño.',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kairós — El momento exacto es ahora',
    description: 'App bíblica gratuita hecha con cariño.',
  },
  icons: {
    icon: '/favicon.ico',
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
