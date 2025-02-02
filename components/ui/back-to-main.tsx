'use client'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BackNavigationProps {
  href?: string
  label?: string
  variant?: 'button' | 'link'
  className?: string
}

export default function BacktoMain({
  href,
  label = 'Back to Main',
  variant = 'button',
  className,
}: BackNavigationProps) {
  const router = useRouter()
  const handleGoBack = () => router.back()

  const labelContent = (
    <span className='relative'>
      {label}
      <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100' />
    </span>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          'group inline-flex items-center gap-2 hover:text-primary transition-colors',
          variant === 'link' && 'mt-8',
          className
        )}
      >
        <span className='inline-flex items-center transition-transform duration-200 ease-out group-hover:-translate-x-1'>
          ←
        </span>
        <span
          className={cn(
            'font-medium tracking-tight',
            variant === 'button' ? 'text-sm' : 'text-md'
          )}
        >
          {labelContent}
        </span>
      </Link>
    )
  }

  return (
    <button
      onClick={handleGoBack}
      className={cn(
        'group inline-flex items-center gap-2 hover:text-primary transition-colors',
        variant === 'link' && 'mt-8',
        className
      )}
    >
      <span className='inline-flex items-center transition-transform duration-200 ease-out group-hover:-translate-x-1'>
        ←
      </span>
      <span
        className={cn(
          'font-medium tracking-tight',
          variant === 'button' ? 'text-sm' : 'text-md'
        )}
      >
        {labelContent}
      </span>
    </button>
  )
}