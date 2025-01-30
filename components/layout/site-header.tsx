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
import { ThemeToggle } from '@/components/layout/theme-toggle'
import MobileNav from '@/components/layout/mobile-nav'
import { siteConfig } from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-6 pr-4'>
      <div className='container flex h-16 items-center justify-between px-0'>
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
              href={siteConfig.socials.github}
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
