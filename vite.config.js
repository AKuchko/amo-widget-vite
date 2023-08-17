import { fileURLToPath, URL } from 'node:url'

import { config } from 'dotenv'
import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

config()

const { DEV_SERVER_PORT } = process.env
const public_path = `https://localhost:${DEV_SERVER_PORT}`

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: public_path,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'amo-widget',
      formats: ['umd'],
      fileName: () => 'app.[hash].js'
    },
    sourcemap: true,
  },
  server: {
    port: DEV_SERVER_PORT,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
