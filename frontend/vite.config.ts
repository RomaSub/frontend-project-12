import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v1/, '/api/v1')
      }
    }
  }
});
