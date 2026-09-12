/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0D12',
        surface: '#10141B',
        surface2: '#161B24',
        edge: '#222A35',
        edge2: '#2C3542',
        ink: '#E7EAEE',
        muted: '#8D96A5',
        dim: '#7A8494',
        amber: {
          DEFAULT: '#D9954F',
          soft: '#C9853F',
          dim: '#8A6538',
        },
        spring: {
          DEFAULT: '#5FA050',
          soft: '#4F8A42',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
      },
      backgroundImage: {
        grid: 'linear-gradient(#1A2029 1px, transparent 1px), linear-gradient(90deg, #1A2029 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
