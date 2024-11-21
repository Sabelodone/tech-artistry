/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-four': 'bounce 1s ease 4', // Bounce animation for 4 times
        glow: 'glow 1.5s ease-in-out infinite', // Glowing text effect
        marquee: 'marquee 100s linear infinite', // Slow down the marquee to 30s
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)' },
          '50%': { textShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.8)' },
          '100%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // Marquee scrolls horizontally
        },
      },
    },
  },
  plugins: [],
};
