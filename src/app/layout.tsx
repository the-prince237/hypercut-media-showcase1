import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/providers';
import Hotjar from '@hotjar/browser';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hypercut Media',
  description: 'Catapult Your Brand And Explod your Sells',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteId = 2389591;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <html lang='en'>
      <head>
        <meta name='facebook-domain-verification' content='w99474bb4idskwrs6sg5cj9cnt6mj8' />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
