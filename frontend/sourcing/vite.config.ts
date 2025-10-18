import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  server: { port: 3002 },
  plugins: [
    react(),
    federation({
      name: 'sourcing',
      filename: 'remoteEntry.js',
      exposes: {
        './RequestListPage': './src/pages/RequestListPage.tsx',
        './RequestCreatePage': './src/pages/RequestCreatePage.tsx',
        './RequestDetailPage': './src/pages/RequestDetailPage.tsx',
        './MyRequestsPage': './src/pages/MyRequestsPage.tsx',
        './useSourcing': './src/hooks/useSourcing.ts',
      },
      remotes: {
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