import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Tu gardes '/' car tu utilises un domaine personnalisé
})
