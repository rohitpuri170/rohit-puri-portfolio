// Lightweight abstract visuals that hint at each project's domain
// without pretending to be real application screenshots.

function Frame({ children }) {
  return (
    <div className="relative h-40 md:h-48 rounded-sm border border-edge bg-surface2 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-[0.18]" aria-hidden="true" />
      <svg
        viewBox="0 0 400 220"
        className="relative w-full h-full"
        aria-hidden="true"
      >
        {children}
      </svg>
    </div>
  )
}

function Ecommerce() {
  return (
    <Frame>
      {/* product grid */}
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={30 + col * 60}
            y={30 + row * 60}
            width="44"
            height="44"
            rx="4"
            className="fill-surface stroke-edge2"
            strokeWidth="1.5"
          />
        )),
      )}
      {/* cart */}
      <g transform="translate(255,55)" className="stroke-amber" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0h16l16 68h84" />
        <path d="M16 0l12 46h96l14-38H40" />
        <circle cx="46" cy="96" r="9" className="fill-amber stroke-none" />
        <circle cx="106" cy="96" r="9" className="fill-amber stroke-none" />
      </g>
      <rect x="255" y="150" width="120" height="10" rx="5" className="fill-edge2" />
      <rect x="255" y="168" width="80" height="10" rx="5" className="fill-edge2" />
    </Frame>
  )
}

function Kanban() {
  const cols = [
    { x: 24, items: [26, 40, 18] },
    { x: 154, items: [32, 20] },
    { x: 284, items: [22, 30, 34] },
  ]
  return (
    <Frame>
      {cols.map((col, i) => (
        <g key={i}>
          <rect x={col.x} y="20" width="100" height="180" rx="6" className="fill-surface stroke-edge2" strokeWidth="1.5" />
          {col.items.map((h, j) => {
            const y = 34 + col.items.slice(0, j).reduce((acc, v) => acc + v + 12, 0)
            return (
              <rect
                key={j}
                x={col.x + 10}
                y={y}
                width="80"
                height={h}
                rx="4"
                className={i === 0 && j === 0 ? 'fill-amber/20 stroke-amber' : 'fill-bg stroke-edge2'}
                strokeWidth="1.5"
              />
            )
          })}
        </g>
      ))}
    </Frame>
  )
}

function Healthcare() {
  return (
    <Frame>
      <rect x="30" y="26" width="150" height="168" rx="8" className="fill-surface stroke-edge2" strokeWidth="1.5" />
      <rect x="48" y="46" width="70" height="10" rx="5" className="fill-edge2" />
      <rect x="48" y="66" width="110" height="8" rx="4" className="fill-edge2" />
      <rect x="48" y="82" width="90" height="8" rx="4" className="fill-edge2" />
      <g className="stroke-amber" strokeWidth="2">
        <line x1="48" y1="150" x2="66" y2="150" />
        <line x1="66" y1="150" x2="74" y2="120" />
        <line x1="74" y1="120" x2="86" y2="168" />
        <line x1="86" y1="168" x2="96" y2="150" />
        <line x1="96" y1="150" x2="158" y2="150" />
      </g>
      <g transform="translate(230,60)">
        <circle cx="60" cy="60" r="58" className="fill-surface stroke-edge2" strokeWidth="1.5" />
        <path
          d="M60 30v60M30 60h60"
          className="stroke-amber"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>
    </Frame>
  )
}

function Logistics() {
  return (
    <Frame>
      <path
        d="M20 170 C 90 60, 170 190, 240 90 S 360 40, 380 60"
        className="stroke-edge2"
        strokeWidth="2"
        strokeDasharray="6 8"
        fill="none"
      />
      {[
        [20, 170],
        [150, 130],
        [240, 90],
        [380, 60],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i === 3 ? 8 : 6}
          className={i === 3 ? 'fill-amber' : 'fill-edge2'}
        />
      ))}
      <g transform="translate(150,150)" className="stroke-amber" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="46" height="30" rx="3" />
        <path d="M46 12h20l12 14v4H46z" />
        <circle cx="14" cy="38" r="7" className="fill-bg" />
        <circle cx="64" cy="38" r="7" className="fill-bg" />
      </g>
    </Frame>
  )
}

const visuals = {
  ecommerce: Ecommerce,
  kanban: Kanban,
  healthcare: Healthcare,
  logistics: Logistics,
}

export default function ProjectVisual({ type }) {
  const Visual = visuals[type]
  if (!Visual) return null
  return <Visual />
}
