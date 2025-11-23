import Image from 'next/image'
import Link from 'next/link'
import * as runtime from 'react/jsx-runtime'
import React, { memo } from 'react'
import { Callout } from '@/components/blog/callout'
import { Button as UIButton } from '@/components/ui/button'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  const Component = fn({ ...runtime }).default
  Component.displayName = 'MDXContent'
  return Component
}

interface ButtonProps {
  href: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children: React.ReactNode
}

const Button = ({ href, variant = 'default', size = 'default', children }: ButtonProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <UIButton variant={variant} size={size}>
        {children}
      </UIButton>
    </Link>
  )
}

// Optimized image component for MDX with blur placeholder
interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

const OptimizedImage = ({ src, alt, width = 800, height = 600, priority = false, className }: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
      className={className}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}

const components = {
  Image: OptimizedImage,
  Callout,
  Button,
}

interface MdxProps {
  code: string
}

export const MDXContent = memo(({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component components={components} />
})

MDXContent.displayName = 'MyComponent'
