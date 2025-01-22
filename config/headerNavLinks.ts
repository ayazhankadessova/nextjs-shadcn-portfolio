interface Dropdown {
  title: string
  href: string
  description: string
}

interface DialogInfo {
  title: string
  href: string
  dropdown: Dropdown[]
  toggle: boolean
}

interface DialogsInfo {
  [key: string]: DialogInfo
}

const dialogsInfo: DialogsInfo = {
  Products: {
    title: 'Products',
    href: '/products',
    dropdown: [
      {
        title: 'For Devs',
        href: '',
        description:
          'Scan your GitHub account and join our talent pool to unlock career opportunities.',
      },
      {
        title: 'For Companies',
        href: '',
        description:
          'Discover how GitRoll can help you find or assess your next developer.',
      },
      {
        title: 'Dev Login',
        href: '',
        description: 'Login to your Github account to see your results.',
      },
      {
        title: 'Company Login',
        href: '',
        description:
          'A batch-scanning tool for you to learn about your candidates .',
      },
    ],
    toggle: true,
  },
  'About Us': {
    title: 'Our Story',
    href: '/ourstory',
    dropdown: [
      {
        title: 'Our Story',
        href: '/ourstory',
        description: 'Story About How We started GitRoll',
      },
      {
        title: 'Our Algorithm',
        href: '/docs/primitives/hover-card',
        description: 'How it works.',
      },
      {
        title: 'Learning Resources',
        href: '/docs/primitives/progress',
        description: 'How to write clean code.',
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Read articles.',
      },
    ],
    toggle: true,
  },
  Blog: {
    title: 'Blog',
    href: '/blog',
    dropdown: [
      {
        title: 'Out Story',
        href: '/docs/primitives/alert-dialog',
        description: 'Story About How We started GitRoll',
      },
      {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
    ],
    toggle: false,
  },
}

export default dialogsInfo
