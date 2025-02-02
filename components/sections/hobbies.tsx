import React from 'react'
import { hobbies } from '@/data/hobbies'
import Image from 'next/image'
import { Highlight } from '@/components/ui/highlight'
import Link from 'next/link'

interface HobbiesPageProps {
  variant?: 'short' | 'default'
}

export default function HobbiesPage({ variant = 'default' }: HobbiesPageProps) {
  const displayedHobbies = variant === 'default' ? hobbies : hobbies.slice(0, 3)
  return (
    <section className='mb-16' id='hobbies'>
      <h1 className='text-xl font-semibold mb-8'>H O B B I E S</h1>
      <div className='space-y-12'>
        {displayedHobbies.map((hobby) => (
          <div key={hobby.id} className='gap-4 sm:gap-6 md:gap-8'>
            <h2 className='text-lg font-medium mb-5'>⋅ {hobby.title}</h2>
            <div>
              {variant === 'default' && <p className='mb-6'>{hobby.content}</p>}

              {hobby.images && (
                <div
                  className={
                    hobby.additionalContent?.type === 'grid'
                      ? hobby.additionalContent.className
                      : ''
                  }
                >
                  {hobby.images.map((image, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center w-1/4'
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width || 400}
                        height={image.height || 300}
                        className={image.className}
                        priority={image.priority}
                      />
                      {image.title && (
                        <p className='mt-2 text-sm italic text-muted-foreground'>
                          {image.title}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {hobby.additionalContent?.type === 'highlight' && (
                <Highlight
                  variant={hobby.additionalContent.variant}
                  href={hobby.additionalContent.href}
                >
                  {hobby.additionalContent.content}
                </Highlight>
              )}
            </div>
          </div>
        ))}
      </div>

      {variant === 'short' && (
        <Link href={'/hobbies'} className='block group mt-8'>
          <h3 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
            <span className='relative transition-colors'>
              View All Hobbies
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
