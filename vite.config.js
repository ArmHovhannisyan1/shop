import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import usePHP from 'vite-plugin-php';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [usePHP()],
})
