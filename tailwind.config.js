/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fredoka: ["Fredoka", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      f57c00: "#f57c00",
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
        1: "#D79273",
        2: "#F77F5A",
        3: "#FE874F",
        4: "#FFC291",
        5: "#FFE1C9",
      },
      red: {
        1: "#FF4646",
      },
      dark: "#1E1E1E",
      light: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "blue-purple-orange": "linear-gradient(90deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "transparent-white-1": "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "transparent-white-2": "linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 75%)",
        "orange-gradient": "linear-gradient(180deg, #FB8A4A -42.77%, #FDA66D 28.61%, #FFE1CA 100%)",
        "navbar-select-gradient": "linear-gradient(180deg, #FBAD67 -17.65%, #FFFFFF 300%)"
      },
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
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        rotate: 'rotate 1s linear',
        slideIn: 'slideIn 0.5s forwards',
        slideOut: 'slideOut 0.5s forwards'
      },
    },
  },
  plugins: [],
};
