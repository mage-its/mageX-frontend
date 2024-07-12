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
      black: "#000",
      gray: {
        1: "#141414",
        2: "#3E3E3E",
        3: "#AFAFAF",
        4: "#828282",
        5: "#383838",
        6: "#494949",
      },
      white: "#ffffff",
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
          6: "#EC8562",
          7: "#CA4F14",
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
        2: "#FF4F4F",
      },
      dark: "#1E1E1E",
      light: "#FFFFFF",
      black: "#000000",
      transparent_black: "rgba(0, 0, 0, 0.8)",
      light_blue: "#2d8cfe",
    },
    extend: {
      screens: {
        // Custom screen size
        mobile: "300px",   // extra sm
        ipad: "768px",     // md
        desktop: "1280px", // xl
      },
      backgroundImage: {
        "diagonal-gta":
          "linear-gradient(135deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "vertical-gta":
          "linear-gradient(90deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "vertical-gta-reverse":
          "linear-gradient(270deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "horizontal-gta":
          "linear-gradient(180deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "transparent-white-1/2":
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "transparent-white-1":
          "linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
        "transparent-white-2":
          "linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 75%)",
        grayscale: "linear-gradient(#1E1E1E 0%, #9E9E9E 100%)",
        "purple-gradient":
          "linear-gradient(180deg, #483187 0%, #6F56B4 50%, #A38EDB 100%)",
        "purple-grad-1": "linear-gradient(180deg, #6F56B4 0%, #493187 100%)",
        "purple-grad-2": "linear-gradient(180deg, #6F56B4 0%, #713E79 100%)",
        "purple-grad-3": "linear-gradient(180deg, #6F56B4 0%, #6F56B4 100%)",
        "purple-grad-4":
          "linear-gradient(180deg, #16083D -4.01%, #210F53 45.03%, #463477 79.39%, #A38EDB 143.42%)",
        "purple-white":
          "linear-gradient(#483187 0%, #6F56B4 50%, #A38EDB 100%)",
        "purple-orange":
          "linear-gradient(180deg, #4F0430 -2.08%, #E553A8 5.84%, #F77F5A 19.04%, #F77F5A 61.28%, #E553A8 103.52%)",
        "orange-white":
          "linear-gradient(#FB8A4A 0%, #FFC290 50%, #FFE1CA 100%)",
        "brown-grad": "linear-gradient(180deg, #FFC291 0%, #D79273 100%)",
        "orange-grad": "linear-gradient(180deg, #F77F5A 0%, #FFC291 100%)",
        "orange-grad-2":
          "linear-gradient(180deg, #FB8A4A -42.77%, #FDA66D 28.61%, #FFE1CA 100%)",
        "orange-grad-3":
          "linear-gradient(246.26deg, #FF4646 16.72%, #FFE1C9 172.26%)",
        "orange-grad-4":
          "linear-gradient(180deg, #FB8A4A -42.77%, #FDA66D 28.61%, #FFE1CA 100%)",
        "white-orange":
          "linear-gradient(169.21deg, #FFFFFF 19.1%, #EFA264 121.73%)",
        "white-purple":
          "linear-gradient(179.15deg, #FFFFFF -3.62%, #FCD5EB 36.28%, #F8AAD7 75.06%, #410327 108.78%)",
        "skin-grad": "linear-gradient(180deg, #FFE1C9 0%, #FFC291 100%)",
        "orange-purple":
          "linear-gradient(181.25deg, #E553A8 -43.94%, #F77F5A 8.83%, #F77F5A 51.94%, #E553A8 99.51%)",
        "orange-purple-2":
          "linear-gradient(120.47deg, #FF4646 -4.81%, #493187 103.24%)",
        "navbar-select-gradient":
          "linear-gradient(180deg, #FBAD67 -17.65%, #FFFFFF 300%)",
        "blue-purple-orange":
          "linear-gradient(90deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "blue-purple-orange-1":
          "linear-gradient(90deg, #435ECF, 10%, #E24BB3, 50%, #FF9433 100%)",
        "blue-purple-orange-2":
          "linear-gradient(180deg, #435ECF, 10%, #E24BB3, 50%, #FF9433 100%)",
        "transparent_white":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))",
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
        "orange-outline": [
          "0px 0px 0px rgba(199,97,66,1)",
          "1px 1px 0px rgba(199,97,66,1)",
          "1px -1px 0px rgba(199,97,66,1)",
          "-1px 1px 0px rgba(199,97,66,1)",
          "1.5px 1.5px 0px rgba(199,97,66,1)",
          "1.5px -1.5px 0px rgba(199,97,66,1)",
          "-1px 1px 0px rgba(199,97,66,1)",
          "-1px -1px 0px rgba(199,97,66,1)",
          "0px 0px 2px rgba(199,97,66,1)",
        ],
        "purple-outline": [
          "0px 0px 0px rgba(58, 13, 73, 1)",
          "1px 1px 0px rgba(58, 13, 73, 1)",
          "1px -1px 0px rgba(58, 13, 73, 1)",
          "-1px 1px 0px rgba(58, 13, 73, 1)",
          "1.5px 1.5px 0px rgba(58, 13, 73, 1)",
          "1.5px -1.5px 0px rgba(58, 13, 73, 1)",
          "-1px 1px 0px rgba(58, 13, 73, 1)",
          "-1px -1px 0px rgba(58, 13, 73, 1)",
          "0px 0px 2px rgba(58, 13, 73, 1)",
        ],
      },
      keyframes: {
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        rotate: "rotate 1s linear",
        slideIn: "slideIn 0.5s forwards",
        slideOut: "slideOut 0.5s forwards",
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // To remove scroll bar
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
