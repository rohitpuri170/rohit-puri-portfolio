import SectionHeading from './SectionHeading'
import TechTag from './TechTag'
import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content">
        <SectionHeading
          index="Skills"
          title="What I work with"
          description="Grouped by where each tool fits into a full-stack Java application. Java and Spring Boot are where I spend most of my time."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => {
            const isBackend = group.label === 'Backend'
            return (
              <Reveal
                key={group.label}
                delay={i * 0.06}
                className={`rounded-md p-6 ${
                  isBackend
                    ? 'border border-amber-dim/70 bg-amber/[0.04] md:col-span-2'
                    : 'border border-edge'
                }`}
              >
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <h3 className="font-display text-sm text-ink">{group.label}</h3>
                  {isBackend && (
                    <span className="font-mono text-[10px] text-amber border border-amber-dim rounded-sm px-1.5 py-0.5">
                      primary focus
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <TechTag key={skill} tone={isBackend ? 'amber' : 'default'}>
                      {skill}
                    </TechTag>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
