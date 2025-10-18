import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        auth: 'http://localhost:3001/assets/remoteEntry.js',
        sourcing: 'http://localhost:3002/assets/remoteEntry.js',
        subscription: 'http://localhost:3003/assets/remoteEntry.js',
        shared: 'http://localhost:3004/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'axios', 'react-query'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});