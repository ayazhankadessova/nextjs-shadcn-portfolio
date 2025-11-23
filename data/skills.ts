import { SkillGroup } from "@/types/app"

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      'NextJS',
      'React.js',
      'Typescript',
      'VueJS',
      'Flutter',
      'HTML & CSS & Javascript',
    ],
  },
  {
    id: 'mobile',
    title: 'UI/UX',
    skills: ['Figma', 'Agile Methodologies', 'Design Systems', 'User Research', 'A/B Testing'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      'Python',
      'Java',
      'SQL & Oracle',
      'Node.js',
      'MongoDB',
    ],
  },
  {
    id: 'sre',
    title: 'SRE/Cloud/Others',
    skills: [
      'Terraform',
      'AWS',
      'Azure',
      'Dynatrace',
      'Jenkins',
      'Grafana',
      'Hadoop',
    ],
  },
]

// data/socialImpact.ts
export const socialImpact = [
  {
    title: 'Participant',
    organization: '12th Annual NYUAD International Hackathon',
    achievements: [
      'Selected to participate in 12th Annual NYUAD International Hackathon for social good focusing on Quantum Computing, Artificial Intelligence and UN SDGs, hosted in Abu Dhabi, UAE among 1000+ applicants.', 'Developed Tareeq طريق, an end-to-end solution for distributed supply chains focused on enhancing food security and sustainability in the Arab World.', 'Our work included: 1) demand forecasting using machine learning, 2) optimal routing through QUBO, and 3) disruption management using quantum computing algorithms, especially Qoao.'],
  },
  {
    title: 'Lead',
    organization: 'Google Student Developers Club HKBU',
    achievements: [
      "Led HKBU's inaugural Google Developer Student Club (GDSC), fostering an inclusive tech community for students of all skill levels through mentorship and networking initiatives",
      'Managed a team of 8 to organize 5 technical workshops and speaker sessions focused on Python programming, algorithm optimization, and software development best practices',
    ],
  },
  {
    title: 'Ambassador',
    organization: 'Google Women Techmakers',
    achievements: [
      'Awarded Google Generation Scholarship for organizing initiatives to promote inclusion, focusing on empowering women in tech.',
      'Conducted hands-on web scraping using Python workshop for 100 participants with various tech and non-tech backgrounds.',
    ],
  },
  {
    title: 'Peer Mentor ',
    organization: 'HKBU Department of Computer Science',
    achievements: [
      'Provided one-on-one and group tutoring for introductory Computer Science concepts and debugging support to 6 first-year students through weekly office hours',
      'Served as a peer mentor to help new students transition to university life, offering guidance on academic resources and campus integration',
    ],
  },
]
