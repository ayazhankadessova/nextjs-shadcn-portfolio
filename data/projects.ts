import { Project } from "@/types/data"

export const projects: Project[] = [
  {
    title: 'Runville',
    description: 'Lifestyle running app UX redesign',
    image: '/projects/project-1.png',
    tech: ['UI/UX', 'Figma'],
    link: '/projects/runville',
    points: [
      'Led UX refresh for a lifestyle running app serving 1,000+ runners while maintaining a cost-per-download three times lower than competitors.',
      'Produced a six-step onboarding story flow that dramatically reduced repeat navigation questions from first-time users.',
      'Replaced weekly planning with adaptive daily sessions offering three quick actions (accept, shuffle, customize) to keep casual runners moving.',
      'Designed an AI-powered image generator that encourages social sharing and boosts organic reach.',
    ],
    github: 'https://github.com/ayazhankadessova/python-bit',
    demo: 'https://python-bit.vercel.app',
  },
  {
    title: 'Interactive Python Learning Platform',
    description: 'Web App',
    image: '/projects/project-1.png',
    tech: ['Next.js 14', 'TypeScript', 'Firebase', 'Socket.IO'],
    link: null,
    points: [
      'Developed real-time interactive learning platform that enhanced student engagement via live code collaboration between teachers and students',
      'Integrated AI assistant, real-time progress tracking, and comprehensive curriculum management system',
      "Revamped platform's UI and visual design using shadcn/ui",
    ],
    github: 'https://github.com/ayazhankadessova/python-bit',
    demo: 'https://python-bit.vercel.app',
  },
  {
    title: 'Senior Connect',
    description: 'IOS Mobile App',
    image: '/projects/project-2.png',
    tech: ['Swift', 'Express.js', 'MongoDB'],
    link: null,
    points: [
      'Built a digital learning iOS app using SwiftUI, helping seniors master technology through interactive tutorials in 4 sections, quizzes, mentorship, and progress tracking.',
      'Implemented RESTful API with MongoDB to manage events and mentorship features, handling user progress tracking and event registrations.',
    ],
    github: 'https://github.com/ayazhankadessova/IOS_Senior_Connect',
    demo: 'https://drive.google.com/file/d/18Rs692UOiqzLUJ_RCJdW9u_An0FQn8lA/view?usp=sharing',
  },
  {
    title: 'IoT Device Monitor',
    description: 'MacOS App + M5 Stick',
    image: '/projects/project-3.png',
    tech: ['Swift', 'Express.js', 'MongoDB'],
    link: null,
    points: [
      'Built a multi-tab IOT app with YouTube Demo integrating BLE tally counter, soil moisture monitoring, and Azure IoT Hub data visualization.',
      'BLE Counter: Implemented real-time Bluetooth data collection from M5StickC with SwiftChart visualization.',
      'Soil Monitor: Created automated moisture tracking system with color-coded alerts and 60-second data refresh.',
      'IoT Hub: Integrated Azure services (WebSocket, PubSub) for real-time sensor data visualization.',
    ],
    github: 'https://github.com/ayazhankadessova/m5stick-iot-mobile',
    demo: 'https://www.youtube.com/watch?v=uHNZBZxneeY',
  },
  {
    title: 'FAFA, cargo transportation business model',
    description: 'Open Source Data Analysis Project',
    image: '/projects/project-4.png',
    tech: ['Python', 'Beautiful Soup', 'Web Scraping', 'Data Science'],
    link: null,
    points: [
      'Developed an open-source project involving web scraping of cargo transportation data from websites in Kazakhstan and the CIS.',
      'Conducted data analysis and authored a comprehensive post to suggest top three profitable business models, considering route, truck type, products.',
    ],
    github:
      'https://github.com/ayazhankadessova/Portfolio-Projects/tree/main/FAFA',
    demo: 'https://ayazhankad-coding.blogspot.com/2021/09/scraping-fafakz-for-almaty-delivery.html',
  },
]
