export interface NavItem {
  label: string
  href: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface MentionCard {
  id: string
  src: string
  alt: string
  title: string
  description?: string
  category?: string
  date?: string
  fullText?: string
}

export interface Stat {
  value: string
  lines: readonly [string, string]
}

export interface ServiceAccordionItem {
  id: string
  title: string
  logo?: string
  description?: string
}
