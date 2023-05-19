/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/sintra.jpg')",
        cloud: 'url("/images/cloud.png")',
        mountain: 'url("/images/sintra2.png")',
        blogBg:
          "linear-gradient(#090c1ad8, #090c1ad8), url('/images/mountain5.png')",
        teamBg: 'url("/images/sintra5.jpg")',
      },

      gridTemplateColumns: {
        team: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
