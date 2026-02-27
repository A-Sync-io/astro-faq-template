---
title: "How do I add new FAQ entries?"
description: "Create markdown files in the content/faq directory"
category: "content"
tags: ["markdown", "content"]
pubDate: 2024-01-17
order: 3
---

## Creating FAQ Entries

Create a new `.md` file in `src/content/faq/`:

```markdown
---
title: "Your question here"
description: "Brief description of the answer"
category: "category-name"
tags: ["tag1", "tag2"]
pubDate: 2024-01-20
featured: false
order: 0
---

Your answer content here in **Markdown** format.
```

## Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | The question (max 100 chars) |
| `description` | string | Yes | Short summary (max 200 chars) |
| `category` | string | Yes | Category slug |
| `tags` | array | No | List of tags |
| `pubDate` | date | Yes | Publication date |
| `draft` | boolean | No | Hide from production |
| `featured` | boolean | No | Pin to top |
| `order` | number | No | Sort order |
