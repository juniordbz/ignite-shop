import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        roboto:[ 'var(--roboto)', 'sans serif'],
        jersey:[ 'var(--jersey)', 'sans serif'],
      },
      maxWidth:{
        home:'calc(100vw - ((100vw - 1180px) /2))'
      }
    },
  },
  plugins: [],
};
export default config;
