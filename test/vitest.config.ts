import { defineConfig } from 'vite'
import type { UserConfigExport } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  plugins: [Vue()],
  test: {
    environment: 'jsdom',
  },
} as UserConfigExport &{ test: any })
