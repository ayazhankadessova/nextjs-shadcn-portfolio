// app/about/page.tsx
import React from 'react'

export default function AboutPage() {
  return (
    <section className='mb-16' id='about'>
      <h1 className='text-xl font-semibold mb-8'>A B O U T</h1>
      <div className='space-y-6 text-muted-foreground'>
        <p className='space-y-4 leading-relaxed'>
          I am a UI/UX engineer who bridges the gap between design and
          development. Currently, I am building{' '}
          <a
            href='https://python-bit.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground hover:text-foreground/80 transition-colors'
          >
            PythonBit
          </a>
          , a platform to help students gain confidence in Python via real-time
          classrooms, tutorials, and fun projects.
        </p>
        <p>
          I recently graduated from{' '}
          <a
            href='https://www.hkbu.edu.hk/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground hover:text-foreground/80 transition-colors'
          >
            Hong Kong Baptist University
          </a>{' '}
          with a{' '}
          <span className='text-foreground font-medium'>
            BSc in Computer Science, First Class Honours
          </span>
          , specializing in Computing and Software Technologies.
        </p>
        <p>
          Throughout my journey in tech, I discovered my passion lies at the
          intersection of design and engineering. This realization led me to
          become a UI/UX engineer, eg someone who not only builds functional
          solutions but also crafts delightful user experiences. Feel free to
          explore my experiences and projects, and reach out whenever
          you&apos;re ready. I&apos;m always here to chat!
        </p>
      </div>
    </section>
  )
}
