export default function TechTag({ children, tone = 'default' }) {
  const tones = {
    default:
      'border-edge2 text-muted bg-surface2 hover:border-dim hover:text-ink',
    amber:
      'border-amber-dim text-amber bg-amber/10 hover:bg-amber/20 hover:border-amber',
  }
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-xs leading-none transition-colors duration-200 ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
