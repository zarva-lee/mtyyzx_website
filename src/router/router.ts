// 配置路由守卫
import router from "@/router/index";
import { startNprogress, closeNprogress } from "@/utils/nprogress";

import pinia from "../store/store";
import { useUserStore } from "../store/userStore";


const userStore = useUserStore(pinia); // 把 pinia传入进去

// 前置守卫
let isF = false; //这个是用于判断动态路由是否已经被获取
router.beforeEach(async (to, from, next) => {
  startNprogress();

  if (isF) {
    next();
  } else {
    // 获取当前默认路由
    const currenRoutes: any = router.options.routes;
    // 将新生成的路由保存到vuex中
    userStore.setRouterData(currenRoutes);
    // 更改控制生成路由次数的值
    next();
  }
});

// 后置守卫
router.afterEach((to, from) => {
  closeNprogress();
});
