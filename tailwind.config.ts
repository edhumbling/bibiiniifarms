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
        'happy-orange': '#ff6600',
        'deep-green': '#0d4f3c',
        'luminous-green': '#1a7a5e',
        'bright-green': '#2dd4bf',
        'emerald-glow': '#10b981',
        'forest-deep': '#064e3b',
        'brand-deep': '#1a1a1a',
        'brand-egg': '#ffd75e',
        'ink': '#1a1a1a',
      },
      backgroundImage: {
        'green-luminous': 'linear-gradient(135deg, #064e3b 0%, #0d4f3c 25%, #1a7a5e 50%, #10b981 75%, #2dd4bf 100%)',
        'green-deep': 'linear-gradient(90deg, #064e3b 0%, #0d4f3c 50%, #1a7a5e 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
