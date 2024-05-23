/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fredoka: ["Fredoka", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      airstrike: ["Airstrike"],
    },
    colors: {
      transparent: "transparent",
      mage: {
        orange: "#FF9437",
        blue: "#132777",
        pink: "#E14CB3",
      },
      purple: {
        1: "#493187",
        2: "#6F56B4",
        3: "#713E79",
        4: "#1B181F",
      },
      pink: {
        1: "#E553A8",
      },
      orange: {
        primary: {
          1: "#D79273",
          2: "#F77F5A",
          3: "#FE874F",
          4: "#FFC291",
          5: "#FFE1C9",
        },
        hover: {
          1: "#AD755C",
          2: "#C76142",
          3: "#CC6C3F",
          4: "#CD9B73",
          5: "#C9AF9A",
        },
        pressed: {
          1: "#815846",
          2: "#9C4B32",
          3: "#7C3F22",
        },
      },
      red: {
        1: "#FF4646",
      },
      dark: "#1E1E1E",
      light: "#FFFFFF",
    },
    extend: {
      backgroundImage: () => ({
        "vertical-gta":
          "linear-gradient(90deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "horizontal-gta":
          "linear-gradient(180deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "transparent-white-1/2":
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "transparent-white-1":
          "linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
        "transparent-white-2":
          "linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 75%)",
        "grayscale":
          "linear-gradient(#1E1E1E 0%, #9E9E9E 100%)",
        "purple-grad-1":
          "linear-gradient(180deg, #6F56B4 0%, #493187 100%)",
        "purple-grad-2":
          "linear-gradient(180deg, #6F56B4 0%, #713E79 100%)",
        "purple-grad-3":
          "linear-gradient(180deg, #6F56B4 0%, #6F56B4 100%)",
        "purple-white":
          "linear-gradient(#483187 0%, #6F56B4 50%, #A38EDB 100%)",
        "orange-white":
          "linear-gradient(#FB8A4A 0%, #FFC290 50%, #FFE1CA 100%)",
        "brown-grad":
          "linear-gradient(180deg, #FFC291 0%, #D79273 100%)",
        "orange-grad":
          "linear-gradient(180deg, #F77F5A 0%, #FFC291 100%)",
        "skin-grad":
          "linear-gradient(180deg, #FFE1C9 0%, #FFC291 100%)",
      }),
      dropShadow: {
        "glow-white-2": [
          "0 0px 20px rgba(255,255, 255, 1)",
          "0 0px 30px rgba(255, 255,255, 0.9)",
        ],
        "glow-white-1": "0 0px 10px rgba(255,255, 255, 1)",
        "glow-white-full": [
          "0 0px 20px rgba(255,255, 255, 1)",
          "0 0px 30px rgba(255, 255,255, 0.9)",
          "0 0px 40px rgba(255, 255,255, 0.8)",
          "0 0px 50px rgba(255, 255,255, 0.7)",
        ],
      },
    },
  },
  plugins: [],
};
