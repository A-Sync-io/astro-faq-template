// Site-wide configuration
// Customize these values for your project

export const SITE = {
  name: 'FAQ Site',
  title: 'FAQ Site Template',
  description: 'A modern, fast FAQ and content website built with Astro',
  url: 'https://your-domain.com',
  ogImage: '/og-image.png',
  language: 'en',
  author: 'Your Name'
} as const;

export const NAV = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' }
  ]
} as const;

export const COLORS = {
  primary: '#2563eb',
  secondary: '#64748b',
  accent: '#f59e0b'
} as const;
