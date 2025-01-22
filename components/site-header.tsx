import React from 'react'
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
import { ThemeToggle } from './theme-toggle'
import MobileNav from './mobile-nav'
import { siteConfig } from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex gap-6 items-center'>
          <Link
            href='/'
            className='text-lg font-semibold bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent'
          >
            {siteConfig.name}
          </Link>

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
                        {dialog.dropdown.map((item) => (
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
                      <NavigationMenuLink className='text-sm font-medium hover:text-purple-500 transition-colors'>
                        {dialog.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center gap-4'>
          <div className='hidden md:flex items-center gap-4'>
            <Link
              href={siteConfig.socials.linkedin}
              className='hover:text-purple-500 transition-colors'
            >
              <Github className='h-5 w-5' />
            </Link>
            <Link
              href={siteConfig.socials.linkedin}
              className='hover:text-purple-500 transition-colors'
            >
              <Linkedin className='h-5 w-5' />
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
