import { siteConfig } from '@/config/site'
import headerNavLinks from '@/config/headerNavLinks'
import { contactInfo } from '@/data/contact'
import { Mail, Send, Github } from 'lucide-react'
import Link from 'next/link'
import { AllSocials } from '@/components/all-socials'

export function BlogFooter() {
  return (
    <footer className='border-t border-primary/20'>
      <div className='container flex mx-auto px-2 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
          {/* About Section - Full width on mobile, half on md, 7 cols on lg */}
          <div className='md:col-span-12 lg:col-span-7 lg:pr-10'>
            <Link href='/' className='text-lg font-semibold mb-4 block'>
              {siteConfig.name}
            </Link>
            <p className='text-sm text-muted-foreground mb-4'>
              UI/UX Engineer bridging design and development to create
              intuitive digital experiences. I craft interfaces that blend
              aesthetic excellence with technical precision, transforming ideas
              into user-centered solutions.
            </p>
            <AllSocials />
          </div>

          {/* Navigation - Full width on mobile, half on md with Contact, 1 col on lg */}
          <div className='md:col-span-6 lg:col-span-1'>
            <div>
              <div>
                <h3 className='font-medium mb-4'>Navigation</h3>
                <ul className='space-y-2 text-sm'>
                  {Object.values(headerNavLinks).map((dialog) => (
                    <li key={dialog.title}>
                      <Link
                        href={dialog.href}
                        className='text-muted-foreground hover:text-foreground transition'
                      >
                        {dialog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Contribute - Full width on mobile, half on md, 4 cols on lg */}
          <div className='md:col-span-6 lg:col-span-4 lg:pl-10'>
            <div className='w-full'>
              <h3 className='font-medium mb-5'>Get in Touch</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className='text-muted-foreground hover:text-foreground transition flex items-center gap-2'
                  >
                    <Mail className='h-4 w-4' />
                    {contactInfo.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://t.me/${contactInfo.telegram.substring(1)}`}
                    className='text-muted-foreground hover:text-foreground transition flex items-center gap-2'
                  >
                    <Send className='h-4 w-4' />
                    {contactInfo.telegram}
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://github.com/ayazhankadessova/ayazhankad'
                    className='text-muted-foreground hover:text-foreground transition flex items-center gap-2'
                  >
                    <Github className='h-4 w-4' />
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='container max-w-6xl py-4 px-4 flex justify-center border-t border-primary/20'>
        <div className='flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground'>
          <p>© 2025 {siteConfig.name}</p>
          <span className='hidden sm:inline'>•</span>
          <p>Made with ♥ by ayazhankad</p>
        </div>
      </div>
    </footer>
  )
}
