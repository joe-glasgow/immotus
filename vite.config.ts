import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          styled: ['styled-components'],
          mui: ['@mui/material', '@mui/styles'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  plugins: [react()],
});