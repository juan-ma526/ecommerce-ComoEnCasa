/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marron: {
          50: "#F6F2EE",
          100: "#EEE6DD",
          200: "#DECFBF",
          300: "#CDB59D",
          400: "#BD9E7F",
          500: "#AC855D",
          600: "#8E6B49",
          700: "#694F36",
          800: "#473624",
          900: "#221A11",
          950: "#110D09",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
