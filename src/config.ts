// Theme Configuration
// Change these values to customize your site's appearance

export const THEME = {
  // Primary brand color - change this to match your brand
  // Supports hex, rgb, hsl, oklch, etc.
  primary: {
    DEFAULT: '#E30613',  // DI Digital red (change to your brand color)
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
  
  // Secondary/accent color
  secondary: {
    DEFAULT: '#1A1A1A',  // Near black
    light: '#2D2D2D',
    lighter: '#404040',
  },
  
  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#EBEBEB',
    dark: '#1A1A1A',
  },
  
  // Text colors
  text: {
    primary: '#1A1A1A',
    secondary: '#4A4A4A',
    tertiary: '#737373',
    muted: '#A3A3A3',
    inverted: '#FFFFFF',
  },
  
  // Border colors
  border: {
    light: '#E5E5E5',
    DEFAULT: '#D4D4D4',
    dark: '#A3A3A3',
  },
  
  // Spacing scale (in rem units)
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },
  
  // Typography scale
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
  },
  
  // Border radius
  radius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
} as const;

// Site metadata
export const SITE = {
  name: 'FAQ Site',
  title: 'FAQ Site Template',
  description: 'A modern, fast FAQ and content website built with Astro',
  url: 'https://your-domain.com',
  ogImage: '/og-image.png',
  language: 'en',
  author: 'Your Name',
} as const;

// Navigation links
export const NAV = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Categories', href: '/categories' },
  ],
} as const;
