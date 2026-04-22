/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#1A3C6E",   // Deep navy blue
        accent:     "#2E6DB4",   // Electric blue
        background: "#F8FAFF",   // Very light blue-white
        darkText:   "#1A1A2E",   // Dark text
        lightText:  "#555577",   // Light text
        white:      "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbar: "0 2px 16px 0 rgba(26, 60, 110, 0.08)",
      },
    },
  },
  plugins: [],
};
