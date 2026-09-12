import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'
import TechTag from './TechTag'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, featured = false }) {
  const isPlaceholder = (url) => !url || url === '#'
  const inProgress = project.status === 'In progress'

  return (
    <div
      className={`group rounded-md border transition-colors duration-300 ${
        featured
          ? 'border-amber-dim/70 bg-surface hover:border-amber'
          : 'border-edge bg-surface/60 hover:border-edge2'
      } p-6 md:p-8 flex flex-col ${featured ? 'lg:flex-row lg:items-start lg:gap-10' : ''}`}
    >
      <div className={featured ? 'lg:w-[45%]' : ''}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-dim">{project.number}</span>
          <span
            className={`font-mono text-[11px] px-2 py-0.5 rounded-sm border ${
              inProgress ? 'border-amber-dim text-amber bg-amber/10' : 'border-edge2 text-dim'
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="mt-4 transition-transform duration-300 group-hover:-translate-y-0.5">
          <ProjectVisual type={project.visual} />
        </div>

        <h3 className={`font-display text-ink mt-5 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {project.name}
        </h3>
        <p className="text-sm text-amber mt-1">{project.category}</p>
        <p className="text-sm text-muted leading-relaxed mt-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-6">
          <a
            href={project.github}
            target={isPlaceholder(project.github) ? undefined : '_blank'}
            rel="noreferrer"
            aria-disabled={isPlaceholder(project.github)}
            className={`inline-flex items-center gap-2 text-sm ${
              isPlaceholder(project.github)
                ? 'text-dim cursor-default'
                : 'text-ink hover:text-amber transition-colors duration-200'
            }`}
            onClick={(e) => isPlaceholder(project.github) && e.preventDefault()}
          >
            <GithubIcon size={16} />
            {isPlaceholder(project.github) ? 'Repo coming soon' : 'View code'}
          </a>
          <a
            href={project.demo}
            target={isPlaceholder(project.demo) ? undefined : '_blank'}
            rel="noreferrer"
            aria-disabled={isPlaceholder(project.demo)}
            className={`inline-flex items-center gap-2 text-sm ${
              isPlaceholder(project.demo)
                ? 'text-dim cursor-default'
                : 'text-ink hover:text-amber transition-colors duration-200'
            }`}
            onClick={(e) => isPlaceholder(project.demo) && e.preventDefault()}
          >
            <ExternalLink size={16} />
            {isPlaceholder(project.demo) ? 'Demo coming soon' : 'Live demo'}
          </a>
        </div>
      </div>

      <div className={featured ? 'lg:w-[55%] mt-8 lg:mt-0' : 'mt-6'}>
        <p className="font-display text-sm text-ink mb-3">Key features</p>
        <ul className={`grid ${featured ? 'sm:grid-cols-2' : ''} gap-x-6 gap-y-2 text-sm text-muted`}>
          {project.features.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="text-dim mt-[7px] w-1 h-1 rounded-full bg-dim shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
