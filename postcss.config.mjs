export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    cssnano: { preset: 'default' },
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
