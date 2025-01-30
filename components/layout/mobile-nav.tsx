'use client'
import { useState, useEffect, useRef } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'
import { ThemeToggle } from '@/components/layout/theme-toggle'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const navRef = useRef(null)

  const onToggleNav = () => {
    setOpen((status) => {
      if (status) {
        enableBodyScroll(navRef.current!)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current!)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <Sheet open={open} onOpenChange={onToggleNav}>
      <ThemeToggle />
      <SheetTrigger asChild>
        <Button variant='ghost' className='w-10 px-0 md:hidden'>
          <Menu className='h-[1.1rem] w-[1.2rem]' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink
          onOpenChange={onToggleNav}
          href='/'
          className='flex items-center'
        >
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='flex flex-col gap-3 mt-3'>
          {Object.values(headerNavLinks).map((dialog) => (
            <MobileLink
              key={dialog.title}
              onOpenChange={onToggleNav}
              href={dialog.href}
            >
              {dialog.title}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
