import React from 'react'
import { Badge } from '@/components/ui/badge'
import { skillGroups, socialImpact } from '@/data/skills'
import Link from 'next/link'

interface OtherSectionProps {
  variant?: 'short' | 'default'
  section?: 'activities' | 'technologies' | 'both'
}

export default function OtherSection({
  variant = 'default',
  section = 'both',
}: OtherSectionProps) {
  const displayedActivities =
    variant === 'default' ? socialImpact : socialImpact.slice(0, 2)

  const showActivities = section === 'activities' || section === 'both'
  const showTechnologies = section === 'technologies' || section === 'both'

  return (
    <>
      {showActivities && (
        <section className='mb-16' id='activities'>
          <h2 className='text-xl font-semibold mb-8'>A C T I V I T I E S</h2>
          <div className='space-y-6'>
            {displayedActivities.map((item, index) => (
              <div key={index} className='space-y-2'>
                <h3 className='text-lg font-medium tracking-tight'>
                  ⋅ {item.title} • {item.organization}
                </h3>
                <ul className='space-y-2'>
                  {item.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className='text-sm text-muted-foreground'>
                      - {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {variant === 'short' && (
            <Link href={'/other'} className='block group mt-8'>
              <h3 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
                <span className='relative transition-colors'>
                  View All Activities
                  <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
                </span>
                <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:translate-x-1'>
                  →
                </span>
              </h3>
            </Link>
          )}
        </section>
      )}

      {showTechnologies && (
        <section className='mb-16' id='technologies'>
          <h2 className='text-xl font-semibold mb-8'>T E C H N O L O G I E S</h2>
          <div className='space-y-6'>
            {skillGroups.map((group, index) => (
              <div key={group.id}>
                <h3 className='text-lg font-medium mb-4'>⋅ {group.title}</h3>
                <div className='flex flex-wrap gap-2'>
                  {group.skills.map((tech) => (
                    <Badge key={tech} className='text-xs font-normal'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
