import { Hobby } from "@/types/data"

export const hobbies: Hobby[] = [
  {
    id: 'outdoor',
    title: 'Outdoor Adventures',
    content:
      'I find my greatest joy in outdoor activities. From early morning runs to volleyball matches that remind me of my university days, staying active is my way of maintaining balance. But nothing beats the thrill of skiing in Oskemen, Kazakhstan – trust me, its the best resort you will find!',
    images: [
      {
        src: 'https://picsum.photos/id/229/200',
        alt: 'Skiing in Oskemen',
        className: 'rounded-lg',
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
      content: 'Latest Vlog: My European Adventure →',
      className: 'bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8',
    },
  },
  {
    id: 'learning',
    title: 'Learning & Growth',
    content:
      'Im always diving into books and podcasts about public policy and social issues. Invisible Women by Caroline Criado Perez particularly opened my eyes to how design and data can overlook half our population.',
    images: [
      {
        src: 'https://picsum.photos/id/235/200',
        alt: 'Reading corner',
        className: 'rounded-lg',
      },
      {
        src: 'https://picsum.photos/id/234/200',
        alt: 'Podcast setup',
        className: 'rounded-lg',
      },
    ],
    additionalContent: {
      type: 'grid',
      className: 'grid grid-cols-2 gap-4 my-8',
    },
  },
  {
    id: 'hackathons',
    title: 'Building Together',
    content:
      'This year, I threw myself into the hackathon scene, participating in six different events. From JP Morgans Code for Good to AUHack at Aarhus University, each experience taught me something new about collaboration and rapid innovation.',
    images: [
      {
        src: 'https://picsum.photos/id/232/200',
        alt: 'Hackathon team',
        className: 'w-full rounded-lg',
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