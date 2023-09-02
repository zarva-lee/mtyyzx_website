<template>
  <el-menu :default-active="routePath" :mode="props.isShow == 'pcPage' ? 'horizontal' : 'vertical'" :unique-opened="true"
    :ellipsis="false" :menu-trigger="'click'" :text-color="textColor()" :active-text-color="activeTextColor()"
    :background-color="backColor()" router v-if="constantRoutes">
    <router-link v-show="props.isShow == 'pcPage'" class="logo-link" to="/"><img v-if="system"
        src="./../../assets/imgs/pc/footer/logo_footer.png" /></router-link>

    <template v-for="item in constantRoutes[0].children" :key="item.path">
      <el-menu-item class="sub-menu" :key="item.path" :index="item.path" :route="{ path: item.path }" v-if="!item.meta?.isShow &&
        (!item.children || (item.children && item.meta?.childShow))
        " @click="menuItemClick(item.meta?.title)">
        <span>{{ item.meta?.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useUserStore } from "@/store/userStore";
const constantRoutes: any = useUserStore().routerData;
const route = useRoute();
const routePath = ref(route.path);
const activeName = ref();

onBeforeRouteUpdate((to: any) => {
  activeName.value = to;
  textColorShow(activeName.value.query.name, activeName.value.path);
  routePath.value = to.path;
});

const props = defineProps({
  isShow: {
    required: true,
  },
});

const emit = defineEmits(["menuClose"]);
const menuItemClick = (title: any) => {
  emit("menuClose", "close");
};

onMounted(() => {
  textColorShow(route.query.name, routePath.value);
});


const textColorShow = (name: any, path: any) => {
  let list = document.getElementsByClassName("isDynamicColor");
  for (let i = 0; i < list.length; i++) {
    if (props.isShow == "phonePage") {
      if (path == "/") {
        list[i].setAttribute("style", "color:#1a1a1a");
      } else {
        list[i].setAttribute("style", "color:#fff");
      }
    }
  }
};


const textColor = (): string => {
  if (props.isShow == "pcPage") {
    return "#1a1a1a";
  } else if (props.isShow == "phonePage") {
    if (route.path == "/") {
      return "#1a1a1a";
    } else {
      return "#fff";
    }
  } else {
    return "#1A1A1A";
  }
};

const activeTextColor = (): string => {
  let color =
    props.isShow == "pcPage"
      ? "#1A1A1A"
      : props.isShow == "phonePage"
        ? "#F5C71B"
        : "#1A1A1A";
  return color;
};

const backColor = (): string => {
  if (props.isShow == "pcPage") {
    return "transparent";
  } else if (props.isShow == "phonePage") {
    if (route.path == "/") {
      return "#fff";
    } else {
      return "#1a1a1a";
    }
  } else {
    return "#F5F5F5";
  }
};

const system: any = ref();
const userStore = useUserStore();
if (userStore.systemMsg) {
  system.value = JSON.parse(userStore.systemMsg);
}
</script>

<style lang="scss" scoped>
.logo-link {
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    min-width: 52px;
    height: 52px;
  }
}

.search-img {
  display: flex;
  align-items: center;

  img {
    width: 19px;
    height: 19px;
  }
}

.flex-grow {
  flex-grow: 1;
}

.sub-menu {
  font-size: 16px;
  color: #221815;
}

a {
  color: #fff;
}
</style>
<style lang="scss">
.el-menu--popup {
  width: 80vw;
  display: flex;
  justify-content: center;
}

.el-menu--horizontal .el-menu .el-menu-item {
  padding: 0 50px;
}

.el-menu--horizontal {
  justify-content: center;
}

@media screen and (max-width: 767px) {
  .shop-a {
    display: inline-block;
    width: 100%;
  }
}

@media screen and (min-width: 1301px) {
  .el-menu-item {
    padding: 0 40px !important;
  }

  .el-sub-menu__title {
    padding: 0 20px !important;
    padding-right: 44px !important;
  }

  .el-sub-menu .el-sub-menu__icon-arrow {
    right: 20px !important;
  }

  .logo-link {
    margin-right: 60px;
  }

  .search-img {
    margin-left: 60px;
  }
}

@media screen and (max-width: 1300px) {
  .el-menu-item {
    padding: 0 30px !important;
  }

  .el-sub-menu__title {
    padding: 0 15px !important;
    padding-right: 32px !important;
  }

  .el-sub-menu .el-sub-menu__icon-arrow {
    right: 15px !important;
  }

  .logo-link {
    margin-right: 20px;
  }

  .search-img {
    margin-left: 20px;
  }
}
</style>
