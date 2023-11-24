/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        vermelho: "var(--primary-color)",
      },
      fontSize: {
        '1x1': '1.85rem',
        '2x1': '3rem',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        'work-sans': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

