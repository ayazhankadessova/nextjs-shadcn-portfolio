import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { BlogFooter } from '@/components/layout/site-footer'
import { Providers } from '@/components/providers'
import { BackgroundImage } from '@/components/layout/bg-image'

const inter = Inter({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'AyazhanKad',
  description: 'Welcome to Ayazhan\'s portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={cn('min-h-screen font-mono antialiased', inter.variable)}
      >
        <Providers>
          <BackgroundImage />
          <div className='relative flex min-h-dvh flex-col'>
            <main className='flex-1'>{children}</main>
          </div>
          <div className='relative flex flex-col px-4'>
            <BlogFooter />
          </div>
        </Providers>
        {/* <canvas className='threejs'></canvas> */}
        {/* <script type='module' src='./script.js'></script> */}
      </body>
    </html>
  )
}
