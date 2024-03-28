/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#ADC178',
        'light-green': '#DDE5B6',
        'brown': '#A98467',
        'dark-brown': '#6C584C',
        'cream': '#F0EAD2',
      },
      boxShadow: {
        '2xl': '3px 3px 0 6px rgba(169, 132, 103, 1)',  
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },   
      height: {
        '128': '32rem',
      }   
    },
  },
  plugins: [],
}

