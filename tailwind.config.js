/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "325px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
      },
      colors: {
        brand: {
          navy: "#0B1F3A",
          primary: "#1677FF",
          cyan: "#17B6D3",
          secondary: "#F5B700",
          ink: "#142033",
          muted: "#526174",
          surface: "#F4F7FB",
          line: "#D9E2EE",
        },
        white: {
          main: "#FFFFFF",
          off: "#F8FAFD",
          cool: "#F4F7FB",
        },
        black: {
          main: "#000000",
        },
      },
    },
  },
  plugins: [],
};
