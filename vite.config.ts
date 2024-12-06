import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigpaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigpaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./assets/styles/main.scss";`,
      },
    },
  },
});
