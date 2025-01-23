import { siteConfig } from '@/config/site'
import { Icons } from './icons'
import Link from 'next/link'

export function BlogFooter() {
  return (
    <footer className="border-t">
      <div className="container max-w-6xl py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="md:col-span-2">
          <Link href="/" className="text-lg font-semibold mb-4 block">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            Building digital experiences with clean aesthetics and thoughtful interactions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="text-muted-foreground hover:text-foreground transition">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/subscription-agreement" className="text-muted-foreground hover:text-foreground transition">
                Subscription Agreement
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container max-w-6xl py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            {Object.entries(siteConfig.socials).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <span className="sr-only">{platform}</span>
                {/* @ts-ignore */}
                <Icons.Discord/>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <p>© 2025 {siteConfig.name}</p>
            <span>•</span>
            <p>Made with ♥ by ayazhankad</p>
          </div>
        </div>
      </div>
    </footer>
  )
}