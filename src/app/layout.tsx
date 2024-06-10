import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/providers';
import Script from 'next/script';

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
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Script id='HotjarIntegration'>
          {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5017930,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      </body>
    </html>
  );
}
