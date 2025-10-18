import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from 'vite-plugin-federation';

export default defineConfig({
  server: { port: 3004 },
  plugins: [
    react(),
    federation({
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/ui/Button.tsx',
        './Input': './src/components/ui/Input.tsx',
        './Modal': './src/components/ui/Modal.tsx',
        './Card': './src/components/ui/Card.tsx',
        './Table': './src/components/ui/Table.tsx',
        './Sidebar': './src/components/layout/Sidebar.tsx',
        './Footer': './src/components/layout/Footer.tsx',
        './LoadingSpinner': './src/components/feedback/LoadingSpinner.tsx',
        './ErrorMessage': './src/components/feedback/ErrorMessage.tsx',
        './SuccessMessage': './src/components/feedback/SuccessMessage.tsx',
        './useToast': './src/hooks/useToast.ts',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});