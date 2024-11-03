/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { 
        'inset-lg': 'inset 0 4px 6px rgba(5, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

