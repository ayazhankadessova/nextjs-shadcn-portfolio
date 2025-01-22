import React from 'react'

export default function HobbiesPage() {
  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <h1 className='text-4xl font-bold mb-12'>Life Beyond Code</h1>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Outdoor Adventures</h2>
        <div>
          <p className='mb-6'>
            I find my greatest joy in outdoor activities. From early morning
            runs to volleyball matches that remind me of my university days,
            staying active is my way of maintaining balance. But nothing beats
            the thrill of skiing in Oskemen, Kazakhstan – trust me, it's the
            best resort you'll find!
          </p>
          <div className='my-8'>
            <img
              src='/api/placeholder/800/400'
              alt='Skiing in Oskemen'
              className='w-full rounded-lg'
            />
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Sharing Stories</h2>
        <div>
          <p className='mb-6'>
            When I'm not coding or skiing, you might find me documenting life's
            special moments on my YouTube channel. From my first day at
            university to solo adventures across Europe, I love sharing these
            experiences.
          </p>
          <div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8'>
            <p className='font-medium'>Latest Vlog: My European Adventure →</p>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Learning & Growth</h2>
        <div>
          <p>
            I'm always diving into books and podcasts about public policy and
            social issues. "Invisible Women" by Caroline Criado Perez
            particularly opened my eyes to how design and data can overlook half
            our population.
          </p>
          <div className='grid grid-cols-2 gap-4 my-8'>
            <img
              src='/api/placeholder/400/300'
              alt='Reading corner'
              className='rounded-lg'
            />
            <img
              src='/api/placeholder/400/300'
              alt='Podcast setup'
              className='rounded-lg'
            />
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Building Together</h2>
        <div>
          <p>
            This year, I threw myself into the hackathon scene, participating in
            six different events. From JP Morgan's Code for Good to AUHack at
            Aarhus University, each experience taught me something new about
            collaboration and rapid innovation.
          </p>
          <div className='my-8'>
            <img
              src='/api/placeholder/800/400'
              alt='Hackathon team'
              className='w-full rounded-lg'
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-6'>Quiet Moments</h2>
        <div>
          <p>
            Some of my most cherished times are spent journalling, finding new
            coffee spots where I can sit, reflect, and just be.
          </p>
        </div>
      </section>
    </div>
  )
}
