/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slow-scroll": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" }, // scroll halfway or adjust as needed
        },
      },
      animation: {
        "slow-scroll": "slow-scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};

