import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { site } from '../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-edge py-10">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm text-ink">{site.name}</p>
          <p className="text-xs text-dim mt-0.5">{site.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-ink transition-colors duration-200">
            <GithubIcon size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-ink transition-colors duration-200">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="text-muted hover:text-ink transition-colors duration-200">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-dim">© {site.year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
