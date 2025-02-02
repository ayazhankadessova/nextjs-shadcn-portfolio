'use client'
import Link from 'next/link'

export default function BackToMain() {
  return (
    <Link href={'/'} className='block group mt-8'>
      <div className='inline-flex items-center gap-1'>
        <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-x-1'>
          ←
        </span>
        <h3 className='text-md font-medium tracking-tight group-hover:text-primary transition-colors'>
          Back to Main
        </h3>
      </div>
    </Link>
  )
}
