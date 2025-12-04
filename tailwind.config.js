/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         boxShadow: {
        '2xs': '0 1px 0 rgb(0 0 0 / 0.05)',   // your custom shadow
      },
    },
  },
  plugins: [],
}