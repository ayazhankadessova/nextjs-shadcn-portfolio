// Store links that can be referenced everywhere
// discord , linkedin, twitter, youtube, medium
// export type of siteConfig

export const siteConfig = {
  name: 'AyazhanKad',
  url: 'https://AyazhanKad.io',
  description:
    'Hey, I am Aya :) I like building apps!',
  socials: {
    discord: 'https://discord.com/invite/EEw3u9PVqA',
    linkedin: 'https://www.linkedin.com/in/ayazhankad',
    twitter: 'https://x.com/AyazhanKad_io',
    youtube: 'https://www.youtube.com/@ayazhankadessova330',
    medium: 'https://AyazhanKad.medium.com',
    github: 'https://github.com/ayazhankadessova',
    email: 'kadessovaayazhan@gmail.com'
  },
  stickyNav: true,
  author: 'AyazhanKad',
}

export type SiteConfig = typeof siteConfig
