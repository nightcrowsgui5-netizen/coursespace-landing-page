export interface Navigation {
  label: string
  path: string
}

export type NavKey = 'home' | 'courses' | 'testimonial' | 'mentor'

export interface NavItem {
  key: NavKey
  path: string
}
