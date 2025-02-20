'use client'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, X, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog'
import Link from 'next/link'

interface ProjectsPageProps {
  variant?: 'short' | 'default'
}

export default function ProjectsPage({
  variant = 'default',
}: ProjectsPageProps) {
  const displayedProjects =
    variant === 'default' ? projects : projects.slice(0, 3)

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
        {displayedProjects.map((project, index) => (
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
                  <Badge key={tech} className='text-xs font-normal'>
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className='flex gap-4'>
                <Link href={project.github} passHref>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-sm gap-2 hover:bg-transparent hover:text-primary'
                  >
                    <Github className='w-4 h-4' />
                    View Code
                  </Button>
                </Link>
                <Link href={project.demo} passHref>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-sm gap-2 hover:bg-transparent hover:text-primary'
                  >
                    <ExternalLink className='w-4 h-4' />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className='w-2/3 mx-auto sm:w-full sm:order-1'>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className='cursor-pointer transition-transform hover:scale-105 relative group'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className='rounded-lg hover:border hover:border-solid hover:border-primary w-full h-auto'
                      sizes='(max-width: 640px) 90vw, 33vw'
                    />
                    <div className='absolute bottom-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity'>
                      <div className='bg-primary/50 p-2 rounded-full'>
                        <Maximize2 className='w-4 h-4 text-primary-foreground' />
                      </div>
                    </div>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='sm:max-w-[6vw] md:max-w-[70vw] lg:max-w-[50vw]'>
                  <AlertDialogHeader className='p-0'>
                    <div className='relative'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className='w-full h-auto rounded-lg'
                      />
                      <AlertDialogCancel className='absolute top-4 right-4 rounded-full w-12 h-12 p-0 bg-secondary hover:bg-secondary/80 border-2 border-primary'>
                        <X className='h-6 w-6 text-primary' />
                      </AlertDialogCancel>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter className='sm:justify-center'>
                    <p className='text-sm text-muted-foreground'>
                      {project.title}
                    </p>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
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
