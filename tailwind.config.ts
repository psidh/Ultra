import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0px)',
          },

          '50%': {
            transform: 'translateX(calc(600px - 50%))',
          },

          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        slide: 'slide 4s ease infinite',
      },
    },
  },
  plugins: [],
}
export default config
