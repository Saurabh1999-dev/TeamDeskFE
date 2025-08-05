import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TeamDeskFE/', // ✅ Required for GitHub Pages
  plugins: [react()],
})
