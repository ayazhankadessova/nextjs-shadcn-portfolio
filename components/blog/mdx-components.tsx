import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import React, { memo } from 'react'
import { Callout } from '@/components/blog/callout'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  const Component = fn({ ...runtime }).default
  Component.displayName = 'MDXContent'
  return Component
}

const components = {
  Image,
  Callout,
}

interface MdxProps {
  code: string
}

export const MDXContent = memo(({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component components={components} />
})

MDXContent.displayName = 'MyComponent'
