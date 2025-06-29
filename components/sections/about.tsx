// app/about/page.tsx
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { skillGroups, socialImpact } from '@/data/skills'
import Link from 'next/link'
interface AboutPageProps {
  variant?: 'short' | 'default'
}

export default function AboutPage({ variant = 'default' }: AboutPageProps) {
  const displayedActivities =
    variant === 'default' ? socialImpact : socialImpact.slice(0, 2)
  return (
    <>
      <section className='mb-16' id='about'>
        <h1 className='text-2xl font-semibold mb-8'>A B O U T</h1>
        <div className='space-y-6 text-muted-foreground'>
          <p className='space-y-4 leading-relaxed'>
            Hiiii, I am Aya, a developer with a passion for creating intuitive &
            engaging web experiences. I currently work as a{' '}
            <span className='text-primary'>
              Software Engineer
            </span>{' '}
            at{' '}
            <a
              href='https://www.thetradedesk.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline hover:text-primary/80 hover:italic transition-colors'
            >
              The Trade Desk 💙
            </a>{' '}
            in Hong Kong. In my free time, I am building my passion project{' '}
            <a
              href='https://www.pythonbit.io'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline hover:text-primary/80 transition-colors hover:italic'
            >
              PythonBit{' '}
            </a>
            - it is a web platform to help young students learn
            Python via real-time classrooms, tutorials, and fun projects.
          </p>
          <p>
            As{' '}
            <span className='text-primary'>
              BSc in Computer Science
            </span>{' '}
            graduate from{' '}
            <a
              href='https://www.hkbu.edu.hk/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline hover:text-primary/80 hover:italic transition-colors'
            >
              Hong Kong Baptist University
            </a>
            , I specialize in Computing and Software Technologies, focusing on
            building accessible and performant web applications.
          </p>{' '}
          <p>
            {' '}
            My journey in tech has led me to work on various projects, from{' '}
            <span className='text-primary'>
              full-stack web applications
            </span>{' '}
            to{' '}
            <span className='text-primary'>
              data visualization tools
            </span>
            . Beyond coding, I am deeply interested in user experience design
            and believe in creating solutions that are not just technically
            sound but also delightful to use. When I am not coding, you will
            find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing and
            mentoring aspiring developers.
          </p>
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-lg font-bold mb-6'>T E C H N O L O G I E S</h2>
        <div className='space-y-6'>
          {skillGroups.map((group, index) => (
            <div key={group.id}>
              <h3 className='text-lg font-medium mb-4'>{group.title}</h3>
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((tech) => (
                  <Badge
                    key={tech}
                    // variant='outline'
                    className='text-xs font-normal'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-lg font-bold mb-6'>A C T I V I T I E S</h2>
        <div className='space-y-6'>
          {displayedActivities.map((item, index) => (
            <div key={index} className='space-y-2'>
              <h3 className='text-lg font-medium tracking-tight'>
                {item.title} • {item.organization}
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
          <Link href={'/about'} className='block group mt-8'>
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
    </>
  )
}
