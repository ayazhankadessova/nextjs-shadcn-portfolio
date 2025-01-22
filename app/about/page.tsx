import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function About() {
  const frontendTech = [
    'Python',
    'Java',
    'SQL & Oracle',
    'HTML & CSS & Javascript',
    'React.js',
    'Node.js, Typescript',
  ]
  const sreTech = [
    'Terraform',
    'AWS, Azure',
    'Dynatrace',
    'Jules, Jenkins, Groovy',
    'Grafana',
    'Gaia',
  ]

  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      {/* Hero Section */}
      <section className='mb-16'>
        <h1 className='text-4xl font-bold mb-6'>Hello! My name is Aya!</h1>
        <p className='text-lg text-gray-600 dark:text-gray-300'>
          A passionate developer focused on building impactful solutions and
          sharing knowledge.
        </p>
      </section>

      {/* Experience Cards */}
      <div className='grid gap-8 mb-16'>
        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <CardContent className='p-0'>
            <h3 className='text-xl font-semibold mb-4'>Hackathon Enthusiast</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Traveled to Denmark for a hackathon, earning 3rd place based on
              latency and data points!
            </p>
          </CardContent>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <CardContent className='p-0'>
            <h3 className='text-xl font-semibold mb-4'>Project Builder</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Created TripGenie, a personalized itinerary generator using OpenAI
              API while learning React.js.
            </p>
          </CardContent>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <CardContent className='p-0'>
            <h3 className='text-xl font-semibold mb-4'>
              Cloud Infrastructure Enthusiast
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Exploring automation with Terraform across AWS and Azure. Built a
              deployable development environment using Docker.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Community Impact */}
      <section className='mb-16'>
        <h2 className='text-2xl font-bold mb-6'>Community Impact</h2>
        <div className='space-y-4 text-gray-600 dark:text-gray-300'>
          <p>
            • Women Techmakers Ambassador at Google - Organized Web Scraping
            Workshop with 100 participants
          </p>
          <p>
            • Mentored 36 students (6 in CS at HKBU, 30 in Data Science at
            Qwasar Silicon Valley)
          </p>
          <p>
            • Google Student Developer Club Lead at HKBU - Led a team of eight
            students, as a part of first ever GDSC community at HKBU to organize
            workshops (Python & Leetcode), speaker sessions, and teambuilding
            activities, creating a welcoming environment to let students of all
            tech backgrounds enhance technical skills and make valuable
            connections.
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section>
        <h2 className='text-2xl font-bold mb-6'>Technologies</h2>

        <div className='space-y-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>
              Frontend/Backend Development
            </h3>
            <div className='flex flex-wrap gap-2'>
              {frontendTech.map((tech) => (
                <Badge key={tech} variant='secondary' className='text-sm'>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className='my-8' />

          <div>
            <h3 className='text-xl font-semibold mb-4'>SRE/Cloud/Others</h3>
            <div className='flex flex-wrap gap-2'>
              {sreTech.map((tech) => (
                <Badge key={tech} variant='secondary' className='text-sm'>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
