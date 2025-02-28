'use client'

import React from 'react'
import Link from 'next/link'
import { AllSocials } from '@/components/all-socials'
import dynamic from 'next/dynamic'

// Dynamically import ThreeScene to ensure it only loads on client-side
const ThreeNameAnimation = dynamic(
  () => import('@/components/ThreeNameAnimation'),
  {
    ssr: false,
    loading: () => (
      <h1 className='text-4xl font-bold mb-2'>loading 3d model...</h1>
    ),
  }
)

export default function Hero() {
  return (
    <section id='top' className='flex items-start mb-16'>
      {/* Main content */}
      <div className='flex-1'>
        <p className='text-sm font-medium text-muted-foreground mb-3'>
          Hi, my name is
        </p>

        {/* Three.js name animation container */}
        <div className='h-48 mb-2'>
          <ThreeNameAnimation />
        </div>

        {/* <h1 className='text-4xl font-bold mb-2'>
          {' '}
          <ThreeNameAnimation />
        </h1> */}

        <h2 className='text-2xl font-bold text-muted-foreground mb-4'>
          Software Developer
        </h2>
        <p className='text-md text-muted-foreground mb-8 max-w-2xl'>
          I bring ideas to life through carefully crafted, accessible web
          solutions.
        </p>

        {/* Buttons and medium screen socials */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8'>
          <div className='flex gap-4'>
            <Link
              href='/projects'
              className='px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors'
            >
              View Projects
            </Link>
            <Link
              href='/contact'
              className='px-6 py-3 border border-black dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            >
              Get in Touch
            </Link>
          </div>
          {/* Medium screen socials */}
          <div className='hidden sm:block md:hidden'>
            <AllSocials orientation='horizontal' />
          </div>
        </div>

        {/* Small screen socials */}
        <div className='sm:hidden mt-8'>
          <AllSocials orientation='horizontal' />
        </div>
      </div>

      {/* Large screen vertical socials */}
      <div className='hidden md:flex flex-col items-center ml-20'>
        <div className='flex flex-col items-center'>
          <div className='w-[1px] h-5 bg-muted-foreground/40 mb-6' />
          <AllSocials orientation='vertical' />
          <div className='w-[1px] h-5 bg-muted-foreground/40 mt-6' />
        </div>
      </div>
    </section>
  )
}
