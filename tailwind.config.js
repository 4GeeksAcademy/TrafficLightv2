/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [
      "bg-red-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",

      "bg-purple-950",
      "bg-green-950",
      "bg-red-950",
      "bg-orange-950",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
