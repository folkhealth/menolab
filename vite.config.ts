import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@aws-amplify/api', 'aws-amplify'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://8978b4tfse.execute-api.eu-north-1.amazonaws.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
