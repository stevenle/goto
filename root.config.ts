import path from 'node:path';
import {defineConfig} from '@blinkk/root';
import {auth} from './plugins/auth.js';

const root = new URL('.', import.meta.url).pathname;

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': root,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: [
            path.resolve(root, './styles'),
          ],
        },
      },
    },
  },
  plugins: [
    auth({}),
  ],
});
