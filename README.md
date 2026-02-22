# Luca Poli Personal Website

Minimal text-first personal site built with Astro and deployed on Vercel.

## Tech Stack
- Astro (static output)
- TypeScript
- Tailwind CSS with custom global typography/layout styles
- Markdown/MDX content collections from `/content/writing`
- `@astrojs/sitemap` for sitemap generation
- `@astrojs/rss` for `/feed.xml`
- `@vercel/analytics` for page analytics
- Vercel deployment from `main`

## Local Development
```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts
- `npm run dev` - local development server
- `npm run check` - Astro type/content checks
- `npm run build` - production build to `dist/`
- `npm run preview` - preview built output locally

## Content Model
Writing posts live in:

`/content/writing/*.{md,mdx}`

Required/optional frontmatter:

```md
---
title: "Post title"
date: 2026-02-22
excerpt: "Short one-line summary"
description: "Optional fallback summary"
draft: true
---
```

Notes:
- Slug comes from filename (`content/writing/my-post.md` -> `/writing/my-post`).
- `draft: true` posts are available locally but excluded from production builds.
- Writing post pages show date + estimated reading time.

## SEO, Feed, and Discovery
- Every page gets a unique `<title>`, canonical URL, and `<meta name="description">` via `BaseLayout`.
- Open Graph tags are set globally (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`).
- Writing post pages use dynamic OG metadata from post title/excerpt and set `og:type="article"`.
- Sitemap is generated at `/sitemap-index.xml`.
- RSS feed is generated at `/feed.xml` and includes published writing posts.
- `src/pages/robots.txt.ts` publishes the sitemap URL.

## Deployment (Vercel)
- Production deploys run from `main`.
- Preview deploys are available from pull requests.
- Primary domain: `https://lucapoli.com`

Recommended deploy validation:
```bash
npm run check
npm run build
```

Then verify:
- `/sitemap-index.xml`
- `/feed.xml`
- `/writing` only lists published posts (drafts excluded in production)
