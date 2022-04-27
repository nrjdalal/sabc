module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ["'Anton'", 'sans-serif'],
        nunito: ["'Nunito'", 'sans-serif'],
      },
    },
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/line-clamp', '@tailwindcss/typography'],
}
