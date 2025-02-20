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
  base: '/zplan/',
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
    proxy: {
      '/api': {
        target: 'https://smartcaptcha.yandexcloud.net',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader(
              'Origin',
              'https://smartcaptcha.yandexcloud.net',
            );
          });
        },
      },
    },
  },
  plugins: [pugPlugin(options, locals)],
  define: {
    'import.meta.env.VITE_TOKEN_SMART_CAPTCHA_SERVER': JSON.stringify(
      process.env.VITE_TOKEN_SMART_CAPTCHA_SERVER,
    ),
  },
});
