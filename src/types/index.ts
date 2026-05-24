export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'entrantes' | 'arroces' | 'principales' | 'postres' | 'bebidas'
  tags?: ('vg' | 'gf' | 'chef')[]
  featured?: boolean
}

export interface MenuCategory {
  id: string
  label: string
  description: string
  items: MenuItem[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  date: string
  platform: 'google' | 'tripadvisor'
}

export interface FeaturedDish {
  id: string
  name: string
  description: string
  price: number
  image: string
}
