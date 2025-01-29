import React from 'react'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <div className='container max-w-4xl mx-auto sm:px-2 md:px-8 py-16'>
      <h1 className='text-3xl font-bold mb-8'>Experience</h1>

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
              <h3 className='text-lg font-medium tracking-tight'>
                {exp.position} • {exp.company}
              </h3>
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
                      <Badge
                        key={tIndex}
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
          </div>
        ))}
      </div>
    </div>
  )
}
