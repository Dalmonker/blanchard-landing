import autoprefixer from "autoprefixer"
import { defineConfig } from "vite"

export default defineConfig({
  css: {
    preprocessorOptions: {},
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
})