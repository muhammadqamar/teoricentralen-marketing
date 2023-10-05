const typographyPlugin = require('@tailwindcss/typography')
const formsPlugin = require('@tailwindcss/forms')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [typographyPlugin, formsPlugin],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        dark: '#12263F',
        primary: {
          DEFAULT: '#0094ff',
          dark: '#007BE6',
        },
        success: {
          DEFAULT: '#5FC67A',
          dark: '#46AD61',
        },
        danger: {
          DEFAULT: '#C74B4C',
          dark: '#AE3233',
        },
        star: '#F1C40F',
      },
      animation: {
        marquee: 'marquee 15000ms linear infinite',
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],

      },
    },
    keyframes: {
      marquee: {
        '100%': {
          transform: 'translateY(-50%)',
        },
      },
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
  },
}
