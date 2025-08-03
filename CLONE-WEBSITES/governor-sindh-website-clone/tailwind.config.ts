import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        smart: { min: "300px", max: "1020px" },
        phone: { min: "300px", max: "640px" },
        tablet: { min: "641px", max: "1020px" },
        laptop: { min: "1021" },
      },
    },
    plugins: [],
  },
};

export default config;
