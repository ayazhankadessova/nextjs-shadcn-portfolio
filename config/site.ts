// Store links that can be referenced everywhere
// discord , linkedin, twitter, youtube, medium
// export type of siteConfig

export const siteConfig = {
  name: 'AyazhanKad',
  url: 'https://gitroll.io',
  description:
    'GitRoll shows the real coding skills of developers✨Talk is cheap. Show me the code.',
  socials: {
    discord: 'https://discord.com/invite/EEw3u9PVqA',
    linkedin: 'https://www.linkedin.com/company/gitroll/',
    twitter: 'https://x.com/gitroll_io',
    youtube: 'https://www.youtube.com/watch?v=hI5cjgtdLr0',
    medium: 'https://gitroll.medium.com',
    contactUs: 'https://gitroll.io/contact',
  },
  stickyNav: true,
  author: 'GitRoll',
}

export type SiteConfig = typeof siteConfig
