import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/rollup";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/auto-imports.d.ts",
    }),

    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ["src/components", "src/layout", "src/views"],
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    //模塊化CSS檔被編譯後，也能在瀏覽器樣式找到源頭的設置
    devSourcemap: true,
  },
});
