'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface BackButtonProps {
  readonly label?: string
  readonly className?: string
}

export default function BackButton({ 
  label = 'Back to Main',
  className 
}: Readonly<BackButtonProps>) {
  const router = useRouter()
  const handleGoBack = () => router.back()

  return (
    <button
      onClick={handleGoBack}
      className={cn(
        'group inline-flex items-center gap-2 hover:text-primary transition-colors',
        className
      )}
    >
      <span className='inline-flex items-center transition-transform duration-200 ease-out group-hover:-translate-x-1'>
        ←
      </span>
      <span className='text-sm font-medium tracking-tight'>
        <span className='relative'>
          {label}
          <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100' />
        </span>
      </span>
    </button>
  )
}
