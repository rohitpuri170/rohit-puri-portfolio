import Reveal from './Reveal'

export default function SectionHeading({ index, title, description, align = 'left' }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      <div className={`flex items-baseline gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        {index && <span className="font-mono text-sm text-dim">{index}</span>}
        <h2 className="text-3xl md:text-[2.5rem] leading-[1.15] font-semibold text-ink tracking-tight">
          {title}
        </h2>
      </div>
      {description && (
        <p className={`mt-4 text-muted leading-relaxed max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
