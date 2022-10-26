import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 2500
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      $src: resolve('./src'),
    },
    dedupe: ['@roxi/routify'],
  },
  server: {
    https: false,
  },
  optimizeDeps: {
    exclude: ['@roxi/routify', 'dompurify'],
  },
  plugins: [
    svelte({
      emitCss: true,
			extensions: ['.svelte']
    })
  ]
})
