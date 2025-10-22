/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
      },
    },
    screens: {
      xs: "475px",
      "3xl": "1792px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
