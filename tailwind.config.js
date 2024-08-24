/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4B6BFB',
        'primary-bg': {
          light: 'hsl(240, 2%, 90%)',
          dark: 'hsl(240, 2%, 12%)'
        },
        'secondary-bg': {
          light: 'white',
          dark: '#2b2b2c'
        },
        'primary-color': {
          light: 'black',
          dark: 'white'
        },
        'highlight': {
          light: 'tomato',
          dark: '#ffdb70'
        },
        'secondary-color': {
          light: '#696A75',
          dark: '#9f9f9f'
        },
        'border-color': {
          light: 'hsl(240, 2%, 80%)',
          dark: '#383838'
        },
        'hover': {
          light: '#ccc',
          dark: '#373737'
        },
        'linear-bg': {
          light: 'linear-gradient(135deg, red, green)',
          dark: 'linear-gradient(135deg, #232324, #202022)'
        }
      },
      animation: {
        'input-border': 'input-border 10s ease-in',
      },
      keyframes: {
        'input-border': {
          '0%': { height: '0' },
          '40%': { height: '40px', right: '100%' },
          '100%': { right: '0' }
        }
      }
    },
  },
  plugins: [],
};
