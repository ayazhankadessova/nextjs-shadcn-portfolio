'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MobileNav from './mobile-nav'
import { MainNav } from './main-nav'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import headerNavLinks from '@/config/headerNavLinks'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import { ChevronDown } from 'lucide-react'

export function SiteHeader() {
  const headerClass =
    'container flex max-w-screen-2xl px-2 h-20 z-10 flex flex-row justify-between gap-2 items-center sticky top-0 bg-background'

  return (
    <header className={headerClass}>
      <MainNav />

      <div className='hidden min-[750px]:block ml-6'>
        <NavigationMenu className='hidden max-w-30 sm:inline-block'>
          <NavigationMenuList>
            {Object.values(headerNavLinks).map((dialog) => (
              <NavigationMenuItem key={dialog.title}>
                {dialog.toggle ? (
                  <>
                    <NavigationMenuTrigger>
                      {dialog.title}
                      <ChevronDown
                        className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
                        aria-hidden='true'
                      />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                        {dialog.dropdown.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={dialog.href}>
                    <NavigationMenuTrigger>
                      {dialog.title}
                    </NavigationMenuTrigger>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='min-[750px]:hidden'>
        <MobileNav />
      </div>

      <div className='hidden min-[750px]:inline-flex items-end'>
        <div>
          <ThemeToggle />
        </div>
        <Link
          href=''
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm' }),
            'group justify-center rounded-md bg-primary text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
          )}
        >
          Contact Us
        </Link>
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
