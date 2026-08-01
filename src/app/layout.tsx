import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oxfordvipchauffeurs.com'),
  title: 'Oxford VIP Chauffeurs | Luxury Airport Transfers & Bespoke Travel',
  description: 'Book a Bespoke Chauffeur Service or Airport Transfer from Oxford with Chauffeur Travel experts Oxford VIP Chauffeurs. Experience luxury with our Range Rover Vogue fleet.',
  openGraph: {
    title: 'Oxford VIP Chauffeurs',
    description: 'Bespoke Chauffeur Service and Luxury Airport Transfers from Oxford.',
    url: 'https://www.oxfordvipchauffeurs.com/',
    siteName: 'Oxford VIP Chauffeurs',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
