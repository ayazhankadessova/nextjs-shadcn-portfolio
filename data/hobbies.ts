import { Hobby } from "@/types/data"

// More gap
// className: 'flex flex-row justify-center gap-6 my-8'

// // Less gap
// className: 'flex flex-row justify-center gap-2 my-8'

// // With wrapping for responsiveness
// className: 'flex flex-row flex-wrap justify-center gap-4 my-8'

// // Using space-between if you want equal spacing
// className: 'flex flex-row justify-between my-8'

// // Using space-around for equal spacing with margins
// className: 'flex flex-row justify-around my-8'

// Different Grid Patterns:

// Basic 2-column grid: grid grid-cols-1 sm:grid-cols-2 gap-4
// Gallery style: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
// Masonry layout: grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-min

export const hobbies: Hobby[] = [
  {
    id: 'outdoor',
    title: 'Outdoor Adventures',
    content:
      'I find my greatest joy in outdoor activities. From early morning runs to volleyball matches that remind me of my university days, staying active is my way of maintaining balance. But nothing beats the thrill of skiing in Oskemen, Kazakhstan – trust me, its the best resort you will find!',
    images: [
      {
        src: '/projects/project-1.png',
        alt: 'Skiing in Oskemen',
        className: 'rounded-lg',
        width: 200,
        height: 200,
      },
    ],
  },
  {
    id: 'youtube',
    title: 'Sharing Stories',
    content:
      "When I'm not coding or skiing, you might find me documenting life's special moments on my YouTube channel. From my first day at university to solo adventures across Europe, I love sharing these experiences.",
    additionalContent: {
      type: 'highlight',
      variant: 'link',
      content: 'Latest Vlog: A Day in My Life at Home',
      href: 'https://youtu.be/VCKF4Lzx5nY?si=j7UEbAwZswjh69NQ',
    },
  },
  {
    id: 'learning',
    title: 'Learning & Growth',
    content:
      'Im always diving into books and podcasts about public policy and social issues. Invisible Women by Caroline Criado Perez particularly opened my eyes to how design and data can overlook half our population.',
    images: [
      {
        src: '/projects/project-2.png',
        alt: 'Reading corner',
        className: 'rounded-lg',
        width: 200,
        height: 200,
      },
      {
        src: '/projects/project-3.png',
        alt: 'Podcast setup',
        className: 'rounded-lg',
        width: 200,
        height: 200,
      },
    ],
    additionalContent: {
      type: 'grid',
      className: 'flex flex-row justify-center gap-2 my-8',
    },
  },
  {
    id: 'hackathons',
    title: 'Building Together',
    content:
      'This year, I threw myself into the hackathon scene, participating in six different events. From JP Morgans Code for Good to AUHack at Aarhus University, each experience taught me something new about collaboration and rapid innovation.',
    images: [
      {
        src: '/projects/project-4.png',
        alt: 'Hackathon team',
        className: 'rounded-lg',
      },
    ],
  },
  {
    id: 'quiet',
    title: 'Quiet Moments',
    content:
      'Some of my most cherished times are spent journalling, finding new coffee spots where I can sit, reflect, and just be.',
  },
]