import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  server: { port: 3001 },
  plugins: [
    react(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginPage': './src/pages/LoginPage.tsx',
        './RegisterPage': './src/pages/RegisterPage.tsx',
        './ProfilePage': './src/pages/ProfilePage.tsx',
        './useAuth': './src/hooks/useAuthMF.ts',
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