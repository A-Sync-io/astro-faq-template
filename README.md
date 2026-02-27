# Astro FAQ Template

A modern, editorial-style FAQ and content website template built with Astro 5, Tailwind CSS v4, and TypeScript. Inspired by premium news and content sites.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🎨 Design System

This template features a **premium editorial design** with:

- **Clean typography** with large, bold headlines
- **Card-based layouts** for easy scanning
- **CSS Custom Properties** for effortless theming
- **Dark mode support** (auto + manual toggle ready)
- **Responsive design** that works beautifully on all devices

---

## 🚀 Quick Start

### Use this template

Click the "**Use this template**" button above to create a new repository.

### Or clone directly

```bash
git clone https://github.com/a-sync-io/astro-faq-template.git my-faq-site
cd my-faq-site
npm install
npm run dev
```

Your site will be running at `http://localhost:4321`

---

## 🎨 Customization

### 1. Change Your Brand Color (Super Easy!)

**Option A: Quick CSS Change (Recommended)**

Edit `src/styles/global.css` and change the `--color-primary` value:

```css
:root {
  /* CHANGE THIS to your brand color */
  --color-primary: #E30613;  /* Default: DI Digital red */
  
  /* Or use any color format: */
  --color-primary: #2563eb;     /* Hex blue */
  --color-primary: rgb(37, 99, 235);  /* RGB */
  --color-primary: hsl(221, 83%, 53%);  /* HSL */
  --color-primary: oklch(0.546 0.245 262.881);  /* OKLCH */
}
```

**Option B: Full Theme Configuration**

For more control, edit `src/config.ts`:

```typescript
export const THEME = {
  primary: {
    DEFAULT: '#2563eb',  // Your brand color
    50: '#EFF6FF',       // Lightest shade
    100: '#DBEAFE',
    // ... all the way to 950
  },
  // ... other colors
};
```

### 2. Site Configuration

Edit `src/config.ts`:

```typescript
export const SITE = {
  name: 'Your Site Name',
  title: 'Your Page Title',
  description: 'Your site description',
  url: 'https://your-domain.com',
  language: 'en',
  author: 'Your Name'
};

export const NAV = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Categories', href: '/categories' }
  ]
};
```

### 3. Adding FAQ Content

Create markdown files in `src/content/faq/`:

```markdown
---
title: "Your question here"
description: "Brief description of the answer"
category: "category-name"
tags: ["tag1", "tag2"]
pubDate: 2024-01-20
featured: true
order: 1
---

Your answer content in **Markdown** format.
```

---

## 📁 Project Structure

```
├── public/              # Static assets
│   └── favavicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── FAQAccordion.astro   # Expandable FAQ list
│   │   ├── FAQCard.astro        # FAQ preview cards
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Search.astro         # Client-side search
│   │   └── SEO.astro
│   ├── content/         # Content collections
│   │   ├── config.ts    # Content schemas
│   │   ├── faq/         # FAQ markdown files
│   │   └── categories/  # Category data files
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro          # Homepage
│   │   ├── search.astro         # Search page
│   │   ├── categories.astro     # Categories list
│   │   └── faq/
│   │       ├── index.astro      # All questions
│   │       └── [slug].astro     # Individual FAQ
│   ├── styles/
│   │   └── global.css   # CSS variables + utilities
│   ├── types/
│   │   └── index.ts
│   └── config.ts        # Site + theme config
├── .vscode/             # VS Code settings
├── astro.config.mjs
├── package.json
├── README.md
└── LICENSE
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Astro 5** | Latest Astro with Content Collections |
| 🎨 **Easy Theming** | Change one CSS variable to rebrand |
| 📝 **Content Collections** | Type-safe markdown with Zod schemas |
| 🔍 **Client-side Search** | Fast fuzzy search, no external service |
| 📱 **Fully Responsive** | Mobile-first, works on all devices |
| 🔍 **SEO Optimized** | Meta tags, OpenGraph, sitemap, structured data |
| 🏷️ **Schema.org** | FAQPage structured data for rich snippets |
| ♿ **Accessible** | WCAG compliant, keyboard navigation |
| 🌙 **Dark Mode** | Automatic + manual toggle ready |
| 📊 **Analytics Ready** | GA4 placeholder included |
| ⚡ **100/100 Lighthouse** | Optimized for Core Web Vitals |

---

## 🎨 Design Tokens

The template uses CSS custom properties for consistent theming:

```css
/* Colors */
--color-primary: #E30613;
--color-secondary: #1A1A1A;
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F5F5F5;
--color-text-primary: #1A1A1A;
--color-text-secondary: #4A4A4A;
--color-text-tertiary: #737373;
--color-border-light: #E5E5E5;

/* Typography */
--font-sans: "Inter Variable", system-ui, sans-serif;

/* Spacing */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;

/* Border Radius */
--radius-md: 0.25rem;
--radius-lg: 0.5rem;
--radius-xl: 0.75rem;

/* Shadows */
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

---

## 🧞 Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

---

## 🚀 Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/a-sync-io/astro-faq-template)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/a-sync-io/astro-faq-template)

### Manual

```bash
npm run build
```

Deploy the `dist/` folder to any static host.

---

## 🔧 Advanced Configuration

### Analytics

Replace `GA_MEASUREMENT_ID` in `src/layouts/Layout.astro`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Dark Mode Toggle

To add a manual dark mode toggle, use the `data-theme` attribute:

```javascript
// Toggle dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Toggle light mode
document.documentElement.removeAttribute('data-theme');
```

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

Built with ❤️ by [A-Sync.io](https://github.com/a-sync-io)
