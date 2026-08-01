# Phuc Bui Huu — Portfolio

Personal portfolio & resume site for **Phuc, Bui Huu** — Fullstack Test Engineer / Automation Test Engineer.

This is a full React rewrite of the original [Flutter Web version](https://github.com/maotou-spy/phucbh_resume), rebuilt from scratch with modern web architecture rather than a 1:1 widget-for-widget port. All content (profile, experience, skills, contact info) is preserved; the implementation, structure, and UX have been redesigned.

🔗 Live: [phucbh.id.vn](https://phucbh.id.vn)

## Features

- **Single-page portfolio**: Hero, About, Experience (work + personal projects), Contact
- **Dark / light theme** with system-preference detection and persisted choice (no flash on load)
- **Signature "test runner" widget** in the hero — a small terminal panel that sequentially "passes" the author's real test suites, tying the visual identity to their actual QA/automation background
- **Scroll-spy navigation** with a mobile slide-out drawer
- **Framer Motion** scroll-reveal and micro-interactions (respects `prefers-reduced-motion`)
- **Validated contact form** (React Hook Form) that opens a pre-filled `mailto:` link
- **SEO**: per-page meta tags, Open Graph, Twitter Card, canonical URLs, `robots.txt`, `sitemap.xml`
- **Resume download** served from `/public/resume.pdf`
- **Lazy-loaded routes** and code-split bundles
- **Accessible by default**: semantic landmarks, skip-to-content link, visible focus states, `aria-label`s, alt text

## Tech stack

| Concern        | Choice                                |
| -------------- | ------------------------------------- |
| Framework      | React 19 + TypeScript                 |
| Build tool     | Vite                                  |
| Styling        | Tailwind CSS v4                       |
| Routing        | React Router                          |
| Animation      | Framer Motion                         |
| Icons          | Lucide React                          |
| Forms          | React Hook Form                       |
| SEO            | React Helmet Async                    |
| Linting/format | ESLint (typescript-eslint) + Prettier |

## Folder structure

```text
src/
├── assets/           # images, icons, resume PDF
├── components/
│   ├── common/       # Container, Seo, Reveal
│   ├── layout/        # Header, MobileDrawer, Footer, Layout
│   ├── ui/            # Button, Badge, SectionHeading, ThemeToggle
│   └── sections/      # Hero, About, Experience, Contact + subcomponents
├── pages/             # Home, NotFound
├── hooks/             # useTheme, useActiveSection
├── data/              # profile.ts, experience.ts, skills.ts, social.ts
├── constants/         # nav.ts, site.ts (SEO meta)
├── utils/             # cn.ts (classnames helper)
├── types/             # shared TypeScript interfaces
├── routes/            # route definitions
├── App.tsx
└── main.tsx
```

All page copy and data live in `src/data` — no hardcoded content inside components.

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173`.

### Linting & formatting

```bash
npm run lint          # ESLint
npm run format        # Prettier (writes changes)
npm run format:check  # Prettier (check only)
```

### Build

```bash
npm run build
```

Type-checks with `tsc -b` and outputs a production build to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Deployment

The project is pre-configured for three targets. Since this is a client-side routed SPA, all three are set up to fall back unmatched paths to `index.html`.

### Netlify

`netlify.toml` is already set up (build command, publish dir, SPA redirect, asset caching). Connect the repo in Netlify and it will build automatically. If deploying under a custom domain (as this project does, `phucbh.id.vn`), set it under **Site settings → Domain management**.

### Vercel

`vercel.json` configures the build output and SPA rewrites. Import the repo in Vercel — no extra configuration needed.

### GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes `dist/` via GitHub Actions on every push to `main`. Enable **Pages → Source: GitHub Actions** in the repo settings. A `public/CNAME` file is included for the custom domain; remove it (or edit `vite.config.ts` to set `base: '/<repo-name>/'`) if deploying to the default `username.github.io/<repo>` path instead.

## Content updates

To update portfolio content, edit the relevant file in `src/data/` — no component code needs to change:

- `profile.ts` — name, title, summary, education
- `skills.ts` — technical & core skills
- `experience.ts` — work history & personal projects
- `social.ts` — contact info & social links

To swap the resume PDF, replace `public/resume.pdf` (and optionally `src/assets/resume/resume.pdf`) with the new file, keeping the same filename.

## Credits

Original Flutter Web version: [maotou-spy/phucbh_resume](https://github.com/maotou-spy/phucbh_resume)
