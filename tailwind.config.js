/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        'btn-color': '#FFE0B3',
        
      },
    },
  },
  plugins: [require("daisyui")],
}
