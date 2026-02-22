# Luca Poli Personal Website

A minimalist, text-first personal website built with Astro, TypeScript, Tailwind CSS, and MDX. The site is deployed on GitHub Pages with push-to-live CI.

## Tech Stack
- Astro (static output)
- TypeScript
- Tailwind CSS (handcrafted styles)
- MDX content collections sourced from `/content/writing`
- GitHub Pages + GitHub Actions deployment

## Quick Start
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

## Content Workflow
Writing content lives in:

`/content/writing/*.mdx`

Each essay needs frontmatter:

```md
---
title: "Your essay title"
date: "YYYY-MM-DD"
description: "Optional short summary"
---

Essay body in Markdown/MDX.
```

Filename becomes the slug.

Example: `content/writing/my-new-essay.mdx` -> `/writing/my-new-essay`

## Publishing Model (Near Realtime)
1. Commit your content/code changes.
2. Push to `main`.
3. GitHub Actions builds and deploys to GitHub Pages automatically.
4. Changes are typically live in about 1-3 minutes.

## GitHub Pages Setup
1. Push this repository to GitHub.
2. In GitHub repository settings, enable **Pages** with **GitHub Actions** as the source.
3. Default deploy target is the project URL: `https://lpoli6.github.io/lucapoli-personal-site/`.
4. Optional custom domain settings:
   - `PUBLIC_SITE_URL=https://lucapoli.com`
   - `PUBLIC_BASE_PATH=/`
   - ensure DNS points to GitHub Pages for `lucapoli.com`.

The repository already includes:
- `public/CNAME` for custom domain
- `.github/workflows/deploy-pages.yml` for build/deploy automation

## SEO
- Canonical and Open Graph metadata are set per page in `BaseLayout.astro`.
- Sitemap is generated during build via `@astrojs/sitemap`.
- `src/pages/robots.txt.ts` generates `robots.txt` with the correct sitemap URL.

## Notes
- No database and no CMS.
- No server runtime required for content pages.
- The site is static-first for speed and reliability on GitHub Pages.
