/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackish': '#6A6A6A',
        'lightblack': 'rgb(49, 49, 49)',
        'translucent': 'rgba(1, 1, 1, 0.142)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      corePlugins: {
        preflight: false,
      },
      fontFamily: {
        'GoogleSans': ['Google-Sans', 'sans-serif', 'Helvetica', 'Arial'],
      },
      backgroundImage: {
        'home': "url('/Assets/BG/home.png')",
        'about': "url('/Assets/BG/about.png')",
        'team': "url('/Assets/BG/team.png')",
      }
    },
  },
  plugins: [],
}
