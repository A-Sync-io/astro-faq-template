---
title: "How do I customize the site configuration?"
description: "Modify site name, navigation, and colors in the config file"
category: "customization"
tags: ["config", "branding"]
pubDate: 2024-01-16
order: 2
---

## Site Configuration

All site-wide settings are in `src/config.ts`:

```typescript
export const SITE = {
  name: 'Your Site Name',
  title: 'Your Page Title',
  description: 'Your site description',
  url: 'https://your-domain.com',
  language: 'en'
};
```

## Navigation

Update the navigation links:

```typescript
export const NAV = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ]
};
```

## Colors

Customize the color scheme:

```typescript
export const COLORS = {
  primary: '#2563eb',
  secondary: '#64748b',
  accent: '#f59e0b'
};
```
