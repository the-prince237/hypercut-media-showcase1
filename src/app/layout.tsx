import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/providers'
import './globals.css'
import { logout } from 'thin-backend'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>

      <div className='w-screen h-screen flex flex-col bg-gray-900'>
        <div className='flex justify-center w-full'>
          <button onClick={() => logout()}>Logout</button>
        </div>
        <div className='flex items-center h-screen flex-1 justify-center'>
          {children}
        </div>
        </div>
        </Providers>
      </body>
    </html>
  )
}
