import { motion } from 'framer-motion'

// Shared scroll-reveal wrapper so every section animates in consistently
// instead of hand-rolling variants per component. Respects
// prefers-reduced-motion via Framer Motion's built-in handling.
export default function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  )
}
