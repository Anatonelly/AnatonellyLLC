const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Anatonelly: {
          Primary: '#0C0341',
          Secundary: '#0a0129',
        },
      },
      screens: {
        xxs: '280px',
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        AnatonellyLLC: "url('/AnatonellyLLC/aboutUsLLC.jpg')",
      },
      dropShadow: {
        '2xl': '0 0px 15px rgba(255,255,255, 0.50)',
        '3xl': '0 0px 25px rgba(255,255,255, 0.50)',
        '4xl': '0 0px 30px rgba(255,255,255, 0.50)',
      },
      keyframes: {
        dropShadowPulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0px 5px rgba(255,255,255, 1))',
          },
          '50%': {
            transform: 'scale(1.2)',
            filter: 'drop-shadow(0 0px 40px rgba(255,255,255, 1))',
          },
        },
      },
      animation: {
        dropShadowPulse: 'dropShadowPulse 3s infinite',
      },
    },
  },
  plugins: [],
};
