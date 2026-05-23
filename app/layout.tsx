import type { Metadata, Viewport } from 'next';
import { Libre_Caslon_Text, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const serif = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://comunidad-doce.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Comunidad Doce — Formamos vidas, levantamos líderes',
    template: '%s · Comunidad Doce',
  },
  description:
    'Comunidad de crecimiento espiritual, formación integral y liderazgo. Únete a más de 1,200 miembros caminando juntos.',
  applicationName: 'Comunidad Doce',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Doce',
  },
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Comunidad Doce',
    title: 'Comunidad Doce — Formamos vidas, levantamos líderes',
    description: 'Crecimiento espiritual, formación integral y liderazgo cristiano.',
    images: [{ url: '/icons/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comunidad Doce',
    description: 'Formamos vidas, levantamos líderes y extendemos el Reino.',
    images: ['/icons/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcf8ff' },
    { media: '(prefers-color-scheme: dark)', color: '#493ee5' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
