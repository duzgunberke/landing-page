import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // This helps with code splitting
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    assetsInlineLimit: 0, // Don't inline any assets as base64
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'gsap']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000', // Long caching for static assets
    },
    fs: {
      strict: false
    }
  }
})
