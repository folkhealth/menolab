import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://vl23sex5f0.execute-api.eu-north-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'https://vl23sex5f0.execute-api.eu-north-1.amazonaws.com'),
      }
    }
  }
})
