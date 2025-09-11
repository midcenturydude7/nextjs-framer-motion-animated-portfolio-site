/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px", // modern small phones
      sm: "480px", // larger phones
      md: "768px", // tablets / phablets
      lg: "1024px", // small laptops
      xl: "1280px", // desktops
      "2xl": "1536px",
      "3xl": "1750px",
      // Useful raw media feature variants
      landscape: { raw: "(orientation: landscape)" },
      portrait: { raw: "(orientation: portrait)" },
      coarse: { raw: "(pointer: coarse)" }, // touch-first
      fine: { raw: "(pointer: fine)" }, // mouse/trackpad
      motionOK: { raw: "(prefers-reduced-motion: no-preference)" },
      motionReduce: { raw: "(prefers-reduced-motion: reduce)" },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {},
  },

  plugins: [],
};
