/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'ml-2', 'ml-4', 'ml-6', 'ml-8', // Ajouter les valeurs d'espacement que vous utilisez dynamiquement
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontSize: {
        'custom-l': '2rem',   
        'custom-xl': '2.5rem',  
      },
    },
  },
  plugins: [],
}

