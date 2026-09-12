import { motion } from 'framer-motion'
import { ArrowDownToLine } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { site } from '../data/config'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="container-content relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="flex items-center gap-2 font-mono text-xs text-dim tracking-wide uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            {site.location} — Final-year CS student
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-[4rem] leading-[1.02] font-semibold text-ink tracking-tight text-balance"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-display text-2xl md:text-[1.75rem] text-amber tracking-tight"
          >
            Java Full Stack Developer
          </motion.p>

          <motion.p variants={item} className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            I build full-stack web applications, secure backend APIs, database-driven
            systems, and automation solutions using Java, Spring Boot, React, and
            modern web technologies.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-sm bg-amber px-5 py-3 text-sm font-medium text-bg hover:bg-amber-soft transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-edge2 px-5 py-3 text-sm font-medium text-ink hover:border-amber hover:text-amber transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted hover:text-ink transition-colors duration-200"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted hover:text-ink transition-colors duration-200"
            >
              <LinkedinIcon size={20} />
            </a>
            <span className="w-px h-5 bg-edge2" />
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-200"
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          <div className="rounded-md border border-edge bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-edge bg-surface2">
              <span className="w-2.5 h-2.5 rounded-full bg-edge2" />
              <span className="w-2.5 h-2.5 rounded-full bg-edge2" />
              <span className="w-2.5 h-2.5 rounded-full bg-edge2" />
              <span className="ml-3 font-mono text-xs text-dim">Developer.java</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              <code>
                <span className="text-spring">@RestController</span>
                {'\n'}
                <span className="text-dim">public</span> <span className="text-dim">class</span>{' '}
                <span className="text-amber">Developer</span> {'{'}
                {'\n\n'}
                {'  '}
                <span className="text-dim">private final</span> String name ={' '}
                <span className="text-spring">"Rohit Puri"</span>;{'\n'}
                {'  '}
                <span className="text-dim">private final</span> String role ={' '}
                <span className="text-spring">"Java Full Stack Developer"</span>;
                {'\n\n'}
                {'  '}
                <span className="text-dim">private final</span> List{'<'}String{'>'} stack = List.of(
                {'\n'}
                {'    '}
                <span className="text-spring">"Java"</span>, <span className="text-spring">"Spring Boot"</span>,{' '}
                <span className="text-spring">"React"</span>, <span className="text-spring">"PostgreSQL"</span>
                {'\n'}
                {'  '});
                {'\n\n'}
                {'  '}
                <span className="text-amber">@GetMapping</span>(<span className="text-spring">"/status"</span>)
                {'\n'}
                {'  '}
                <span className="text-dim">public</span> String status() {'{'}
                {'\n'}
                {'    '}
                <span className="text-dim">return</span>{' '}
                <span className="text-spring">"Building. Shipping. Learning."</span>;{'\n'}
                {'  '}
                {'}'}
                {'\n'}
                {'}'}
                <span className="inline-block w-2 h-4 bg-amber ml-1 animate-blink align-middle" />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
