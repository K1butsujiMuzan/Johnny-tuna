import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),       // Корень проекта (src/)
      '@styles': path.resolve(__dirname, './src/styles'),       // Папка со стилями
      '@components': path.resolve(__dirname, './src/components'), // Компоненты
      '@assets': path.resolve(__dirname, './src/assets'),       // Ассеты (изображения, шрифты)
    },
  },
  server: {
    allowedHosts: [
      '5hh3lb4dwg1g.share.zrok.io',
    ]
  },
})
