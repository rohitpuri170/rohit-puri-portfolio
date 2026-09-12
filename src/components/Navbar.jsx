import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site } from '../data/config'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur border-b border-edge' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16 md:h-[72px]">
        <a href="#home" className="font-display font-semibold text-ink tracking-tight">
          Rohit<span className="text-amber">.</span>Puri
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative text-sm transition-colors duration-200 py-1 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-0 right-0 -bottom-1 h-px bg-amber"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-sm border border-edge2 px-4 py-2 text-sm text-ink hover:border-amber hover:text-amber transition-colors duration-200"
        >
          Let's Talk
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-bg"
          >
            <motion.ul
              className="container-content flex flex-col gap-1 py-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.href ? 'true' : undefined}
                    className={`block py-3 text-lg border-b border-edge ${
                      active === l.href ? 'text-amber' : 'text-ink'
                    }`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } }}
                className="pt-6"
              >
                <a href={site.github} target="_blank" rel="noreferrer" className="text-muted">
                  GitHub — {site.github.replace('https://', '')}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
