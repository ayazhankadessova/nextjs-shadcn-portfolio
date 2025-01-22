// Store links that can be referenced everywhere
// discord , linkedin, twitter, youtube, medium
// export type of siteConfig

export const siteConfig = {
  name: 'AyazhanKad',
  url: 'https://AyazhanKad.io',
  description:
    'AyazhanKad shows the real coding skills of developers✨Talk is cheap. Show me the code.',
  socials: {
    discord: 'https://discord.com/invite/EEw3u9PVqA',
    linkedin: 'https://www.linkedin.com/company/AyazhanKad/',
    twitter: 'https://x.com/AyazhanKad_io',
    youtube: 'https://www.youtube.com/watch?v=hI5cjgtdLr0',
    medium: 'https://AyazhanKad.medium.com',
    contactUs: 'https://AyazhanKad.io/contact',
  },
  stickyNav: true,
  author: 'AyazhanKad',
}

export type SiteConfig = typeof siteConfig
