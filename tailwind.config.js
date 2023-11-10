/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        headline: "clamp(1.75rem, 4vw + 1rem, 2.25rem)",
        body: "clamp(0.875rem, 2vw + 0.5rem, 1rem)",
        smallHeadline: "clamp(1rem, 2.5vw + 0.5rem, 1.25rem)",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff887",
          300: "#ffec43",
          400: "#ffd803",
          500: "#efc103",
          600: "#ce9500",
          700: "#a46a04",
          800: "#88530b",
          900: "#734410",
          950: "#432305",
        },
        secondary: {
          50: "#f1f2fc",
          100: "#e5e9fa",
          200: "#d0d5f5",
          300: "#b3baee",
          400: "#9597e4",
          500: "#7f7bd9",
          600: "#6d61cb",
          700: "#5e50b2",
          800: "#4d4390",
          900: "#413c73",
          950: "#272343",
        },
        neutral: {
          50: "#f9f9f9",
          100: "#ececec",
          200: "#d9d9d9",
          300: "#bfbfbf",
          400: "#a7a7a7",
          500: "#8b8b8b",
          600: "#707070",
          700: "#595959",
          800: "#424242",
          900: "#2c2c2c",
        },

        warning: {
          50: "#fdf3f3",
          100: "#fde3e3",
          200: "#fccccc",
          300: "#f8a9a9",
          400: "#f27777",
          500: "#e53e3e",
          600: "#d32f2f",
          700: "#b22323",
          800: "#932121",
          900: "#7a2222",
          950: "#420d0d",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "wizard-md": "0px 4px 10px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
