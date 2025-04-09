import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import EnvCompatible from 'vite-plugin-env-compatible';  // Import the plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    EnvCompatible()  // Add the plugin here
  ],
});
