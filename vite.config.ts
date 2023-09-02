import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 按需引入element、vant组件
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()],
    }),
  ],
  resolve: {
    // 设置路径别名
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": resolve("./src"),
      // "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 4000, // 服务端口号
    open: false, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': { // 请求接口中要替换的标识
        // target: 'http://demo2.zhangjunbai.com', // 代理地址
        target: 'http://api.mtyyzx.com', // 代理地址
        changeOrigin: true, // 是否允许跨域
        secure: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // api标志替换为''
      }
    }
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `
          @use "@/styles/index.scss" as *;
        `,
      },
    },
  },
  build: {
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
  },
});
