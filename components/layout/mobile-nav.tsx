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
import { siteConfig } from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { cn } from '@/lib/utils'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const navRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aDistance = Math.abs(a.boundingClientRect.top)
            const bDistance = Math.abs(b.boundingClientRect.top)
            return aDistance - bDistance
          })
  

        if (visibleSections.length > 0) {
          const currentSection = visibleSections[0].target.id

          if (currentSection === 'top') {
            setActiveSection('')
          } else {
            setActiveSection(currentSection)
          }
        }
      },
      {
        rootMargin: '-10% 0px -85% 0px',
        threshold: [0, 0.1, 0.5, 1],
      }
    )

    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        observer.observe(section)
      })
    }, 100)

    return () => observer.disconnect()
  }, [])

  const onToggleNav = () => {
    setOpen((status) => {
      if (status) {
        enableBodyScroll(navRef.current!)
      } else {
        disableBodyScroll(navRef.current!)
      }
      return !status
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      })
    }
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
          href='#top'
          className='flex items-center'
          onClick={() => scrollToSection('#top')}
        >
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='flex flex-col gap-3 mt-3'>
          {Object.values(headerNavLinks).map((dialog) => (
            <MobileLink
              key={dialog.title}
              onOpenChange={onToggleNav}
              href={dialog.href}
              onClick={() => scrollToSection(dialog.href)}
              className={cn(
                'relative transition-colors',
                activeSection && activeSection === dialog.href.slice(1)
                  ? 'text-purple-500 underline after:content-[""] after:block after:h-0.5 after:bg-purple-500 after:absolute after:-bottom-1'
                  : 'hover:text-purple-500'
              )}
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
  onClick?: () => void
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  onClick,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
