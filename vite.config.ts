import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


dotenv.config({ path: fileURLToPath(new URL('.env.local', import.meta.url))});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@cves': fileURLToPath(new URL(process.env.PATH_CV_ES || './cv.json', import.meta.url)),
      '@cven': fileURLToPath(new URL(process.env.PATH_CV_EN ||'./cv-en.json', import.meta.url)),
     }
  }
})
