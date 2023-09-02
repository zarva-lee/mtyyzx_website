import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/index.vue";

type RouteConfig = RouteRecordRaw & { hidden?: boolean };
const constantRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "mainHome",
    component: Layout,
    children: [
      {
        path: "/:cathchAll(.*)",
        name: "404",
        component: () => import("@/views/404.vue"),
        meta: {
          title: "404",
          isShow: "false",
        },
      },
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/product",
        name: "Product",
        meta: {
          title: "品牌概述",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/surgical",
        name: "Surgical",
        meta: {
          title: "美容外科",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/skin",
        name: "Skin",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "皮肤美容",
        }
      },
      {
        path: "/doctor",
        name: "Doctor",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "医师团队",
        }
      },
      {
        path: "/about",
        name: "About",
        meta: {
          title: "联系我们",
        },
        component: () => import("@/views/home/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
