import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { education as edu } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <SectionHeading index="Education" title="Academic background" />

        <Reveal delay={0.1} className="rounded-md border border-edge p-6 md:p-8 max-w-2xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-lg text-ink">{edu.degree}</h3>
            <span className="font-mono text-xs text-dim">{edu.period}</span>
          </div>
          <p className="text-sm text-amber mt-1">{edu.school}</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-sm text-muted">{edu.location}</p>
            <span className="inline-flex items-center rounded-sm border border-edge2 bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted">
              {edu.status}
            </span>
          </div>

          <div className="mt-6 pt-6 border-t border-edge">
            <p className="font-display text-sm text-ink mb-3">Relevant areas</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
              {edu.areas.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="text-dim mt-[7px] w-1 h-1 rounded-full bg-dim shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

