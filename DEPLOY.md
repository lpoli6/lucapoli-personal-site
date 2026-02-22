# Deploy Checklist (Vercel)

## Vercel Project Settings

1. Open the project in Vercel.
2. Confirm Framework Preset is Astro.
3. Confirm production branch is `main`.
4. Confirm automatic deployments are enabled.

## Domains

1. Go to `Settings` -> `Domains`.
2. Confirm both domains are connected:
   - `lucapoli.com`
   - `www.lucapoli.com`
3. Complete ICANN verification when prompted by Vercel.

## Build Validation Before Merge

Run locally:

```bash
npm run check
npm run build
```

Expected generated outputs:
- `dist/sitemap-index.xml`
- `dist/feed.xml`

## Post-Deploy Smoke Test

Verify in production:
- `/`
- `/writing`
- `/about`
- `/now`
- `/feed.xml`
- `/sitemap-index.xml`
- `/robots.txt` includes sitemap URL

Also confirm:
- Draft writing posts are not listed in production.
- Vercel Analytics is active site-wide via `BaseLayout.astro`.

## External Links

- LinkedIn: `https://www.linkedin.com/in/luca-poli-uk/`
- Email: `mailto:luca@lucapoli.com`
