'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import lightBg from '@/public/backgrounds/light-bg-1.jpg'
import darkBg from '@/public/backgrounds/dark-bg-2.jpg'

export function BackgroundImage() {
  const { theme } = useTheme()

  return (
    <div className='fixed inset-0 -z-10'>
      <Image
        src={theme === 'dark' ? darkBg : lightBg}
        alt='background'
        quality={100}
        fill
        placeholder='blur'
        sizes='100vw'
        className='object-cover opacity-60 transition-opacity duration-300'
        priority
      />
    </div>
  )
}
