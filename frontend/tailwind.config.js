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
        textBase: "#aaa",
      },
      backgroundColor: {
        bg: "#191B24",
        bg2: "#282B3A",
        bg3: "#2F3346",
        bg4: "#3E435C",
        bg5: "#535D8E",
        footer: "#0F111A",
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient-left": {
          "-webkit-mask-image":
            "linear-gradient(90deg, transparent 0, black 30%, black)",
          "mask-image":
            "linear-gradient(90deg, transparent 0, black 30%, black)",
        },
        ".mask-liner-gradiant": {
          "-webkit-mask-image":
            "linear-gradient(180deg, black -10%, rgba(0, 0, 0, .1))",
          "mask-image":
            "linear-gradient(180deg, black -10%, rgba(0, 0, 0, .1))",
        },
        ".mask-image": {
          "--webkit-mask-image":
            "linear-gradient(0deg, transparent 0, black 60px)",
          "mask-image": "linear-gradient(0deg, transparent 0, black 60px)",
        },
        ".mask-image-event": {
          "--webkit-mask-image": "linear-gradient(0deg, transparent 0, black)",
          "mask-image": "linear-gradient(0deg, transparent 0, black)",
        },
      });
    },
  ],
};
