import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Journey />
          <Projects />
          <Education />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
