import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  publicDir: 'public',
  server: {
    open: '/index.html',
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
          return null;
        },
      },
    },
    minify: 'esbuild',
  },
  root: 'src',
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});
