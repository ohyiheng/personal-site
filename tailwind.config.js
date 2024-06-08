const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'primary': {
        100: "#f7f4f2",
        200: "#ebe3dd",
        300: "#e4d9d2",
        400: "#ddd0c7",
        500: "#b1a69f",
        600: "#857d77",
        700: "#585350",
        800: "#332c27",
        900: "#161412"
      },
      secondary: {
        100: "#d9e2d6",
        200: "#b2c5ac",
        300: "#8ca783",
        400: "#658a59",
        500: "#3f6d30",
        600: "#325726",
        700: "#26411d",
        800: "#192c13",
        900: "#0d160a"
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
      'white': '#fefefe',
      gray: {
        50: "#f9f9f9",
        100: "#ececec",
        150: "#dfdfdf",
        200: "#d2d2d2",
        250: "#c6c6c6",
        300: "#b9b9b9",
        350: "#acacac",
        400: "#9f9f9f",
        450: "#939393",
        500: "#7f7f7f",
        550: "#6c6c6c",
        600: "#606060",
        650: "#535353",
        700: "#464646",
        750: "#393939",
        800: "#2d2d2d",
        850: "#202020",
        900: "#131313",
        950: "#060606",
      }
    },
    fontFamily: {
      'sans': ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ['Gloock', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'display': ['Red Hat Display', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    }
  },
  plugins: [require('@tailwindcss/typography')],
}

