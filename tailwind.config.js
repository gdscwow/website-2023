/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: "#6A6A6A",
        lightblack: "rgb(49, 49, 49)",
        translucent: "rgba(1, 1, 1, 0.142)",
        pinkish: "#f582ae",
        navyblue: "#001858",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      corePlugins: {
        preflight: false,
      },
      fontFamily: {
        GoogleSans: ["Google-Sans", "sans-serif", "Helvetica", "Arial"],
      },
      backgroundImage: {
        home: "url('/Assets/BG/home.png')",
        about: "url('/Assets/BG/about.png')",
        team: "url('/Assets/BG/team.png')",
        management: "https://pixabay.com/get/g054eff88dcb7865573af3e92e6a2a20c8b95ad013a526f15e99d2b0deacde4964bcccc89fff4be5091526aed417c4eb8e8458eb7e81de02c37f82a202631638bbadfbd9b2cdfe952061a7382457fb157_640.jpg"
      },
    },
  },
  plugins: [],
};
