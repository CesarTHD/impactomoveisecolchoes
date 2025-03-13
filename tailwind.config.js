/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./app/layout.tsx",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          "linear-green" : "radial-gradient(circle, rgba(0,255,51,1) 50%, rgba(6,150,99,1) 100%)",
          "linear-blue" : "radial-gradient(circle, rgb(10, 40, 80) 0%, rgba(150,6,6,0) 100%)",
          "background-home" : "linear-gradient(0deg, #082b49 0%, rgba(45,64,73,1) 35%, rgba(255,255,255,1) 65%)",
          // "background-home" : "linear-gradient(0deg, rgba(4,25,44,1) 0%, rgba(45,64,73,1) 35%, rgba(255,255,255,1) 65%)",
          "background-result" : "linear-gradient(0deg, rgba(4,25,44,1) 30%, rgba(45,64,73,1) 80%, rgba(255,255,255,1) 100%)",
          
          "linear-pink": "linear-gradient(90deg, rgba(254,232,209,1) 30%, rgba(228,149,158,1) 100%)",
          "linear-gold": "linear-gradient(to right, #fbbf24, #FCF6BA, #FCF6BA, #fbbf24, #fbbf24, #FCF6BA)",
          "background1": "linear-gradient(0deg, rgba(233,195,206,1) 0%, rgba(255,255,255,1) 100%)",
          "background2": "radial-gradient(circle, rgba(6,33,52,1) 0%, rgba(44,105,148,1) 31%, rgba(255,255,255,1) 94%)",
          "woman": "url('/assets/03.png')",
          "gold": "",
          "linear-blue-white": "linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(233,233,233,1) 31%, rgba(45,64,73,1) 88%, rgba(4,25,44,1) 100%)"
      },
      colors : {
        "transparent-blue": "rgba(4, 25, 44, .6)",
        "blue-default": "#082b49",
        // "blue-default": "#062134",
        "gold": "#d9b59d",
        "skin": "rgb(213, 173, 148)",
        "transparent-skin": "rgb(213, 173, 148, .5)",
        "linear-gold": "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
      }
    },
    fontFamily: {
      'custom': ["Raleway", 'sans-serif'],
    }
  },
  plugins: [],
}