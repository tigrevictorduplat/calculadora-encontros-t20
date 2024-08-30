import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre automaticamente no navegador ao iniciar o servidor de desenvolvimento
  },
  resolve: {
    alias: {
      '@': '/src', // Facilita o uso de imports a partir da raiz `src`
    },
  },
});
