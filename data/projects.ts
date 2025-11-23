import { Project } from "@/types/data"

export const projects: Project[] = [
  {
    title: 'Runville',
    description: 'Lifestyle running app UX redesign',
    image: '/projects/runville/runville.png',
    tech: ['UI/UX', 'Figma', 'Mobile App Design'],
    link: '/projects/runville',
    points: [
      'Led UX refresh for lifestyle running app serving 1,000+ runners with 3x lower cost-per-download than competitors',
      'Replaced weekly planning with adaptive daily sessions offering three quick actions (accept, shuffle, customize) to keep casual runners moving.',
      'Designed six-step onboarding flow reducing navigation questions from first-time users',
      'Created AI-powered image generator encouraging social sharing and organic reach',
    ],
    demo: [
      {
        text: 'View in App Store',
        url: 'https://apps.apple.com/kz/app/runville/id6748053090',
      },
    ],
  },
  {
    title: 'Interactive Python Learning Platform',
    description:
      'Web App for Real-Time Code Collaboration Design + Development',
    image: '/projects/project-1.png',
    tech: ['Next.js 14', 'TypeScript', 'Firebase', 'Socket.IO'],
    link: 'https://www.pythonbit.io',
    points: [
      'Built real-time learning platform with live code collaboration between teachers and students',
      'Integrated AI assistant, progress tracking, and curriculum management',
      'Revamped UI using shadcn/ui design system',
    ],
    github: 'https://github.com/ayazhankadessova/python-bit',
    demo: [
      {
        text: 'View Website',
        url: 'https://www.pythonbit.io',
      },
    ],
  },
  {
    title: 'GitRoll',
    description: 'AI-powered recruitment platform Landing Page Design',
    image: '/projects/gitroll/gitroll.png',
    tech: ['UI/UX', 'Figma', 'Web Design'],
    link: '/projects/gitroll',
    points: [
      'Designed landing page for AI-powered platform analyzing developer portfolios to help recruiters find talent',
      'Created complete design system from wireframes to high-fidelity prototypes',
      'Emphasized data-driven vetting and transparent pricing to differentiate from competitors',
    ],
    demo: [
      {
        text: 'View Figma Design',
        url: 'https://www.figma.com/community/file/1480766524669063935/gitroll-landing-page',
      },
    ],
  },
  {
    title: 'HKBU Iftar 2025',
    description: 'Event Landing Page Design + Development',
    image: '/projects/iftar/iftar.png',
    tech: ['Next.js', 'UI/UX', 'Figma', 'Web Design'],
    link: '/projects/iftar',
    points: [
      'Designed and developed landing page for community Ramadan event with 100+ participants, which I led',
      'Reduced logistics inquiries with centralized event information',
      'Applied Gestalt principles, typography hierarchy, and responsive design',
    ],
    github: 'https://github.com/ayazhankadessova/hkbu-iftar/tree/master',
    demo: [
      {
        text: 'View Website',
        url: 'https://hkbu-iftar.vercel.app',
      },
      {
        text: 'View Figma Design',
        url: 'https://www.figma.com/community/file/1484061008344317786/iftar-event-landing-page',
      },
      {
        text: 'Watch Event Video',
        url: 'https://youtu.be/OeH5yYcmQU4?si=K8V9C3606HOu_3ct',
      },
    ],
  },
  {
    title: 'Senior Connect',
    description: 'IOS Mobile App',
    image: '/projects/project-2.png',
    tech: ['Swift', 'Express.js', 'MongoDB'],
    link: 'https://drive.google.com/file/d/18Rs692UOiqzLUJ_RCJdW9u_An0FQn8lA/view?usp=sharing',
    points: [
      'Built iOS app helping seniors master technology through interactive tutorials, quizzes, and mentorship',
      'Implemented RESTful API with MongoDB for progress tracking and event management',
    ],
    github: 'https://github.com/ayazhankadessova/IOS_Senior_Connect',
    demo: [
      {
        text: 'Watch Demo',
        url: 'https://drive.google.com/file/d/18Rs692UOiqzLUJ_RCJdW9u_An0FQn8lA/view?usp=sharing',
      },
    ],
  },
  {
    title: 'IoT Device Monitor',
    description: 'MacOS App + M5 Stick',
    image: '/projects/project-3.png',
    tech: ['Swift', 'Express.js', 'MongoDB'],
    link: 'https://www.youtube.com/watch?v=uHNZBZxneeY',
    points: [
      'Built multi-tab IoT app integrating BLE counter, soil moisture monitoring, and Azure IoT Hub',
      'Implemented real-time Bluetooth data collection with SwiftChart visualization',
      'Integrated Azure services for real-time sensor data visualization',
    ],
    github: 'https://github.com/ayazhankadessova/m5stick-iot-mobile',
    demo: [
      {
        text: 'Watch on YouTube',
        url: 'https://www.youtube.com/watch?v=uHNZBZxneeY',
      },
    ],
  },
  {
    title: 'FAFA, cargo transportation business model',
    description: 'Open Source Data Analysis Project',
    image: '/projects/project-4.png',
    tech: ['Python', 'Beautiful Soup', 'Web Scraping', 'Data Science'],
    link: 'https://ayazhankad-coding.blogspot.com/2021/09/scraping-fafakz-for-almaty-delivery.html',
    points: [
      'Scraped cargo transportation data from Kazakhstan and CIS websites',
      'Analyzed data to identify three profitable business models by route, truck type, and products',
    ],
    github:
      'https://github.com/ayazhankadessova/Portfolio-Projects/tree/main/FAFA',
    demo: [
      {
        text: 'Read Article',
        url: 'https://ayazhankad-coding.blogspot.com/2021/09/scraping-fafakz-for-almaty-delivery.html',
      },
    ],
  },
]
