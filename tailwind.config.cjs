/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        circle: "url('/src/assets/img/hero/bg.png')",
        cardsBg: "url('/src/assets/img/cards/bg.png')",
        video: "url('/src/assets/img/video/video.png')",
        contact: "url('/src/assets/img/contact/bg.png')",
      },
    },
  },
  plugins: [],
}
