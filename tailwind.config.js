/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37DC29",
        dark: "#333333",
        light: "#C4E3FF",
        secondary: "#2A8F1A",
        accent: "#76E76D",
        warning: "#FFA726",
        success: "#4CAF50",
        info: "#29B6F6",
        background: "#F5F5F5",
        border: "#E0E0E0",
        yellow: "#F6EE28",
        dim: "#6b7280",
        gold: "#FFD700"
      },

      backgroundImage: (theme) => ({
        "gradient-1": "linear-gradient(to right, #37DC29, #76E76D)",
        "gradient-2": "linear-gradient(to bottom, #2A8F1A, #C4E3FF)",
        "gradient-3": "linear-gradient(to right, #333333, #4CAF50, #C4E3FF)",
        "gradient-4": "radial-gradient( #C4E3FF 0%, #F3FBE8 100%)",
        "gradient-5": "linear-gradient(to right,  #E0EFF0, #F5F5F5)",
      }),
    },
    screens: {
      ip: "200px",
      xs: "250px",
      ss: "380px",
      ts: "600px",
      xsm: "700px",
      sm: "800px",
      msm: "1020px",
      bsm: "1100px",
      md: "1280px",
    },
  },
  plugins: [],
};
