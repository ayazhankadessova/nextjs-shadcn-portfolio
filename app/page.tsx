// app/page.tsx

import React from 'react'
import AboutPage from "@/components/sections/about"
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import ProjectsPage from '@/components/sections/projects'

export default function MainPage() {
  return (
    <>
      <Hero/>
      <AboutPage />
      <Experience/>
      <ProjectsPage />
    </>
  )
}
