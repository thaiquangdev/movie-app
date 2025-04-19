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
      clipPath: {
        customLeftShape:
          "polygon(5.761% 100%, 94.239% 100%, 94.239% 100%, 95.174% 99.95%, 96.06% 99.803%, 96.887% 99.569%, 97.642% 99.256%, 98.313% 98.87%, 98.889% 98.421%, 99.357% 97.915%, 99.706% 97.362%, 99.925% 96.768%, 100% 96.142%, 100% 3.858%, 100% 3.858%, 99.913% 3.185%, 99.662% 2.552%, 99.263% 1.968%, 98.731% 1.442%, 98.08% .984%, 97.328% .602%, 96.488% .306%, 95.577% .105%, 94.609% .008%, 93.6% .024%, 5.121% 6.625%, 5.121% 6.625%, 4.269% 6.732%, 3.468% 6.919%, 2.728% 7.178%, 2.058% 7.503%, 1.467% 7.887%, .962% 8.323%, .555% 8.805%, .253% 9.326%, .065% 9.88%, 0 10.459%, 0 96.142%, 0 96.142%, .075% 96.768%, .294% 97.362%, .643% 97.915%, 1.111% 98.421%, 1.687% 98.87%, 2.358% 99.256%, 3.113% 99.569%, 3.94% 99.803%, 4.826% 99.95%, 5.761% 100%)",
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
      });
    },
  ],
};
