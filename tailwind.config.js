/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: '#FBFBFB',
      accent: '#FEE85C',
    },
    },
  },
  plugins: [],
}

