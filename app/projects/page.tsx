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
      <h1 className='text-3xl font-bold mb-8'>Projects</h1>

      <div className='space-y-16'>
        {projects.map((project, index) => (
          <div key={index} className='grid grid-cols-[240px_1fr] gap-8'>
            {/* Image Section */}
            <div className='relative h-40 group'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover rounded-lg shadow-md'
              />
              <div className='absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors rounded-lg' />
            </div>

            {/* Content Section */}
            <div>
              <div className='mb-2'>
                <h3 className='text-lg font-bold tracking-tight'>
                  {project.title}
                </h3>
                <p className='text-sm text-muted-foreground mt-1'>
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className='mt-4'>
                <ul className='space-y-2'>
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

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mt-4'>
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='text-xs font-normal'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-4 mt-4'>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}