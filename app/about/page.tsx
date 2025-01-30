import React from 'react'
import { Badge } from '@/components/ui/badge'
import { skillGroups, socialImpact } from '@/data/skills'

export default function AboutPage() {
  return (
    <div className='container max-w-4xl mx-auto px-2 md:px-4 py-16'>
      {/* Introduction */}
      <section className='mb-16'>
        <h1 className='text-2xl font-semibold mb-8'>A B O U T</h1>
        <div className='space-y-6 text-muted-foreground'>
          <p className='space-y-4 leading-relaxed'>
            I am a developer with a passion for creating intuitive and engaging
            web experiences. Currently, I am building{' '}
            <a
              href='https://python-bit.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors'
            >
              PythonBit
            </a>
            , web platform to help students gain confidence in Python via
            real-time classrooms, tutorials, and fun projects.
          </p>
          <p>
            As a senior pursuing a{' '}
            <span className='text-foreground font-medium'>
              BSc in Computer Science
            </span>{' '}
            at{' '}
            <a
              href='https://www.hkbu.edu.hk/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors'
            >
              Hong Kong Baptist University
            </a>
            , I specialize in Computing and Software Technologies, focusing on
            building accessible and performant web applications.
          </p>{' '}
          <p>
            {' '}
            My journey in tech has led me to work on various projects, from{' '}
            <span className='text-foreground font-medium'>
              full-stack web applications
            </span>{' '}
            to{' '}
            <span className='text-foreground font-medium'>
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

      {/* Social Impact Section */}
      <section>
        <h2 className='text-lg font-bold mb-6'>A C T I V I T I E S</h2>
        <div className='space-y-6'>
          {socialImpact.map((item, index) => (
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
      </section>
    </div>
  )
}