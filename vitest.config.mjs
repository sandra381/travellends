import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tailwindcss/postcss': path.resolve(__dirname, './empty.js'),
      '@asamuzakjp/css-color': path.resolve(__dirname, './empty.js'),
      '@csstools/css-calc': path.resolve(__dirname, './empty.js'),
    }
  },
  css: {
    postcss: false,
  },
  test: {
    forks: {
      execArgv: ['--experimental-require-module']
    },
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
    css: false,
    server: {
      deps: {
        inline: [
          '@asamuzakjp/css-color',
          '@csstools/css-calc',
          '@tailwindcss/postcss',
          'tailwindcss',
          'postcss'
        ]
      }
    }
  },
})
