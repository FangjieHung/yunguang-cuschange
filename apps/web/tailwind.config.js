const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem'], // 12px
      sm: ['0.875rem'], // 14px
      base: ['1rem'], // 16px
      lg: ['1.125rem'], // 18px
      xl: ['1.25rem'], // 20px
      '2xl': ['1.5rem'], // 24px
      '3xl': ['1.875rem'], // 30px
      '4xl': ['2.25rem'], // 36px
      '5xl': ['3rem'], // 48px
      '6xl': ['3.75rem'], // 60px
      '7xl': ['4.5rem'], // 72px
      '8xl': ['6rem'], // 96px
      '9xl': ['8rem'], // 128px
    },

    minHeight: ({ theme }) => ({
      ...theme('spacing'),
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),

    listStyleType: {
      none: 'none',
      circle: 'circle',
      disc: 'disc',
    },
    extend: {
      colors: {
        'primary-50': '#F1F2F6',
        'primary-100': '#F1EDFC',
        'primary-200': '#E0DDF7',
        'primary-300': '#B6ACE3',
        'primary-400': '#8D81D6',
        'primary-500': '#6658CA',
        'primary-600': '#4840A3',
        'primary-700': '#2F2A7D',
        'primary-800': '#1A1957',
        'primary-900': '#0E0E30',
        'primary-gray': '#787486',
      },
      screens: {
        xs: '321px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
};
