"use client"

import Image from 'next/image'
import { useTheme } from 'next-themes'


export function BackgroundImage() {
  const { theme } = useTheme()

  return (
    <div className='fixed inset-0 -z-10'>
      <Image
        src={
          theme === 'dark'
            ? '/backgrounds/dark-bg-2.jpg'
            : '/backgrounds/light-bg-1.jpg'
        }
        alt='background'
        quality={100}
        fill
        sizes='100vw'
        className='object-cover opacity-40 transition-opacity duration-300'
        priority
      />
    </div>
  )
}
