// app/about/page.tsx
import React from 'react'

export default function AboutPage() {
  return (
    <section className='mb-16' id='about'>
      <h1 className='text-xl font-semibold mb-8'>A B O U T</h1>
      <div className='space-y-6 text-muted-foreground'>
        <p className='space-y-4 leading-relaxed'>
          I am a software engineer and MSc Computer Science student at{' '}
          <a
            href='https://kaust.edu.sa/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground hover:text-foreground/80 transition-colors'
          >
            King Abdullah University of Science and Technology (KAUST)
          </a>
          , following my BSc in Computer Science from{' '}
          <a
            href='https://www.hkbu.edu.hk/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground hover:text-foreground/80 transition-colors'
          >
            Hong Kong Baptist University
          </a>
          .
        </p>
        <p>
          Most recently, I worked as a Software Engineering Intern at Lean
          Technologies, where I built and automated payouts onboarding for
          fintech clients.
        </p>
        <p>
          I enjoy building practical products at the intersection of software,
          AI, and user experience - including{' '}
          <a
            href='https://python-bit-sigma.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground hover:text-foreground/80 transition-colors'
          >
            PythonBit
          </a>
          , a platform that helps students learn Python through real-time
          classrooms, tutorials, and projects.
        </p>
      </div>
    </section>
  )
}
