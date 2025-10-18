import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  server: { port: 3003 },
  plugins: [
    react(),
    federation({
      name: 'subscription',
      filename: 'remoteEntry.js',
      exposes: {
        './PlansPage': './src/pages/PlansPage.tsx',
        './SubscriptionPage': './src/pages/SubscriptionPage.tsx',
        './BillingPage': './src/pages/BillingPage.tsx',
        './useSubscription': './src/hooks/useSubscription.ts',
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