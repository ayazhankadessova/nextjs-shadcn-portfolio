import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { skillGroups, socialImpact } from '@/data/skills'

// export default function About() {

//   return (
//     <div className='container max-w-4xl mx-auto px-8 py-16'>
//       {/* Hero Section */}
//       <section className='mb-16'>
//         <h1 className='text-4xl font-bold mb-6'>Hello! My name is Aya!</h1>
//         <p className='text-lg text-gray-600 dark:text-gray-300'>
//           A passionate developer focused on building impactful solutions and
//           sharing knowledge.
//         </p>
//       </section>

//       {/* Experience Cards */}
//       <div className='grid gap-8 mb-16'>
//         <Card className='p-6 hover:shadow-lg transition-shadow'>
//           <CardContent className='p-0'>
//             <h3 className='text-xl font-semibold mb-4'>Hackathon Enthusiast</h3>
//             <p className='text-gray-600 dark:text-gray-300'>
//               Traveled to Denmark for a hackathon, earning 3rd place based on
//               latency and data points!
//             </p>
//           </CardContent>
//         </Card>

//         <Card className='p-6 hover:shadow-lg transition-shadow'>
//           <CardContent className='p-0'>
//             <h3 className='text-xl font-semibold mb-4'>Project Builder</h3>
//             <p className='text-gray-600 dark:text-gray-300'>
//               Created TripGenie, a personalized itinerary generator using OpenAI
//               API while learning React.js.
//             </p>
//           </CardContent>
//         </Card>

//         <Card className='p-6 hover:shadow-lg transition-shadow'>
//           <CardContent className='p-0'>
//             <h3 className='text-xl font-semibold mb-4'>
//               Cloud Infrastructure Enthusiast
//             </h3>
//             <p className='text-gray-600 dark:text-gray-300'>
//               Exploring automation with Terraform across AWS and Azure. Built a
//               deployable development environment using Docker.
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Community Impact */}
//       <section className='mb-16'>
//         <h2 className='text-2xl font-bold mb-6'>Community Impact</h2>
//         <div className='space-y-4 text-gray-600 dark:text-gray-300'>
//           <p>
//             • Women Techmakers Ambassador at Google - Organized Web Scraping
//             Workshop with 100 participants
//           </p>
//           <p>
//             • Mentored 36 students (6 in CS at HKBU, 30 in Data Science at
//             Qwasar Silicon Valley)
//           </p>
//           <p>
//             • Google Student Developer Club Lead at HKBU - Led a team of eight
//             students, as a part of first ever GDSC community at HKBU to organize
//             workshops (Python & Leetcode), speaker sessions, and teambuilding
//             activities, creating a welcoming environment to let students of all
//             tech backgrounds enhance technical skills and make valuable
//             connections.
//           </p>
//         </div>
//       </section>

//       {/* Technologies */}
      // <section>
      //   <h2 className='text-2xl font-bold mb-6'>Technologies</h2>

      //   <div className='space-y-8'>
      //     {skillGroups.map((group, index) => (
      //       <div key={group.id}>
      //         {index > 0 && <Separator className='my-8' />}
      //         <h3 className='text-xl font-semibold mb-4'>{group.title}</h3>
      //         <div className='flex flex-wrap gap-2'>
      //           {group.skills.map((tech) => (
      //             <Badge key={tech} variant='secondary' className='text-sm'>
      //               {tech}
      //             </Badge>
      //           ))}
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </section>
//     </div>
//   )
// }
// pages/about.tsx
// This should be moved to /data/skills.ts
const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Django'],
  tools: ['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB'],
};

export default function AboutPage() {
  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      {/* Introduction */}
      <section className='mb-16'>
        <h1 className='text-4xl font-bold mb-4'>About Me</h1>
        <div className='space-y-6 text-muted-foreground'>
          <p className='space-y-4 leading-relaxed'>
            I'm a developer with a passion for creating intuitive and engaging
            web experiences. Currently, I am a 2x{' '}
            <span className='text-foreground font-medium'>
              Software Engineering Intern
            </span>{' '}
            at{' '}
            <a
              href='https://careers.jpmorgan.com/global/en/students/programs/software-engineer-summer'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors'
            >
              J.P. Morgan
            </a>
            , where I've had the opportunity to work on large-scale financial
            applications and develop robust solutions.
          </p>
          <p>
            As a senior pursuing a{' '}
            <span className='text-foreground font-medium'>
              BSc in Computer Science
            </span>{' '}
            at{' '}
            <a
              href='https://www.hkbu.edu.hk/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors'
            >
              Hong Kong Baptist University
            </a>
            , I specialize in Computing and Software Technologies, focusing on
            building accessible and performant web applications.
          </p>{' '}
          <p>
            {' '}
            My journey in tech has led me to work on various projects, from{' '}
            <span className='text-foreground font-medium'>
              full-stack web applications
            </span>{' '}
            to{' '}
            <span className='text-foreground font-medium'>
              data visualization tools
            </span>
            . Beyond coding, I'm deeply interested in user experience design and
            believe in creating solutions that are not just technically sound
            but also delightful to use. When I'm not coding, you'll find me
            exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through technical writing and mentoring
            aspiring developers.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className='mb-16'>
        <h2 className='text-2xl font-bold mb-6'>Skills</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-medium mb-3'>Languages</h3>
            <div className='flex flex-wrap gap-2'>
              {skills.languages.map((skill) => (
                <Badge key={skill} variant='secondary'>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-3'>Frameworks</h3>
            <div className='flex flex-wrap gap-2'>
              {skills.frameworks.map((skill) => (
                <Badge key={skill} variant='secondary'>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-3'>Tools</h3>
            <div className='flex flex-wrap gap-2'>
              {skills.tools.map((skill) => (
                <Badge key={skill} variant='secondary'>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className='mb-16'>
        <h2 className='text-2xl font-bold mb-6'>Technologies</h2>

        <div className='space-y-8'>
          {skillGroups.map((group, index) => (
            <div key={group.id}>
              {index > 0 && <Separator className='my-8' />}
              <h3 className='text-xl font-semibold mb-4'>{group.title}</h3>
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((tech) => (
                  <Badge key={tech} variant='secondary' className='text-sm'>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Impact Section */}
      <section>
        <h2 className='text-2xl font-bold mb-6'>Social Impact</h2>
        <div className='space-y-6'>
          {socialImpact.map((item, index) => (
            <div key={index} className='space-y-2'>
              <h3 className='text-lg font-medium'>{item.title}</h3>
              <p className='text-primary'>{item.organization}</p>
              <p className='text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}