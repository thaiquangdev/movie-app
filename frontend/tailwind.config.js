/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD875",
        primaryHover: "#FFDE8A",
        primaryText: "#FFD875",
        borderColor: "#ffffff10",
        primaryButtonText: "#191B24",
      },
      backgroundColor: {
        bg: "#191B24",
        bg2: "#282B3A",
        bg3: "#2F3346",
        bg4: "#3E435C",
        bg5: "#535D8E",
        footer: "#0F111A",
      },
    },
  },
  plugins: [require("daisyui")],
};
