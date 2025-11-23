// app/page.tsx

import React from 'react'
import AboutPage from "@/components/sections/about"
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import ProjectsPage from '@/components/sections/projects'
import BlogPage from '@/components/sections/blog'
import HobbiesPage from '@/components/sections/hobbies'
import ContactPage from '@/components/sections/contact'
import {SiteHeader} from '@/components/layout/site-header'

export default function MainPage() {
  return (
    <>
      <SiteHeader />
      <div className='container max-w-5xl mx-auto px-6 md:px-8 py-16'>
        <Hero />
        <AboutPage variant='short' />
        <Experience variant='short' />
        <ProjectsPage variant='short' />
        {/* <BlogPage /> */}
        <HobbiesPage variant='short' />
        <ContactPage />
      </div>
    </>
  )
}
