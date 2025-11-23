'use client'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'

import Link from 'next/link'

interface ProjectsPageProps {
  variant?: 'short' | 'default'
}

export default function ProjectsPage({
  variant = 'default',
}: ProjectsPageProps) {
  const displayedProjects =
    variant === 'default' ? projects : projects.slice(0, 5)

  return (
    <section className='mb-16' id='projects'>
      {/* <h1 className='text-xl font-semibold mb-8'>P R O J E C T S</h1> */}

      <h1 className='text-xl font-semibold mb-8'>P R O J E C T S</h1>

      {/* Sticky header - appears while scrolling */}
      {/* <div className='sticky top-16 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only'>
          Projects
        </h2>
      </div> */}
      <div className='space-y-12'>
        {displayedProjects.map((project, index) => {
          const CardWrapper = project.link
            ? ({ children }: { children: React.ReactNode }) => (
                <Link href={project.link!} className='block group'>
                  {children}
                </Link>
              )
            : ({ children }: { children: React.ReactNode }) => (
                <div className='block'>{children}</div>
              )

          return (
            <CardWrapper key={project.title}>
              <div
                className={`grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-6 md:gap-8 rounded-lg p-4 -m-4 transition-all ${
                  project.link
                    ? 'cursor-pointer hover:bg-accent/50 hover:shadow-lg'
                    : ''
                }`}
              >
                {/* Content Section */}
                <div className='sm:order-2'>
                  <h3
                    className={`text-lg font-medium tracking-tight inline-flex items-center gap-1 ${
                      project.link
                        ? 'group-hover:text-primary transition-colors'
                        : ''
                    }`}
                  >
                    <span>{project.title}</span>
                    {project.link && (
                      <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5'>
                        ↗
                      </span>
                    )}
                  </h3>
                  <p className='text-sm text-muted-foreground mt-1 mb-4'>
                    {project.description}
                  </p>
                  <ul className='space-y-2 mb-4'>
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className='text-sm text-muted-foreground flex gap-2'
                      >
                        <span>-</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech) => (
                      <Badge key={tech} className='text-xs font-normal'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex flex-wrap gap-4'>
                    {project.github && (
                      <Link
                        href={project.github}
                        passHref
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant='ghost'
                          size='sm'
                          className='text-sm gap-2 hover:bg-transparent hover:text-primary'
                        >
                          <Github className='w-4 h-4' />
                          View Code
                        </Button>
                      </Link>
                    )}
                    {project.demo?.map((demoItem) => (
                      <Link
                        key={demoItem.url}
                        href={demoItem.url}
                        passHref
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant='ghost'
                          size='sm'
                          className='text-sm gap-2 hover:bg-transparent hover:text-primary'
                        >
                          <ExternalLink className='w-4 h-4' />
                          {demoItem.text}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className='w-2/3 mx-auto sm:w-full sm:order-1'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className='rounded-lg w-full h-auto'
                    sizes='(max-width: 640px) 90vw, 33vw'
                  />
                </div>
              </div>
            </CardWrapper>
          )
        })}
      </div>

      {variant === 'short' && (
        <Link href={'/projects'} className='block group mt-8'>
          <h3 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
            <span className='relative transition-colors'>
              View All Projects
              <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
            </span>
            <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:translate-x-1'>
              →
            </span>
          </h3>
        </Link>
      )}
    </section>
  )
}
