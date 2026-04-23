/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        atenas: {
          azul: '#1D4ED8',
          'azul-deep': '#0A1F4D',
          'azul-darker': '#050F2D',
          dorado: '#F4A100',
          'dorado-soft': '#C9A961',
        },
        bg: {
          DEFAULT: '#FAFAF7',
          card: '#FFFFFF',
        },
        text: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        'container': '1280px',
        'container-tight': '1040px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'pulse-soft': 'pulseSoft 2s infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(244, 161, 0, 0.6)' },
          '50%': { opacity: '0.6', boxShadow: '0 0 0 8px rgba(244, 161, 0, 0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
