import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { writeFileSync, copyFileSync } from 'fs';

// GitHub Pages SPA fallback: copy index.html → 404.html after build
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle() {
    try {
      const dist = resolve(__dirname, 'dist');
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    } catch {}
  }
});

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/self-branding/',
  server: {
    port: 5175,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
