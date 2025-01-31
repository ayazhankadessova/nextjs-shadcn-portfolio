import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className='container max-w-4xl mx-auto px-2 md:px-4 py-16'>
      <h1 className='text-xl font-semibold mb-8'>P R O J E C T S</h1>
      <div className='space-y-16'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-6 md:gap-8'
          >
            {/* Content Section */}
            <div className='sm:order-2'>
              <h3 className='text-lg font-medium tracking-tight'>
                {project.title}
              </h3>
              <p className='text-sm text-muted-foreground mt-1 mb-4'>
                {project.description}
              </p>
              <ul className='space-y-2 mb-4'>
                {project.points.map((point, idx) => (
                  <li
                    key={idx}
                    className='text-sm text-muted-foreground flex gap-2'
                  >
                    <span>-</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    className='text-xs font-normal'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className='flex gap-4'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-sm gap-2 hover:bg-transparent hover:text-primary'
                >
                  <Github className='w-4 h-4' />
                  View Code
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-sm gap-2 hover:bg-transparent hover:text-primary'
                >
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className='w-1/2 mx-auto sm:w-full sm:order-1'>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className='rounded-lg hover:border hover:border-solid hover:border-primary'
                sizes='(max-width: 640px) 66vw, 25vw'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
