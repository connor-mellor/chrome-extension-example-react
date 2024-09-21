import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve('..', 'extension'),
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',    
        chunkFileNames: 'assets/[name].js',    
        assetFileNames: 'assets/[name].[ext]', 
      },
    },
  },
  publicDir: 'public',
});
