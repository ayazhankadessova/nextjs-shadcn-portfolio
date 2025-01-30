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
}

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  points: string[]
  github: string
  demo: string
}

export type HobbyImage = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export type Hobby = {
  id: string
  title: string
  content: string
  images?: HobbyImage[]
  additionalContent?: {
    type: 'highlight' | 'grid' | 'single'
    content?: string
    className?: string
  }
}
