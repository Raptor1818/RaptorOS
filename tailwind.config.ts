import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'markdown-background': 'rgb(13, 17, 23)',
        'markdown-border-color': '#30363db3',
        'markdown-text-color': 'rgb(230, 237, 243)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        notoSans: ['var(--font-noto-sans)'],
        notoMono: ['var(--font-noto-sans-mono)'],
      },
    },
  },
  plugins: [
  ],
};
export default config;
