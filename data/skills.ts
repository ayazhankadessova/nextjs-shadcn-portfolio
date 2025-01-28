import { SkillGroup } from "@/types/app"

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      'NextJS',
      'React.js',
      'Node.js',
      'Typescript',
      'VueJS',
      'HTML & CSS & Javascript',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: ['Python', 'Java', 'SQL & Oracle', 'Node.js, Typescript'],
  },
  {
    id: 'sre',
    title: 'SRE/Cloud/Others',
    skills: [
      'Terraform',
      'AWS',
      'Azure',
      'Dynatrace',
      'Jules',
      'Jenkins',
      'Groovy',
      'Grafana',
      'Gaia',
    ],
  },
]

// data/socialImpact.ts
export const socialImpact = [
  {
    title: 'Tech Workshop Leader',
    organization: 'Women Who Code',
    description: 'Led workshops teaching web development to aspiring female developers.',
  },
  {
    title: 'Mentor',
    organization: 'CS Student Association',
    description: 'Mentored junior students in programming and career development.',
  },
  // Add more items...
];
