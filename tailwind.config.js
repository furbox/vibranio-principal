/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      Firasans: ["Fira Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea580c",
          secondary: "#b0d6fc",
          accent: "#c216f7",
          neutral: "#22262f",
          "base-100": "#3f4550",
          info: "#849be6",
          success: "#059669",
          warning: "#fcd34d",
          error: "#f13235",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
