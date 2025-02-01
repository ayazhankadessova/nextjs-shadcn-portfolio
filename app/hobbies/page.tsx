import React from 'react'
import { hobbies } from '@/data/hobbies'
import Image from 'next/image'
import { Highlight } from '@/components/ui/highlight'

export default function HobbiesPage() {
  return (
    <div className='container max-w-4xl mx-auto px-2 md:px-4 py-16'>
      <h1 className='text-xl font-semibold mb-8'>H O B B I E S</h1>
      {hobbies.map((hobby) => (
        <section key={hobby.id} className='mb-14'>
          <h2 className='text-2xl font-medium mb-5'>{hobby.title}</h2>
          <div>
            <p className='mb-6'>{hobby.content}</p>

            {hobby.images && (
              <div
                className={
                  hobby.additionalContent?.type === 'grid'
                    ? hobby.additionalContent.className
                    : ''
                }
              >
                {hobby.images.map((image, index) => (
                  <div key={index} className='flex flex-col items-center'>
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
        </section>
      ))}
    </div>
  )
}
