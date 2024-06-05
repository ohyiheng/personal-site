const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'primary': {
        100: "#f1ece9",
        200: "#ebe3dd",
        300: "#e4d9d2",
        400: "#ddd0c7",
        500: "#b1a69f",
        600: "#857d77",
        700: "#585350",
        800: "#332c27",
        900: "#161412"
      },
      'secondary': {
        100: "#dee3dc",
        200: "#bcc7b9",
        300: "#9baa95",
        400: "#798e72",
        500: "#58724f",
        600: "#465b3f",
        700: "#35442f",
        800: "#232e20",
        900: "#121710"
      },
      tertiary: {
        100: "#dde7ef",
        200: "#bbcfdf",
        300: "#9ab6cf",
        400: "#789ebf",
        500: "#5686af",
        600: "#456b8c",
        700: "#345069",
        800: "#223646",
        900: "#111b23"
      },
      'black': '#000',
      'white': '#fff',
      'gray': colors.gray
    }
  },
  plugins: [],
}

