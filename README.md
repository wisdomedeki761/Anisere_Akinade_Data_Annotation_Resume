# Anisere Akinade — Portfolio Website

A fast, SEO-optimized, fully responsive one-page portfolio/resume website for **Anisere Akinade**, Data Annotation & AI Training Specialist. Built with Vite, React, TypeScript, and Tailwind CSS v4.

**Live site:** https://anisere-akinade.vercel.app/

---

## ✨ Features

### Design
- **Desktop view** (≥ 1024px) — 1200px centered content column based on the MacBook Pro 16" design, with decorative background glow blobs
- **Mobile view** (< 1024px) — stacked mobile layout with full-width action buttons, vertical contact card, and mobile-specific background glows
- Dark theme (`#0B0F19` background, `#111827` cards, `#F7931A` orange accent)
- Inter font bundled locally (no external font requests — faster and privacy-friendly)

### Functionality
- Smooth-scrolling navigation (Projects, Experience, Education, Contact)
- **Hire Me** button opens a prefilled email to `Anisere66@Outlook.com`
- **Download CV** button opens the resume PDF in a new tab
- Contact items are clickable: location/address open Google Maps, phone dials, email composes
- Hover states on all interactive elements

### SEO (see [SEO section](#-seo))
- Complete meta tags, Open Graph, and Twitter/X card support
- JSON-LD structured data (Person + WebSite schemas)
- Semantic HTML5 (`<header>` / `<main>` / `<nav>` / `<section>` / `<footer>`)
- `robots.txt` and `sitemap.xml`
- Social preview image (1200×630) generated to match the site's branding

### Accessibility
- Semantic landmarks and ARIA labels
- Skip-to-content link (visible on keyboard focus)
- Visible focus states, sufficient color contrast

---

## 🛠 Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Build tool | [Vite](https://vite.dev/) v8 (Rolldown)      |
| Framework  | React 19 + TypeScript                        |
| Styling    | Tailwind CSS v4 (CSS-first config)           |
| Fonts      | @fontsource/inter (self-hosted, weights 400–800) |
| Linting    | oxlint                                       |

---

## 📁 Project Structure

```
desktop/
├── index.html                  # HTML shell with all SEO meta tags + JSON-LD
├── public/
│   ├── Anisere_Akinade_Data_Annotation_Resume.pdf   # Resume served by "Download CV"
│   ├── apple-touch-icon.png    # 180×180 icon (added to home screen)
│   ├── favicon.svg             # Browser tab icon
│   ├── og-image.png            # 1200×630 social share preview image
│   ├── robots.txt              # Crawler rules + sitemap pointer
│   └── sitemap.xml             # Sitemap for search engines
├── src/
│   ├── App.tsx                 # Entire page (all content lives here)
│   ├── index.css               # Tailwind v4 import + theme + base styles
│   └── main.tsx                # Entry point, font imports
├── vite.config.ts              # Vite config (react + tailwindcss plugins)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (developed and tested on Node 24)
- npm 11+

### Install & Run

```bash
cd desktop
npm install
npm run dev       # start dev server → http://localhost:5173
```

### Production Build

```bash
npm run build     # type-checks (tsc) then builds to dist/
npm run preview   # serve the production build locally
```

### Available Scripts

| Script            | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot module reload   |
| `npm run build`   | TypeScript check + production build into `dist/` |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run oxlint                                     |

---

## 🌐 Deployment (Vercel)

The repo is preconfigured for Vercel — no config file needed:

1. Push the `desktop/` folder to a Git repository (GitHub/GitLab/Bitbucket)
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo
3. Vercel auto-detects Vite. If asked, use these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy — your site gets a `*.vercel.app` URL

> **Tip:** The site is configured for `https://anisere-akinade.vercel.app`. If you use a **custom domain**, update the URLs listed in [Changing the domain](#changing-the-domain).

---

## 🔍 SEO

Everything is wired up in `index.html`:

| Item                     | Where                              |
| ------------------------ | ---------------------------------- |
| Title & meta description | `<head>` in `index.html`           |
| Canonical URL            | `<link rel="canonical">`           |
| Open Graph (social cards)| `og:*` meta tags                   |
| Twitter/X cards          | `twitter:*` meta tags              |
| Structured data          | Two JSON-LD blocks: `Person` + `WebSite` |
| Crawler rules            | `public/robots.txt`                |
| Sitemap                  | `public/sitemap.xml`               |
| Social preview image     | `public/og-image.png`              |

### After deploying — submit to Google
1. Verify ownership in [Google Search Console](https://search.google.com/search-console) (easiest: "URL prefix" method with a Vercel DNS record or file verification)
2. Submit `https://anisere-akinade.vercel.app/sitemap.xml` under **Sitemaps**
3. Use the **URL Inspection** tool to request indexing of the homepage

### Changing the domain
If the site moves to another domain, update `https://anisere-akinade.vercel.app` in these places:
- `index.html` — canonical, `og:url`, `og:image`, `twitter:image`, and both JSON-LD blocks
- `public/robots.txt` — sitemap URL
- `public/sitemap.xml` — `<loc>` URL

### Updating the LinkedIn profile
The LinkedIn placeholder URL appears in:
- `index.html` → JSON-LD `sameAs` array
- `src/App.tsx` → footer link

Replace `https://www.linkedin.com/` with the real profile URL (this helps Google associate the site with the profile).

---

## ✏️ Customizing the Content

All page content is defined as data arrays at the top of `src/App.tsx`:

| Array         | Content                                     |
| ------------- | ------------------------------------------- |
| `navLinks`    | Navigation menu items                       |
| `contactItems`| Contact bar entries (label, value, link, icon) |
| `skills`      | Skill pills in "Core Competencies"          |
| `experiences` | Work experience cards                       |
| `projects`    | Projects & certifications cards             |

Edit the JSX below the arrays for the hero text, education card, and footer. Styling is entirely Tailwind utility classes; the design tokens used:

- Background: `#0B0F19` · Cards: `#111827` · Borders: `#1E293B` / `#334155`
- Accent: `#F7931A` (orange) · Headings: `#F8FAFC` · Body text: `#94A3B8`

### Replacing the resume PDF
Overwrite `public/Anisere_Akinade_Data_Annotation_Resume.pdf`, or if you rename it, update the `href` of the **Download CV** link in `src/App.tsx`.

### Regenerating the social image
`og-image.png` and `apple-touch-icon.png` were generated with the branding colors. To regenerate or edit them, adjust and run the PowerShell script using `System.Drawing` (or replace the PNGs with any 1200×630 image).

---

## 📄 License

Free to use as a personal portfolio template. Attribution not required.
