import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32 border-t border-edge">
      <div className="container-content grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <SectionHeading index="About" title="A bit about me" />

        <Reveal delay={0.1} className="max-w-2xl">
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              I'm a final-year BS Computer Science student at Sindh Madressatul Islam
              University in Karachi, focused on becoming a professional Java Full
              Stack Developer.
            </p>
            <p>
              I enjoy building complete software solutions — from backend APIs and
              database architecture to responsive frontend interfaces. My main
              technical focus includes Java, Spring Boot, REST APIs, SQL databases,
              React, JavaScript, authentication, and software development.
            </p>
            <p>
              Alongside academic learning and personal projects, I work on freelance
              software development projects involving full-stack applications, APIs,
              automation, OCR, web scraping, API integrations, CSV/Excel processing,
              and AI-assisted workflows.
            </p>
          </div>

          {/* backend / api / frontend relationship */}
          <div className="mt-8 rounded-md border border-edge p-5 md:p-6">
            <p className="font-mono text-xs text-dim mb-4">How the two sides connect</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 rounded-sm border border-amber-dim bg-amber/10 px-4 py-3">
                <p className="font-display text-sm text-ink">Java + Spring Boot</p>
                <p className="text-xs text-muted mt-0.5">Backend, database, auth</p>
              </div>
              <div className="flex items-center justify-center text-dim px-1 rotate-90 sm:rotate-0">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
                  <path d="M0 8h24M18 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 rounded-sm border border-edge2 bg-surface2 px-4 py-3 text-center">
                <p className="font-mono text-xs text-muted">REST API / JSON</p>
              </div>
              <div className="flex items-center justify-center text-dim px-1 rotate-90 sm:rotate-0">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
                  <path d="M0 8h24M18 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 rounded-sm border border-edge2 bg-surface2 px-4 py-3">
                <p className="font-display text-sm text-ink">React</p>
                <p className="text-xs text-muted mt-0.5">Interface, state, UX</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 pt-5">
            <div className="rounded-md border border-edge p-5">
              <p className="font-display text-sm text-ink mb-1">Based in</p>
              <p className="text-sm text-muted">Karachi, Pakistan</p>
            </div>
            <div className="rounded-md border border-edge p-5">
              <p className="font-display text-sm text-ink mb-1">Currently</p>
              <p className="text-sm text-muted">Final-year CS student &amp; freelance developer</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
