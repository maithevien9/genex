import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        md: `768px`,
        lg: `1024px`,
        xl: `1280px`,
        '2xl': `1563px`,
        '3xl': `1800px`,
        '4xl': `2300px`,
      },
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#E3E4E7',
          300: '#BABCC4',
          400: '#999BA8',
          500: '#707084',
          600: '#40404B',
          700: '#1F1F25',
        },
      },
    },
  },
  plugins: [],
};
export default config;
