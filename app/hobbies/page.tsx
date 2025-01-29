import React from 'react'
import { hobbies } from '@/data/hobbies'
import Image from 'next/image'

export default function HobbiesPage() {
  return (
    <div className='container max-w-4xl mx-auto px-2 md:px-4 py-16'>
      <h1 className='text-xl font-semibold mb-8'>H O B B I E S</h1>
      {hobbies.map((hobby) => (
        <section key={hobby.id} className={'mb-16'}>
          <h2 className='text-2xl font-medium mb-6'>{hobby.title}</h2>
          <div>
            <p className='mb-6'>{hobby.content}</p>

            {hobby.images && hobby.additionalContent?.type === 'grid' ? (
              <div className={hobby.additionalContent.className}>
                {hobby.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className={image.className}
                  />
                ))}
              </div>
            ) : hobby.images ? (
              <div className='my-8'>
                {hobby.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className={image.className}
                  />
                ))}
              </div>
            ) : null}

            {hobby.additionalContent?.type === 'highlight' && (
              <div className={hobby.additionalContent.className}>
                <p className='font-medium'>{hobby.additionalContent.content}</p>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
