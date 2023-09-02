import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  // 数据
  state: () => {
    return {
      productTypeList: sessionStorage.getItem("product_type_list") || "",
      supportTypeList: sessionStorage.getItem("support_type_list") || "",
      systemMsg: sessionStorage.getItem("systemInfo") || "",
      routerData: sessionStorage.getItem("routerData") || [],
    };
  },
  // 计算属性
  getters: {},
  // 方法
  actions: {
    setProductType(data:any) {
      sessionStorage.setItem("product_type_list", JSON.stringify(data));
      this.productTypeList = JSON.parse(
        sessionStorage.getItem("product_type_list") as string
      );
    },
    setSupportType(data:any) {
      sessionStorage.setItem("support_type_list", JSON.stringify(data));
      this.supportTypeList = JSON.parse(
        sessionStorage.getItem("support_type_list") as string
      );
    },
    setSystemMsg(val: any) {
      sessionStorage.setItem("systemInfo", JSON.stringify(val));
      this.systemMsg = sessionStorage.getItem("systemInfo") as string;
    },
    setRouterData(val: any) {
      sessionStorage.setItem("routerData", JSON.stringify(val));
      this.routerData = JSON.parse(
        sessionStorage.getItem("routerData") as string
      );
    },
  },
});
