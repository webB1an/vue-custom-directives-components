import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置 @ alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
