/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px black',
        '4xl': [
          '0px 2px 2px rgba(0, 0, 0, 0.5)', 
          '0px 4px 4px rgba(0, 0, 0, 0.5)', 
          '0px 8px 8px rgba(0, 0, 0, 0.5)', 
          '0px 16px 16px rgba(0, 0, 0, 0.5)', 
          '0px 32px 32px rgba(0, 0, 0, 0.5)', 
          '0px 64px 64px rgba(0, 0, 0, 0.5)'
        ],
      },
      boxShadow: {
        '3xl': '0 35px 35px black',
        '4xl': [
          '0px 2px 2px rgba(0, 0, 0, 0.5)', 
          '0px 4px 4px rgba(0, 0, 0, 0.5)', 
          '0px 8px 8px rgba(0, 0, 0, 0.5)', 
          '0px 16px 16px rgba(0, 0, 0, 0.5)', 
          '0px 32px 32px rgba(0, 0, 0, 0.5)', 
          '0px 64px 64px rgba(0, 0, 0, 0.5)'
        ],
      },
      animation: {
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
        shine: "shine 2s infinite",
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "none" },
        },
        shine: {
          "100%": { left: "125%" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
