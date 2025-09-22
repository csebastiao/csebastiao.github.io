import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans], // can add new font in global.css downloading them from Google Fonts for instance
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        neutral: {
          100: "#FFFCF0ff", // light header
          300: "#FFFCF0ff", // light main background
          900: "#100F0F", // dark header
        },
        slate: {
          900: "#100F0F" // dark main background
        },
        orange: {
          300: "#f5bf1dff", // light tag color
          500: "#AD8301", // dark tag color
        },
        cyan: {
          200: "#fce518ff", // light tag hover
          500: "#f5bf1dff", // dark tag hover
        },
        black: "#100F0F", // light bold text
        white: "#E6E4D9", // dark bold text
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// Still have to find how to change color of hovering symbols and hyperref