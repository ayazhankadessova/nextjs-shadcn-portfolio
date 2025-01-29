import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { BlogFooter } from '@/components/site-footer'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'AyazhanKad',
  description: 'Read articles by AyazhanKad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`scroll-smooth`}>
      <body
        className={(cn('min-h-screen font-mono antialiased'), inter.variable)}
      >
        <Providers>
          <SiteHeader />
          <div className='relative flex min-h-dvh flex-col px-4'>
            <main className='flex-1'>{children}</main>
            <BlogFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
