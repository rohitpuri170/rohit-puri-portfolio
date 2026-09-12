import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content">
        <SectionHeading index="Services" title="What I do" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-edge border border-edge rounded-md overflow-hidden">
          {services.map((s, i) => (
            <Reveal
              key={s.number}
              delay={(i % 3) * 0.06}
              className="group bg-bg p-6 md:p-7 transition-colors duration-300 hover:bg-surface"
            >
              <span className="font-mono text-xs text-dim group-hover:text-amber transition-colors duration-300">
                {s.number}
              </span>
              <h3 className="font-display text-base text-ink mt-3 mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
