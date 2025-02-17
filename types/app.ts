interface Dropdown {
  title: string
  href: string
  description: string
}

interface DialogInfo {
  title: string
  href: string
  dropdown?: Dropdown[]
  toggle: boolean
}

export interface DialogsInfo {
  [key: string]: DialogInfo
}

export type SkillGroup = {
  id: string
  title: string
  skills: string[]
}

export type ContactInfo = {
  email: string
  telegram: string
  description: string
}
