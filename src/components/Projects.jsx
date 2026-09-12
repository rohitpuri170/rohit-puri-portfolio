import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { projects } from '../data/projects'
import { site } from '../data/config'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content">
        <SectionHeading
          index="Projects"
          title="Featured projects"
          description="A mix of full-stack systems I'm building to put Java, Spring Boot, and React into practice. Repos and demos go live as each one ships."
        />

        <div className="space-y-6">
          <Reveal>
            <ProjectCard project={featured} featured />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-muted">
            More on GitHub —{' '}
            <a href={site.github} target="_blank" rel="noreferrer" className="text-ink hover:text-amber transition-colors duration-200">
              {site.github.replace('https://', '')}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
