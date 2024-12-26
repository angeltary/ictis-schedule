import { Config } from 'tailwindcss'

export const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        default: 'ease-in-out',
      },
      transitionDuration: {
        default: '350ms',
      },
    },
  },
  plugins: [],
}

export default config
