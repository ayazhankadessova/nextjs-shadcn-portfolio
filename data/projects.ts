import { Project } from "@/types/data"

export const projects: Project[] = [
  {
    title: 'Interactive Python Learning Platform',
    description:
      'Real-time interactive learning platform enabling live code collaboration between teachers and students',
    image: '/real-time.png',
    tech: ['Next.js 14', 'TypeScript', 'Firebase', 'Socket.IO'],
    points: [
      'Developed real-time interactive learning platform that enhanced student engagement via live code collaboration between teachers and students',
      'Integrated AI assistant, real-time progress tracking, and comprehensive curriculum management system',
      "Revamped platform's UI and visual design using shadcn/ui",
    ],
    github: 'https://github.com/yourusername/python-learning-platform',
    demo: 'https://python-platform.demo',
  },
  {
    title: 'HKBU Event Manager',
    description:
      'Android mobile app for HKBU volunteers to efficiently manage event registration',
    image: '/senior-connect.png',
    tech: ['Kotlin', 'Jetpack Compose', 'Android Studio'],
    points: [
      'Built a user-friendly Android mobile app connecting to backend API',
      'Implemented efficient event registration, search, and management system',
      'Created intuitive UI for volunteer event management',
    ],
    github: 'https://github.com/yourusername/hkbu-event-manager',
    demo: 'https://play.google.com/store/apps/details?id=com.hkbu.eventmanager',
  },
]
