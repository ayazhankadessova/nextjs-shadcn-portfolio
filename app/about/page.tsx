import React from 'react'
import { Badge } from '@/components/ui/badge'
import { skillGroups, socialImpact } from '@/data/skills'

export default function AboutPage() {
  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      {/* Introduction */}
      <section className='mb-16'>
        <h1 className='text-4xl font-bold mb-8'>About Me</h1>
        <div className='space-y-6 text-muted-foreground'>
          <p className='space-y-4 leading-relaxed'>
            I am a developer with a passion for creating intuitive and engaging
            web experiences. Currently, I am a 2x{' '}
            <span className='text-foreground font-medium'>
              Software Engineering Intern
            </span>{' '}
            at{' '}
            <a
              href='https://careers.jpmorgan.com/global/en/students/programs/software-engineer-summer'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors'
            >
              J.P. Morgan
            </a>
            , where I have had the opportunity to work on large-scale financial
            applications and develop robust solutions.
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
        <h2 className='text-2xl font-bold mb-6'>Technologies</h2>
        <div className='space-y-6'>
          {skillGroups.map((group, index) => (
            <div key={group.id}>
              <h3 className='text-lg font-medium mb-4'>{group.title}</h3>
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((tech) => (
                  <Badge
                    key={tech}
                    variant='secondary'
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
        <h2 className='text-2xl font-bold mb-6'>Activities</h2>
        <div className='space-y-6'>
          {socialImpact.map((item, index) => (
            <div key={index} className='space-y-2'>
              <h3 className='text-lg font-medium tracking-tight'>
                {item.title} • {item.organization}
              </h3>
              <p className='text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}