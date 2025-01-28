import React from 'react'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <h1 className='text-4xl font-bold mb-12'>Experience</h1>

      <div className='space-y-16'>
        {experiences.map((exp, index) => (
          <div key={index} className='grid grid-cols-[180px_1fr] gap-8'>
            {/* Date Section */}
            <div className='text-base text-muted-foreground'>{exp.period}</div>

            {/* Content Section */}
            <div>
              <div className='mb-3'>
                <h3 className='text-2xl font-semibold mb-1'>{exp.company}</h3>
                <p className='text-lg text-muted-foreground'>{exp.position}</p>
              </div>

              {/* Projects */}
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex} className='mt-4'>
                  <div className='mb-4'>
                    {project.name && (
                      <h4 className='text-lg font-medium mb-2'>
                        {project.name}
                      </h4>
                    )}
                    <ul className='space-y-2'>
                      {project.achievements.map((achievement, aIndex) => (
                        <li
                          key={aIndex}
                          className='text-base text-muted-foreground'
                        >
                          - {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {project.tech.map((tech, tIndex) => (
                      <Badge
                        key={tIndex}
                        variant='secondary'
                        className='text-sm px-3 py-1'
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
