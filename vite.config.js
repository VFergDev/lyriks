// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lyriks/',
  plugins: [react()],
  server: {
    // Enable history API fallback
    fs: {
      allow: ['..'],
    },
    history: {
      disableDotRule: true,
    },
  },
});
