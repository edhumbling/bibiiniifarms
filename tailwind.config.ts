import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif-text': ['var(--font-dm-serif-text)', 'serif'],
        'redhawk': ['Redhawk', 'var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'happy-orange': '#ff6600',
        'deep-green': '#166534',
        'luminous-green': '#22c55e',
        'bright-green': '#4ade80',
        'emerald-glow': '#16a34a',
        'forest-deep': '#166534',
        'brand-deep': '#166534',
        'brand-egg': '#ffd75e',
        'ink': '#1a1a1a',
      },
      backgroundImage: {
        'green-luminous': 'linear-gradient(135deg, #166534 0%, #16a34a 25%, #22c55e 50%, #4ade80 75%, #a3e635 100%)',
        'green-deep': 'linear-gradient(90deg, #166534 0%, #16a34a 50%, #22c55e 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
