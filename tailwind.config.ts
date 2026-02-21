import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)"
      },
      maxWidth: {
        content: "720px",
        prose: "680px"
      }
    }
  },
  plugins: []
};

export default config;
