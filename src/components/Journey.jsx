import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { journey } from '../data/journey'

export default function Journey() {
  return (
    <section className="py-24 md:py-32 border-t border-edge">
      <div className="container-content">
        <SectionHeading title="How I got here" description="From first-year fundamentals to full-stack, freelance work." />

        <div className="grid md:grid-cols-5 gap-8 md:gap-6">
          {journey.map((step, i) => (
            <Reveal key={step.year} delay={i * 0.08} className="relative">
              <div className="flex md:flex-col items-start gap-4 md:gap-3">
                <span className="relative shrink-0 flex md:flex-col items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber shrink-0" />
                </span>
                <div>
                  <span className="font-mono text-sm text-amber block mb-1.5">{step.year}</span>
                  <p className="text-sm text-muted leading-relaxed">{step.text}</p>
                </div>
              </div>
              {i < journey.length - 1 && (
                <span className="hidden md:block absolute top-[5px] left-full w-6 h-px bg-edge2 -translate-x-3" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
