import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function ProjectsPage() {

  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold mb-2'>Projects</h1>
        <p className='text-gray-600 dark:text-gray-300 mb-12'>
          Selected works showcasing my technical expertise and creativity
        </p>

        <div className='space-y-24'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className='lg:w-1/2 group perspective'>
                <div className='relative h-64 lg:h-80 transform transition-transform duration-500 group-hover:rotate-y-6'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover rounded-lg shadow-xl'
                  />
                  <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors rounded-lg' />
                </div>
              </div>

              <div className='lg:w-1/2'>
                <Card className='h-full border-none shadow-none bg-transparent'>
                  <CardHeader className='space-y-4 p-0'>
                    <div className='space-y-2'>
                      <CardTitle className='text-2xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>
                        {project.title}
                      </CardTitle>
                      <CardDescription className='text-base'>
                        {project.description}
                      </CardDescription>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className='p-0 mt-6'>
                    <ul className='space-y-3 text-gray-600 dark:text-gray-300'>
                      {project.points.map((point, idx) => (
                        <li key={idx} className='leading-relaxed flex gap-2'>
                          <span className='text-purple-500'>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className='flex gap-4 p-0 mt-6'>
                    <Button
                      variant='outline'
                      className='hover:bg-purple-50 dark:hover:bg-gray-800'
                    >
                      <Github className='w-4 h-4 mr-2' />
                      View Code
                    </Button>
                    <Button
                      variant='outline'
                      className='hover:bg-purple-50 dark:hover:bg-gray-800'
                    >
                      <ExternalLink className='w-4 h-4 mr-2' />
                      Live Demo
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
