# WorldPass Immigration - Deployment Guide

## Prerequisites

- Git is installed (v2.53.0)
- Git repo initialized with initial commit (55 files)
- `public/favicon.png`, `public/og-image.png`, `public/logo.jpeg` verified
- `.gitignore` configured (excludes `.next/`, `node_modules/`, `.env*`)
- Build passes: `npm run build` completes with 0 errors, 11 static pages

---

## Step 1: Push to GitHub

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `WorldPass_Redesign`
3. Do NOT initialize with README, .gitignore, or license (already included)
4. Run these commands in `D:\Workkk\WorldPass_Redesign`:

```bash
git remote add origin https://github.com/YOUR_USERNAME/WorldPass_Redesign.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New > Project**
3. Import the `WorldPass_Redesign` repository
4. Vercel auto-detects Next.js -- no configuration needed
5. Click **Deploy**
6. Live URL (e.g. `worldpass-redesign.vercel.app`) ready in ~60 seconds

### Why Vercel

- Built by the Next.js team -- zero-config deployment
- Free tier: 100 GB bandwidth/month, automatic HTTPS, global CDN
- Every `git push` to `main` triggers automatic production deployment
- Every PR gets a unique preview URL for testing
- Native `next/image` optimization, ISR, and SSR support

### Alternative: Netlify

- Connect GitHub repo, set build command to `npm run build`
- Good free tier, slightly less optimized for Next.js

### Alternative: Static Export (GitHub Pages / S3)

- Add `output: 'export'` to `next.config.mjs` for pure static HTML
- Trade-off: loses `next/image` optimization and future SSR/ISR

---

## Step 3: Custom Domain Setup

The app hardcodes `https://worldpassimmigration.com` in these files:
- `app/sitemap.ts` -- sitemap URLs
- `app/robots.ts` -- sitemap reference
- `app/layout.tsx` -- metadataBase, JSON-LD, canonical URLs
- All page files -- Open Graph URLs, breadcrumb JSON-LD

### If you own `worldpassimmigration.com`:

1. In Vercel dashboard: **Settings > Domains > Add** `worldpassimmigration.com`
2. Update DNS records at your registrar:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME record**: `www` → `cname.vercel-dns.com`
3. Vercel auto-provisions SSL certificate

### If you use a different domain:

Update the hardcoded `worldpassimmigration.com` URLs in the files listed above.

---

## Step 4: Post-Launch Verification Checklist

- [ ] **Google Search Console**: Submit `/sitemap.xml` at [search.google.com/search-console](https://search.google.com/search-console)
- [ ] **Rich Results Test**: Validate JSON-LD at [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] **PageSpeed Insights**: Test performance at [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] **Mobile-Friendly Test**: Verify responsive design
- [ ] **Open Graph Debugger**: Test social previews at [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- [ ] **Verify all routes**: Home, Services, Process, Countries, Testimonials, Contact, 404 page

---

## Step 5: Optional Enhancements

- **Google Analytics 4**: Add tracking for visitor insights
- **Vercel Analytics**: One-click enable in Vercel dashboard
- **Automatic deployments**: Already configured -- every push to `main` deploys

---

## Quick Reference

| Item | Value |
|------|-------|
| Framework | Next.js 14.2.35 |
| Node.js | v18.20.8 |
| Pages | 7 (Home, Services, Process, Countries, Testimonials, Contact, 404) |
| Build output | Static (all pages prerendered) |
| Estimated deploy time | 15-30 minutes |
| Hosting cost | Free (Vercel Hobby plan) |
