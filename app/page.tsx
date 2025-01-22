import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Home() {
  return (
    <div className='container max-w-3xl mx-auto py-32'>
      <h1 className='text-5xl font-bold mb-6'>
        Creative Developer.
        <br />
        Minimalist Designer.
      </h1>
      <p className='text-xl text-gray-600 dark:text-gray-300 mb-12'>
        Hey there, I am Aya. I love minimalistic & simple things - websites included. 
        I love running, swimming, skiing, and ok I will complete this part later :)
      </p>
      <div className='flex space-x-4'>
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
    </div>
  )
}
