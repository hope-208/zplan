import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

const options = {
  pretty: true,
};
const locals = {
  name: 'src',
};

export default defineConfig({
  preview: {
    open: true,
  },
  server: {
    open: true,
  },
  publicDir: '../public',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [pugPlugin(options, locals)],
});
