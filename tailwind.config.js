/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gradientColorStops: {
        'black-gradient-start': 'rgba(0, 0, 0, 0.3)', // Black with 80% opacity
        'black-gradient-end': 'rgba(0, 0, 0, 0.45)',  // Black with 95% opacity
      },
      backgroundImage: {
        "mushroom": "url('/images/globalImages/mushroomBig.png')",
      },
      screens: {
        "xmd": "750px",
        "md": "1050px",
      },
      fontSize: {
        xs: '0.75rem',
        base: '1rem',
        xl: '1.375rem',
        "2xl": "1.75rem",
        "3xl": "2.375rem",
        "4xl": "3.188rem",
        "5xl": "4.188rem",
      },
      backgroundColor: {
        "gray-600": "hsla(0, 0%, 17%, 1)",
        "gray-500": "hsla(0, 0%, 23%, 1)",
        "gray-400": "hsla(60, 0%, 52%, 1)",
        "white": "hsla(0, 0%, 100%, 1)",
        "purple": "hsla(266, 100%, 67%, 1)",
        "gray-treansparent": "hsla(0, 0%, 23%, 0.7)",
        "blue-600": "hsla(239, 100%, 73%, 1)"
      },
      colors: {
        "gray-600": "hsla(0, 0%, 23%, 1)",
        "purple": "hsla(266, 100%, 67%, 1)",
        "gray-paper": "#CCC"
      },
 
    },
  },
  plugins: [],
}
