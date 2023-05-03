/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F252D",
      },
      backgroundImage: {
        "man-5": "url('/images/man-5.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        110: "110",
        120: "120",
      },
      keyframes: {
        bottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0.8" },
        },
        top: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        right: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        left: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(-90deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        bottom: "bottom 1s ease-in-out",
        top: "top 1s ease-in-out",
        right: "right 1s ease-in-out",
        left: "left 1s ease-in-out",
        opacity: "opacity 1s ease-in-out",
        opacity_fast: "opacity 350ms ease-in-out",
        rotate: "rotate 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
