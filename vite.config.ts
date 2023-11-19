import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
/* eslint-disable-next-line import/no-default-export */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~UI': '/src/UI',
      '~modules': '/src/modules',
      '~Components': '/src/UI/Components',
      '~Pages': '/src/UI/Pages',
    },
  },
  server: {
    open: true,
  }
})
