import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <h1 className='text-4xl font-bold mb-8'>Experience</h1>

      <div className='space-y-8'>
        {experiences.map((exp, index) => (
          <Card key={index} className='hover:shadow-lg transition-shadow'>
            <CardHeader>
              <div className='flex justify-between items-start'>
                <div>
                  <CardTitle className='text-2xl mb-2'>{exp.company}</CardTitle>
                  <p className='text-lg text-gray-600 dark:text-gray-300'>
                    {exp.position}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {exp.location}
                  </p>
                  <p className='text-gray-500 dark:text-gray-400'>
                    {exp.period}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex} className='mb-6 last:mb-0'>
                  <h3 className='text-lg font-semibold mb-3'>{project.name}</h3>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, tIndex) => (
                      <Badge key={tIndex} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className='space-y-3'>
                    {project.achievements.map((achievement, aIndex) => (
                      <li
                        key={aIndex}
                        className='text-gray-600 dark:text-gray-300'
                      >
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>

            {index < experiences.length - 1 && <Separator className='mt-6' />}
          </Card>
        ))}
      </div>
    </div>
  )
}
