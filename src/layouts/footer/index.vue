<template>
  <div class="pc-footer-container">
    <div class="container-main">
      <div class="main-navigation">
        <div class="nav-every">
          <img src="./../../assets/imgs/pc/footer/logo_footer.png" >
        </div>
        <div class="line"></div>
        <div class="nav-every">
          <div class="catalogue">
            咨询预约热线
          </div>
          <div class="title">010-64200199</div>
        </div>
        <div class="line"></div>
        <div class="nav-every">
          <div class="catalogue">
            地址：北京市朝阳区西坝河 南路甲1-4（新天第大厦）
          </div>
        </div>
      </div>
      <van-divider :style="{ margin: '20px 0 20px' }" />
      <div class="link">
        <a href="https://beian.miit.gov.cn/#/Integrated/index">京ICP备18023059号-1</a>
      </div>
    </div>
  </div>
  <div class="iphone-footer-container">
    底部讯息
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

</script>

<style scoped lang="scss">
a {
  color: #fff;
}

// PC端
.pc-footer-container {
  width: 100%;
  padding: 40px 0 20px;
  background-color: #f5f5f5;
}

.container-main {
  .main-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-every {
      text-align: center;
      flex: 1;
      img{
        width: 100%;
      }
      .title {
        font-family: "Microsoft YaHei";
        font-weight: bold;
        font-size: 16px;
        color: #1a1a1a;
      }

      .catalogue {
        font-family: "Microsoft YaHei";
        font-weight: 400;
        font-size: 14px;

        a {
          color: #4d4d4d;
        }
      }

    }

    .line {
      width: 1px;
      height: 90px;
      background-color: #dbdbdb;
      margin: 0 50px;
    }

  }

  .link {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .link-every,
    a {
      font-family: "Microsoft YaHei";
      font-weight: 400;
      font-size: 13px;
      color: #4d4d4d;
    }

    .line {
      width: 1px;
      height: 13px;
      margin: 0 15px;
      background-color: #4d4d4d;
    }
  }

}

@media screen and (min-width: 1300px) {
  .container-main {
    width: 70%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1299px) {
  .container-main {
    width: 70%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 992px) {
  .pc-footer-container {
    display: block;
  }

  .iphone-footer-container {
    display: none;
  }
}

// 移动端
@media screen and (max-width: 991px) {
  .pc-footer-container {
    display: block;
  }

  .iphone-footer-container {
    // 32px
    padding: 32px 5px 24px;
    // margin-top: 20px;
    display: none;
    background-color: #1a1a1a;
    text-align: center;

    .footer-website {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      a {
        font-size: 12px;
      }

      .line {
        width: 1px;
        height: 15px;
        margin: 0 8px;
        background-color: #565656;
      }
    }

    .footer-police {
      margin-top: 30px;

      a {
        display: block;
        margin-bottom: 5px;
        color: #565656;
        font-size: 11px;

        img {
          width: 13px;
          height: 13px;
          margin-right: 5px;
        }

        p {
          margin: 0;
          height: 13px;
          display: inline-block;
          line-height: 13px;
        }
      }
    }

    .footer-bottom {
      margin-top: 12px;
      font-size: 12px;
      color: #565656;
    }
  }
}
</style>
