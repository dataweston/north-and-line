import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: {
    default: 'North & Line — Public Relations / Minneapolis',
    template: '%s — North & Line',
  },
  description: 'Clarity ages better than charisma. North & Line is a public relations firm based in Minneapolis.',
  keywords: ['public relations', 'PR', 'Minneapolis', 'communications', 'media relations', 'North & Line'],
  authors: [{ name: 'North & Line' }],
  creator: 'North & Line',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://northandline.com',
    siteName: 'North & Line',
    title: 'North & Line — Public Relations / Minneapolis',
    description: 'Clarity ages better than charisma.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'North & Line',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North & Line — Public Relations / Minneapolis',
    description: 'Clarity ages better than charisma.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F9F8F5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
