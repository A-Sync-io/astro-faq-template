# Astro FAQ Template

A modern, fast, and SEO-optimized Astro starter template for FAQ and content websites. Built with Astro 5, Tailwind CSS v4, and TypeScript.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🚀 Quick Start

### Use this template

Click the "Use this template" button above to create a new repository from this template.

### Or clone directly

```bash
git clone https://github.com/a-sync-io/astro-faq-template.git my-faq-site
cd my-faq-site
npm install
npm run dev
```

Your site will be running at `http://localhost:4321`

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Astro 5** | Latest Astro with Content Collections |
| 🎨 **Tailwind CSS v4** | Utility-first styling with dark mode support |
| 📝 **Content Collections** | Type-safe markdown content with Zod schemas |
| 🔍 **Client-side Search** | Fast fuzzy search without external services |
| 📱 **Fully Responsive** | Mobile-first design |
| 🔍 **SEO Optimized** | Meta tags, OpenGraph, sitemap, structured data |
| 🏷️ **Schema.org** | FAQPage structured data for rich snippets |
| ♿ **Accessible** | WCAG compliant, keyboard navigation |
| 🌙 **Dark Mode** | Automatic dark mode support |
| 📊 **Analytics Ready** | GA4 placeholder included |
| ⚡ **100/100 Lighthouse** | Optimized for Core Web Vitals |

---

## 📁 Project Structure

```
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── FAQAccordion.astro
│   │   ├── FAQCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Search.astro
│   │   └── SEO.astro
│   ├── content/         # Content collections
│   │   ├── config.ts    # Content schemas
│   │   └── faq/         # FAQ markdown files
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Routes
│   │   ├── index.astro
│   │   ├── search.astro
│   │   └── faq/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   └── config.ts        # Site configuration
├── .vscode/             # VS Code settings
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Customization

### 1. Site Configuration

Edit `src/config.ts` to customize your site:

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
    { label: 'FAQ', href: '/faq' }
  ]
};
```

### 2. Adding FAQ Content

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

### 3. Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | The question (max 100 chars) |
| `description` | string | ✅ | Short summary (max 200 chars) |
| `category` | string | ✅ | Category slug |
| `tags` | array | ❌ | List of tags |
| `pubDate` | date | ✅ | Publication date |
| `draft` | boolean | ❌ | Hide from production |
| `featured` | boolean | ❌ | Pin to top |
| `order` | number | ❌ | Sort order |

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

Build the site:
```bash
npm run build
```

Deploy the `dist/` folder to your hosting provider.

---

## 🔧 Advanced Configuration

### Analytics

Replace `GA_MEASUREMENT_ID` in `src/layouts/Layout.astro` with your Google Analytics 4 ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### SEO

Each page automatically generates:
- Meta tags
- OpenGraph tags
- Twitter Cards
- Canonical URLs
- Structured data (Schema.org)

Override per-page in frontmatter or props.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

Built with ❤️ by [A-Sync.io](https://github.com/a-sync-io)
