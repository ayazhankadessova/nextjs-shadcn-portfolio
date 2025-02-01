// app/page.tsx

import React from 'react'
import AboutPage from "@/components/sections/about"
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import ProjectsPage from '@/components/sections/projects'
import BlogPage from '@/components/sections/blog'
import HobbiesPage from '@/components/sections/hobbies'
import ContactPage from '@/components/sections/contact'

export default function MainPage() {
  return (
    <>
      <Hero />
      <AboutPage variant='short' />
      <Experience variant='short' />
      <ProjectsPage variant='short' />
      <BlogPage />
      <HobbiesPage variant='short' />
      <ContactPage />
    </>
  )
}
