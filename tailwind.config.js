/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(250px, -100px) scale(1)",
          },
          "66%": {
            transform: "translate(-250px, -100px)  scale(0.9)",
          },

          "100%": {
            transform: "translate(0px, 0px)  scale(1)",
          },
        },
        toRight: {
          "0%": {
            transform: "translate(0px, 100px) scale(1)",
          },
          "20%": {
            transform: "translate(0px, -400px) scale(1.1)",
          },
          "50%": {
            transform: "translate(650px, -400px) scale(1.0)",
          },

          "80%": {
            transform: "translate(650px, 100px)  scale(0.8)",
          },

          "100%": {
            transform: "translate(0px, 100px)  scale(1)",
          },
        },
        toLeft: {
          "0%": {
            transform: "translate(0px, 100px) scale(1)",
          },
          "20%": {
            transform: "translate(0px, -100px) scale(1.1)",
          },
          "50%": {
            transform: "translate(-650px, -100px) scale(1.0)",
          },

          "80%": {
            transform: "translate(-650px, 600px)  scale(0.8)",
          },

          "100%": {
            transform: "translate(0px, 100px)  scale(1)",
          },
        },
        // to: {
        //   "0%": {
        //     transform: "translate(0px, 0px) scale(1)",
        //   },
        //   "33%": {
        //     transform: "translate(30px, -50px) scale(1.1)",
        //   },
        //   "66%": {
        //     transform: "translate(-20px, 20px)  scale(0.9)",
        //   },

        //   "100%": {
        //     transform: "translate(0px, 0px)  scale(1)",
        //   },
        // },
      },
      animation: {
        blob: "blob 1000s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        toRight: "toRight 500s infinite cubic-bezier(0.4, 0, 0.2, 1);",
        toLeft: "toLeft 400s infinite cubic-bezier(0.4, 0, 0.2, 1);",
      },
    },
  },
  plugins: [],
};
