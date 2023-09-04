<template>
  <!-- 首页 -->
  <div v-show="cliWidth > 990" class="pc-container ">
    <el-carousel :interval="3000" arrow="always" :height="bannerHeight + 'px'" class="my-carousel" ref="carousel">
      <el-carousel-item v-for="(item, index) of bannerImgList" :key="index">
        <a href="https://processing.zooszyservice.com/lr/chatpre.aspx?id=KHT73441085" target="_blank">
          <img :src="item" class="carousel-img" /></a>
      </el-carousel-item>
    </el-carousel>

    <div class="activity">
      <div class="activity-main">
        <template v-for="(item, index) of productList" :key="index">
          <div class="activity-item wow fadeInUpBig" data-wow-duration="1s"
            :data-wow-delay="(index >= 10 ? index / 10 + 's' : '0.' + index + 's')" :class=[item.icon] @click="goUrl()">
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>


    <el-carousel :interval="3000" arrow="always" :height="dockerHeight + 'px'" class="my-carousel" ref="carousel">
      <el-carousel-item v-for="(item, index) of doctorImgList" :key="index">
        <a href="https://processing.zooszyservice.com/lr/chatpre.aspx?id=KHT73441085" target="_blank">
          <img :src="item" class="carousel-img" />
        </a>
      </el-carousel-item>
    </el-carousel>


    <div class="activity brand">
      <div class="activity-header ">
        <h2 class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.2s">BRAND INFORMATION</h2>
        <h4 class="wow slideInRight" data-wow-duration="1s" data-wow-delay="0.2s">品牌资讯</h4>
      </div>
      <div class="activity-main">
        <template v-for="(item, index) of brandImgList" :key="index">
          <div class="activity-item wow flipInY" @click="goUrl()" data-wow-duration="1.5s"
            :data-wow-delay="(index >= 10 ? index / 10 + 's' : '0.' + index + 's')">
            <img :src="item">
            <div class="activity-content">
              <div class="key">{{ supportList[index].key }}</div>
              <div class="content">{{ supportList[index].content }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>

  </div>
  <div v-show="cliWidth < 768">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) of bannerImgList" :key="index">
        <img :src="item" style="width: 100%; height: auto" />
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script setup lang="ts">
import WOW from "wow.js";
import { ref, nextTick, onMounted } from "vue";
import { Dialog, Toast } from "vant";
import "vant/es/dialog/style";
import "vant/es/toast/style";
import { useUserStore } from "@/store/userStore";
import { websiteConfigPort } from "@/request/api/system";
const VanDialog = Dialog.Component;

// const cliWidth = ref(document.documentElement.clientWidth);
const cliWidth = ref(1300);
onMounted(() => {
  setSize();
  // 窗口大小发生改变时,调用一次
  // window.onresize = () => {
  //   cliWidth.value = document.documentElement.clientWidth;
  //   setSize();
  // };
  wowjsFn()
});

const wowjsFn = () => {
  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
}
const bannerHeight = ref(0);
const dockerHeight = ref(0);
const setSize = () => {
  // 通过图片宽度计算高度
  nextTick(() => {
    let width = 0;
    if (cliWidth.value > 990) {
      width = document.getElementsByClassName("pc-container")[0].clientWidth;
    } else {
      width = document.getElementsByClassName("pc-container")[3].clientWidth;
    }
    bannerHeight.value = (width * 530) / 1280;
    dockerHeight.value = (width * 930) / 1920;
  });
};

const codeShow = ref(false);

const goUrl = () => {
  window.open('https://processing.zooszyservice.com/lr/chatpre.aspx?id=KHT73441085');
};


const userStore = useUserStore();

// 获取轮播图片等
const bannerImgList = ref();
const doctorImgList = ref();
const brandImgList = ref();
const getLogo = () => {
  websiteConfigPort().then((res) => {
    userStore.setSystemMsg(res.data.data);
    if (cliWidth.value > 990) {
      bannerImgList.value = res.data.data.pc.pc_banner;
      doctorImgList.value = res.data.data.pc.pc_doctor;
      brandImgList.value = res.data.data.pc.pc_brand;
    } else {
      bannerImgList.value = res.data.data.mobile.mobile_banner;
      doctorImgList.value = res.data.data.mobile.mobile_doctor;
      brandImgList.value = res.data.data.mobile.mobile_brand;
    }
  });
};
getLogo();


//产品
const productList = ref();
let product: any;
if (userStore.productTypeList) {
  productList.value = userStore.productTypeList;
}

//品牌
const supportList = ref();
let support: any;
if (userStore.supportTypeList) {
  supportList.value = userStore.supportTypeList;
}

//判断是否为ie浏览器
const browserIsIe = () => {
  if (!!(window as any).ActiveXObject || "ActiveXObject" in window) return true;
  else return false;
}
</script>

<style lang="scss" scoped>
// PC端
.pc-container {
  width: 100%;
  margin: 0 auto;

  .activity {
    width: 100%;
    background-color: #F6F6F6;
    padding: 30px 0;

    .activity-header {
      text-align: center;
    }

    .activity-main {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .activity-item {
        margin-bottom: calc(8% / 4);
        flex: 0 0 23%;
        padding: 66px 0 30px 0;
        background: #FFFFFF;
        background-repeat: no-repeat;
        background-position: center 25px;
        background-size: 43px 26px;
        text-align: center;
        font-size: 16px;
        color: #8B8B8B;
        cursor: pointer;

        img {
          width: 100%;
        }

      }

      .activity-item:hover {
        transform: scale(1.1);
        -moz-transition: 0.4s;
        -ms-transition: 0.4s;
        -webkit-transition: 0.4s;
      }

      .activity-item:hover {
        color: #221815;
        background-color: #E1E1E1;
      }


      .p_1 {
        background-image: url('../../assets/imgs/pc/home/p_1.png');
      }

      .p_2 {
        background-image: url('../../assets/imgs/pc/home/p_2.png');
      }

      .p_3 {
        background-image: url('../../assets/imgs/pc/home/p_3.png');
      }

      .p_4 {
        background-image: url('../../assets/imgs/pc/home/p_4.png');
      }

      .p_5 {
        background-image: url('../../assets/imgs/pc/home/p_5.png');
      }

      .p_6 {
        background-image: url('../../assets/imgs/pc/home/p_6.png');
      }

      .p_7 {
        background-image: url('../../assets/imgs/pc/home/p_7.png');
      }

      .p_8 {
        background-image: url('../../assets/imgs/pc/home/p_8.png');
      }

      .p_9 {
        background-image: url('../../assets/imgs/pc/home/p_9.png');
      }

      .p_10 {
        background-image: url('../../assets/imgs/pc/home/p_10.png');
      }

      .p_11 {
        background-image: url('../../assets/imgs/pc/home/p_11.png');
      }

      .p_12 {
        background-image: url('../../assets/imgs/pc/home/p_12.png');
      }
    }

    &.brand {
      background: #FFFFFF;

      .activity-item {
        margin-bottom: calc(12% / 4);
        flex: 0 0 22%;
        background-color: transparent;
        color: #221815;
        padding: 0;
      }

      .activity-item:hover {
        // color: #221815;
        background-color: transparent;
      }

      .activity-content {
        margin-top: 20px;
        line-height: 26px;
        font-size: 18px;

        .key {}

        .content {
          color: #999;
        }
      }
    }
  }
}



// 移动端
@media screen and (max-width: 767px) {}</style>
