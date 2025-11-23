export type Experience = {
  company: string
  location: string
  position: string
  period: string
  projects: Array<{
    name: string
    tech: string[]
    achievements: string[]
  }>
  link?: string
  image?: string
}

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  points: string[]
  github?: string
  demo?: Array<{
    text: string
    url: string
  }>
  link?: string | null
}

export interface Image {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  title?: string
}

export interface HighlightContent {
  type: 'highlight'
  variant: 'link' | 'info' | 'featured' | 'warning' | 'quote'
  content: string
  href?: string
  icon?: string
}

export interface GridContent {
  type: 'grid'
  className: string
}

export type AdditionalContent = HighlightContent | GridContent


export interface Hobby {
  id: string
  title: string
  content: string
  images?: Image[]
  additionalContent?: AdditionalContent
  // title?: string
}
