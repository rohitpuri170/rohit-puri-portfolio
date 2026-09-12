// Regenerates public/robots.txt and public/sitemap.xml from VITE_SITE_URL
// so the domain only needs to be set once (in .env). Runs automatically
// before every build via the "prebuild" npm script.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))

function loadSiteUrl() {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL
  const envPath = join(root, '.env')
  if (existsSync(envPath)) {
    const match = readFileSync(envPath, 'utf-8').match(/^VITE_SITE_URL=(.+)$/m)
    if (match) return match[1].trim()
  }
  return 'https://example.com'
}

const siteUrl = loadSiteUrl().replace(/\/+$/, '')

writeFileSync(
  join(root, 'public/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)

writeFileSync(
  join(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
)

console.log(`SEO files generated for ${siteUrl}`)
