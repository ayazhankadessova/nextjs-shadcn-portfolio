import React from 'react'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'
import Link from 'next/link'

export default function Experience() {
  return (
    <section className='mb-16' id='experience'>
      <h1 className='text-xl font-semibold mb-8'>E X P E R I E N C E</h1>

      <div className='space-y-12'>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-6 md:gap-8'
          >
            {/* Date Section */}
            <div className='text-sm text-muted-foreground font-medium'>
              {exp.period}
            </div>

            {/* Content Section */}
            <div>
              {exp.link ? (
                <Link href={exp.link} className='block group'>
                  <h3 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
                    {exp.position} • {exp.company}
                    <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5'>
                      ↗
                    </span>
                  </h3>
                </Link>
              ) : (
                <h3 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
                  {exp.position} • {exp.company}
                </h3>
              )}

              {/* Projects */}
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex} className={pIndex === 0 ? 'mt-4' : 'mt-5'}>
                  <div className='mb-2'>
                    {project.name && (
                      <h4 className='text-sm font-normal mb-1'>
                        ‣ {project.name}
                      </h4>
                    )}
                    <ul className='space-y-2'>
                      {project.achievements.map((achievement, aIndex) => (
                        <li
                          key={aIndex}
                          className='text-sm text-muted-foreground'
                        >
                          - {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, tIndex) => (
                      <Badge key={tIndex} className='text-xs font-normal'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
