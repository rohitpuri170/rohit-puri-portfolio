# Rohit Puri — Portfolio

A personal portfolio site for **Rohit Puri, Java Full Stack Developer**, built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion (animations)
- lucide-react (icons) + two hand-built brand icons (GitHub, LinkedIn)

## Project structure

```
src/
  components/    # Navbar, Hero, About, Skills, Experience, Journey,
                 # Projects, ProjectCard, ProjectVisual, Education,
                 # Services, Contact, Footer, Reveal (scroll animation),
                 # icons.jsx (custom GitHub/LinkedIn icons)
  data/          # config.js, projects.js, skills.js, experience.js,
                 # education.js, services.js, journey.js
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg, robots.txt, sitemap.xml (last two are regenerated — see below)
scripts/
  generate-seo-files.js   # writes robots.txt / sitemap.xml from VITE_SITE_URL
.env / .env.example        # single source of truth for the site's domain
```

All personal information, project data, skills, experience, education,
and services live in `src/data/` as plain arrays/objects — edit those
files to update the site content without touching any component.

---

## A. What was improved in this pass

- **Hero** — restructured so "Rohit Puri" and "Java Full Stack Developer"
  read as the headline (rather than a small intro line + heading), with
  tighter tracking/line-height and a location/status eyebrow. Kept the
  code-panel concept, refined its shadow and spacing.
- **Projects** — every card now has a small abstract, CSS/SVG visual
  representing its domain (cart/products for ShopSphere, a kanban board
  for TaskFlow, a chart + record card for MedCare, a route + shipment
  icon for LogiTrack) instead of a plain text box. Added hover motion,
  clearer status styling, and kept all GitHub/demo links as configurable
  placeholders.
- **Navbar** — added scroll-spy active-section highlighting (desktop
  underline, mobile accent color) and an animated, staggered mobile menu.
- **About** — added a small "how the two sides connect" diagram
  (Java/Spring Boot → REST API → React) to visually tie backend and
  frontend together, as requested.
- **Skills** — Backend is now visually emphasized (bordered, tinted card,
  spans full width, "primary focus" tag) since Java/Spring Boot is the
  strongest area. Tags got hover states. No percentage bars, as required.
- **Experience & Journey** — stronger timeline treatment (pulsing "ongoing"
  indicator, connected dots) with scroll-reveal animation.
- **Color system** — narrowed to one consistent primary accent (amber).
  The muted green accent from the first pass is now only used for
  syntax-highlighting colors inside the hero's code snippet (which
  legitimately has multiple colors, like any code editor) — not as a UI
  accent anywhere else.
- **Animations** — added a shared `Reveal` component (scroll-triggered,
  staggered) used consistently across every section, and wrapped the app
  in Framer Motion's `MotionConfig reducedMotion="user"` so all motion
  respects the OS-level "reduce motion" setting automatically.
- **SEO** — the hardcoded `rohitpuri.dev` domain is gone. It now lives in
  one place (`VITE_SITE_URL` in `.env`) and is used for the HTML
  canonical/OG tags (via Vite's native `%VITE_SITE_URL%` HTML env
  interpolation) and for `robots.txt` / `sitemap.xml`, which are
  regenerated from that same value by `scripts/generate-seo-files.js`
  (runs automatically before `dev` and `build`). The `og:image` tag
  pointing at a non-existent file was removed and left as a commented-out
  line with instructions, rather than a broken reference.
- **Accessibility & contrast** — checked heading structure, focus states,
  form labels/aria-invalid/aria-describedby, and measured color contrast
  for every text/background pairing; the darkest gray (used for small
  metadata like project numbers and dates) was lightened slightly so it
  passes WCAG AA at normal text size, everywhere it's used.
- **Anchor scrolling** — every section now has `scroll-mt-20` so the
  sticky navbar no longer overlaps the top of a section when you click a
  nav link or jump to an anchor.
- Ran a production build and the linter after every batch of changes —
  currently 0 build errors and 0 lint warnings.

## B. Things you'll need to add manually

- **Resume**: drop a real `resume.pdf` into `public/`. The button already
  points at `/resume.pdf` — nothing else to change.
- **Project links**: replace the `'#'` placeholders in
  `src/data/projects.js` (`github` / `demo` fields) as repos and any live
  demos go up.
- **Domain**: once you know where this will actually be hosted, set
  `VITE_SITE_URL` in `.env` to that domain (see `.env.example`). Do this
  before running `npm run build` for a real deploy so the SEO tags and
  sitemap are correct.
- **OG image** (optional but recommended for link previews): add a
  1200×630 image at `public/og-image.png`, then uncomment the `og:image`
  line in `index.html` (it's commented out with instructions right next
  to it).
- **LinkedIn URL**: currently set to the tinyurl link you provided
  (`https://tinyurl.com/yz553d6`) in `src/data/config.js` — swap it for
  your full `linkedin.com/in/...` URL whenever you'd like.

## C. Commands to run it locally

```bash
npm install       # first time only
npm run dev       # local dev server with hot reload (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build locally to sanity-check it
```

## D. Files to edit for future updates

| To change...                              | Edit...                          |
|--------------------------------------------|-----------------------------------|
| Name, email, GitHub/LinkedIn, resume path  | `src/data/config.js`              |
| Site domain (SEO/canonical/sitemap)        | `.env` (`VITE_SITE_URL`)          |
| Projects (links, features, stack, status)  | `src/data/projects.js`            |
| Project domain visuals                     | `src/components/ProjectVisual.jsx`|
| Skills                                     | `src/data/skills.js`              |
| Freelance experience                       | `src/data/experience.js`          |
| Education                                  | `src/data/education.js`           |
| Services                                   | `src/data/services.js`            |
| "How I got here" timeline                  | `src/data/journey.js`             |
| Colors, fonts, spacing tokens              | `tailwind.config.js`              |

## Deployment

The `dist/` folder is a static site and can be deployed anywhere that
serves static files:

- **Vercel** — `vercel deploy` or connect the repo, framework preset "Vite"
- **Netlify** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — push `dist/` to a `gh-pages` branch, or use the
  `gh-pages` npm package
- **Cloudflare Pages** — build command `npm run build`, output `dist`

## Notes

- The contact form validates on the client and opens a pre-filled email
  (via `mailto:`) to the address in `src/data/config.js` — there's no
  backend wired up, per your instructions. Swap the `handleSubmit` logic
  in `src/components/Contact.jsx` for an API call if you add a form
  endpoint (e.g. Formspree, a custom API route) later.
- The GitHub and LinkedIn icons are hand-drawn SVGs in
  `src/components/icons.jsx` because the installed version of
  `lucide-react` no longer ships brand/logo icons.
- Every project visual is an abstract SVG built from shapes (no stock
  photos, no fake screenshots) — they only hint at each project's domain.
