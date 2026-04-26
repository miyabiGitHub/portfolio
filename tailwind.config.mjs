/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          blue: '#4F8EF7',
          purple: '#A855F7',
          pink: '#EC4899',
          cyan: '#38BDF8',
        },
        dark: {
          900: '#000510',
          800: '#0A0E27',
          700: '#0D1133',
          600: '#111827',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'aurora-pulse': 'aurora-pulse 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'aurora-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow': {
          from: { boxShadow: '0 0 10px #4F8EF750, 0 0 20px #4F8EF730' },
          to: { boxShadow: '0 0 20px #A855F750, 0 0 40px #A855F730' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #4F8EF7, #A855F7, #EC4899)',
        'card-gradient': 'linear-gradient(135deg, #0A0E27, #0D1133)',
        'grid-pattern': 'linear-gradient(rgba(79, 142, 247, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 142, 247, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
};
