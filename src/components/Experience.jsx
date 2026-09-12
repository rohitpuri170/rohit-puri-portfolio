import SectionHeading from './SectionHeading'
import TechTag from './TechTag'
import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content">
        <SectionHeading index="Experience" title="Where I've worked" />

        <div className="space-y-10 max-w-3xl">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.08} className="relative pl-8 border-l border-edge2">
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-amber flex items-center justify-center">
                {job.period === 'Ongoing' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                )}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-ink">{job.role}</h3>
                <span className="font-mono text-xs text-dim">{job.period}</span>
              </div>
              <p className="text-sm text-amber mt-1">{job.org}</p>
              <ul className="mt-4 space-y-2 text-muted text-sm leading-relaxed">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-dim mt-[7px] w-1 h-1 rounded-full bg-dim shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <TechTag key={s}>{s}</TechTag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
