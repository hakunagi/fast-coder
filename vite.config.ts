import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  build: {
    target: "esnext",
    polyfillModulePreload: false,
    outDir: "../public",
    emptyOutDir: true,
    minify: "esbuild",
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
})
