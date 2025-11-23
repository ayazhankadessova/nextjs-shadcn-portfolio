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

const components = {
  Image,
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
