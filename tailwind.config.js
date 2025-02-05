/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './src/*.{html,js,pug}'],
  theme: {
    extend: {
      colors: {
        '--color-gray-50': 'oklch(91.68% 0.0098 252.82)',
        '--color-gray-200': 'oklch(92.76% 0.0058 264.53)',
        '--color-emerald-400': 'oklch(72.46% 0.143 168.76)',
        '--color-red-500': 'oklch(62.38% 0.2277 26.96)',
      },
    },
  },
  plugins: [],
};
