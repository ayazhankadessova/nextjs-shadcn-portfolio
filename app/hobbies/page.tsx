import React from 'react'
import { hobbies } from '@/data/hobbies'

export default function HobbiesPage() {
  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <h1 className='text-4xl font-bold mb-12'>Life Beyond Code</h1>

      {hobbies.map((hobby) => (
        <section key={hobby.id} className={'mb-16'}>
          <h2 className='text-2xl font-semibold mb-6'>{hobby.title}</h2>
          <div>
            <p className='mb-6'>{hobby.content}</p>

            {hobby.images && hobby.additionalContent?.type === 'grid' ? (
              <div className={hobby.additionalContent.className}>
                {hobby.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className}
                  />
                ))}
              </div>
            ) : hobby.images ? (
              <div className='my-8'>
                {hobby.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
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
