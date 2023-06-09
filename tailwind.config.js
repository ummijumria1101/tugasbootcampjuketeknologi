/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'primarycolor' : '#9B7241', //kuning
      'secondarycolor' : '#F1E1AA', //abu muda
      'txtprimary' : '#F1E1AA', //abu tua
      'txtsecondary' : '#F1E1AA', // hitam
      'txtbase' : '#1A1A1A',
      'sidecolor' : '#e0ad75',
      'hovercolor' : '#f5eac3',
      'buttoncolor' : '#ba8f5c',
      

    },
    extend: {},
  },
  plugins: [],
}
