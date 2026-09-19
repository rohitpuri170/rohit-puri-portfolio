// Central place to edit personal / brand details.
// Update this file to change contact links across the whole site.
// siteUrl comes from .env (VITE_SITE_URL) — see .env.example — so the
// domain only has to be set in one place (also used by index.html and
// scripts/generate-seo-files.js for robots.txt / sitemap.xml).

export const site = {
  name: 'Rohit Puri',
  role: 'Java Full Stack Developer',
  location: 'Karachi, Pakistan',
  email: 'rohitpuri2k2022@gmail.com',
  github: 'https://github.com/rohitpuri170/',
 linkedin: 'https://www.linkedin.com/in/rohit-puri-79b20a343',
  resumeUrl: '/resume.pdf', // drop your resume PDF into /public and keep this name, or change the path
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  year: new Date().getFullYear(),
}
