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
        "neutral-800": "#4C4E61",
        "neutral-400": "#A3A5AE",
        "neutral-300": "#FAFAFA",
        "primary-red-400": "#EA5353",
        "primary-cyan-400": "#45D3D3",
        "primary-orange-400": "#FCAF4A",
        "primary-blue-400": "#549EF2",
      },
    },
  },
  plugins: [],
};
export default config;
