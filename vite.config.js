import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 8000, // you can replace this port with any port
    watch: {
      usePolling: true,
    },
  },
});
