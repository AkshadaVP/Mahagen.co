import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import EnvCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    EnvCompatible()
  ],
  build: {
    // 1) Raise the size (in KB) before Vite warns you:
    chunkSizeWarningLimit: 1000,  // 1 000 KB

    // 2) Split node_modules into a "vendor" chunk:
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // you can add more rules here, e.g.
          // if (id.includes('node_modules/chart.js')) return 'chartjs';
        }
      }
    }
  }
});
