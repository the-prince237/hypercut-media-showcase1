import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/providers';
import { GoogleTagManager } from '@next/third-parties/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hypercut Media',
  description: 'Catapult Your Brand And Explod your Sells',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta name='facebook-domain-verification' content='w99474bb4idskwrs6sg5cj9cnt6mj8' />
        <GoogleTagManager gtmId='G-YQJR10W67D' />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
