/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(65.3deg, #0575E6 6.93%, #021B79 89.92%)",
      },
      colors: {
        paleBlue: "#DBE9FE",
        customGrey: "#0000001F",
        mediumGray: "#8F8F8F",
      },
    },
  },
  plugins: [],
};
