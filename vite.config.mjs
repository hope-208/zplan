import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import pugPlugin from 'vite-plugin-pug';

const options = {
  pretty: true,
};
const locals = {
  name: 'src',
};

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  preview: {
    open: true,
  },
  server: {
    open: true,
    port: 5353,
  },
  publicDir: '../public',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [pugPlugin(options, locals)],
});
