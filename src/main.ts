import pinia from "@/store/store"; // 引入创建好的pinia

// vue-router
import router from "./router/index";
import "./router/router";
import { createApp } from "vue";
import App from "./App.vue";
import "wow.js/css/libs/animate.css";

const app = createApp(App);

// 自定义指令-防止按钮重复点击
app.directive("preventClick", {
  mounted(el) {
    el.addEventListener("click", () => {
      if (!el.disabled) {
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, 3000);
      }
    });
  },
});

// element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus)

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).mount("#app");
