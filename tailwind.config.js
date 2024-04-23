/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-beige00": "#fefefb",
        "brand-beige10": "#f7f6e8",
        "brand-turquoise00": "#e6fafe",
        "brand-turquoise20": "#b4f1fd",
        "brand-turquoise50": "#69e3fc",
        "brand-yellow40": "#ffea80",
        "brand-yellow100": "#e5c000",
        "brand-orange70": "#ff7733",
        "c-grey00": "#ffffff",
        "c-grey20": "#cccccc",
        "c-grey40": "#999999",
        "c-grey60": "#666666",
        "c-grey80": "#333333",
        "c-grey90": "#181818",
        "c-grey100": "#000000",
      },
    },
  },
  plugins: [],
};
