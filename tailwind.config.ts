import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": {
          200: "#7A5CFA",
        },
        "custom-white": {
          100: "#666",
          200: "#CCC",
          300: "#333",
        },
        "custom-red": {
          100: "#EB5757",
        },
        "custom-bg": {
          100: "#e4defe",
        },
      },
    },
  },
  plugins: [],
};
export default config;
