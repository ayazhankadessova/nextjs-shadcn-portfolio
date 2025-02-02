import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import {
  ArrowRight,
  ExternalLink,
  Link as LinkIcon,
  InfoIcon,
  StarIcon,
  AlertTriangle,
} from 'lucide-react'

interface HighlightProps {
  children: ReactNode
  variant?: 'link' | 'info' | 'featured' | 'warning' | 'quote'
  href?: string
  icon?: ReactNode
  className?: string
}

export function Highlight({
  children,
  variant = 'info',
  href,
  icon,
  className,
  ...props
}: HighlightProps) {
  const variants = {
    link: {
      container: 'border-blue-200 bg-blue-50 hover:bg-blue-100 cursor-pointer',
      icon: icon || <LinkIcon className='h-4 w-4' />,
      extra: <ArrowRight className='h-4 w-4 ml-2' />,
    },
    info: {
      container: 'border-gray-200 bg-gray-50',
      icon: icon || <InfoIcon className='h-4 w-4' />,
    },
    featured: {
      container: 'border-purple-200 bg-purple-50',
      icon: icon || <StarIcon className='h-4 w-4' />,
    },
    warning: {
      container: 'border-yellow-200 bg-yellow-50',
      icon: icon || <AlertTriangle className='h-4 w-4' />,
    },
    quote: {
      container: 'border-green-200 bg-green-50',
      icon: icon || <ExternalLink className='h-4 w-4' />,
    },
  }

  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      href={href}
      className={cn(
        'flex items-center rounded-lg border py-2 px-4 transition-colors',
        variants[variant].container,
        'dark:bg-opacity-10',
        className
      )}
      {...props}
    >
      <div className='mr-3 flex-shrink-0'>{variants[variant].icon}</div>
      <div className='flex-grow'>{children}</div>
      {variant === 'link' && variants[variant].extra}
    </Wrapper>
  )
}
