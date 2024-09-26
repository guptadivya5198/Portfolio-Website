/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scaleInWithGrayscale: {
          '0%': { transform: 'scale(0.5)', filter: 'grayscale(1)' },
          '50%': { transform: 'scale(1)', filter: 'grayscale(0.5)' },
          '100%': { transform: 'scale(1.2)', filter: 'grayscale(0)' },
        },
        scaleOutWithGrayscale: {
          '0%': { transform: 'scale(1.2)', filter: 'grayscale(0)' },
          '50%': { transform: 'scale(1)', filter: 'grayscale(0.5)' },
          '100%': { transform: 'scale(0.5)', filter: 'grayscale(0)' },
        },
      },
    },
  },
  plugins: [],
};
