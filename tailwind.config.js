/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        't-frame':  'url(frame.svg)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}