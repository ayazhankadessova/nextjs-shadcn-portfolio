'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import MobileNav from '@/components/layout/mobile-nav'
import { siteConfig } from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by their vertical position
        const intersectingEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const rectA = a.target.getBoundingClientRect()
            const rectB = b.target.getBoundingClientRect()
            return rectA.top - rectB.top
          })

        // If we have any intersecting entries
        if (intersectingEntries.length > 0) {
          const firstSection = intersectingEntries[0]

          setActiveSection(firstSection.target.id)
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]')
      // console.log(
      //   'Found sections:',
      //   Array.from(sections).map((s) => s.id)
      // )
      sections.forEach((section) => {
        observer.observe(section)
      })
    }, 10)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      })
    }
  }
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-6 pr-4'>
      <div className='container flex h-16 items-center justify-between px-0'>
        <div className='flex gap-6 items-center'>
          <a
            href='#top'
            onClick={(e) => scrollToSection(e, '#top')}
            className='hidden md:flex text-lg font-semibold bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent'
          >
            {siteConfig.name}
          </a>
          {activeSection && activeSection !== 'top' && (
            <span
              className={cn(
                'md:hidden text-sm font-medium transition-colors relative',
                'text-purple-500 after:content-[""] after:block after:h-0.5 after:bg-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0'
              )}
            >
              {activeSection.toUpperCase()}
            </span>
          )}

          <NavigationMenu className='hidden md:flex'>
            <NavigationMenuList className='gap-6'>
              {Object.values(headerNavLinks).map((dialog) =>
                dialog.toggle ? (
                  <NavigationMenuItem key={dialog.title}>
                    <NavigationMenuTrigger>
                      {dialog.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]'>
                        {dialog.dropdown?.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={dialog.title}>
                    <Link href={dialog.href} legacyBehavior passHref>
                      <a
                        href={dialog.href}
                        onClick={(e) => scrollToSection(e, dialog.href)}
                        className={cn(
                          'text-sm font-medium transition-colors relative',
                          activeSection === dialog.href.slice(1)
                            ? 'text-purple-500 after:content-[""] after:block after:h-0.5 after:bg-purple-500 after:absolute after:-bottom-1 after:left-0 after:right-0'
                            : 'hover:text-purple-500'
                        )}
                        // className='text-sm font-medium hover:text-purple-500 transition-colors'
                      >
                        {dialog.title}
                      </a>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center'>
          <div className='hidden md:flex items-center'>
            <Link
              href={siteConfig.socials.github}
              className='hover:text-purple-500 transition-colors p-2'
            >
              <Github className='h-[1.1rem] w-[1.1rem]' />
            </Link>
            <Link
              href={siteConfig.socials.linkedin}
              className='hover:text-purple-500 transition-colors p-2'
            >
              <Linkedin className='h-[1.1rem] w-[1.1rem]' />
            </Link>
            <ThemeToggle />
          </div>
          <div className='md:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
