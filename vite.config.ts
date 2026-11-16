import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// En GitHub Pages el sitio vive en https://<usuario>.github.io/<repo>/,
// por eso el workflow de despliegue define VITE_BASE=/<repo>/.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
});
