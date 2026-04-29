/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // For your HTML file
    './src/**/*.{js,ts,jsx,tsx}', // For React component files (JS, JSX, TS, and TSX)
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--e-global-color-primary)', // Use the custom CSS variable here
      },
    },
  },
  plugins: [],
}

