import { siteConfig } from '@/config/site'
import { Icons } from './icons'
import { capitalize } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface AllSocialsProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function AllSocials({
  orientation = 'horizontal',
  className,
}: AllSocialsProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4',
        orientation === 'vertical' && 'flex-col',
        className
      )}
    >
      {Object.entries(siteConfig.socials).map(([platform, url]) => {
        // Get the icon component dynamically
        const IconComponent = Icons[capitalize(platform) as keyof typeof Icons]

        return (
          <a
            key={platform}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='hover:text-foreground transition'
          >
            <span className='sr-only'>{platform}</span>
            {IconComponent && (
              <IconComponent
                className={cn(
                  'h-5 w-5',
                  orientation === 'vertical' && 'h-6 w-6'
                )}
              />
            )}
          </a>
        )
      })}
    </div>
  )
}

// Usage examples:
// <AllSocials /> -> Horizontal (default)
// <AllSocials orientation="vertical" /> -> Vertical
// <AllSocials className="mt-4" /> -> With additional classes
