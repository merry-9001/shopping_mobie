<template>
  <div class="container">
    <Header title="首页"></Header>
    <!--  -->
    <Swiper :lunbotuList="imgList" :isfull="true"></Swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/index/news">
          <img src="../assets/images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
        <router-view></router-view>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/index/photo">
          <img src="../assets/images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../assets/images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/index/news">
          <img src="../assets/images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/index/news">
          <img src="../assets/images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/index/news">
          <img src="../assets/images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Swiper from "@/components/swiper";
export default {
  name: "home",
  data() {
    return {
      imgList: []
    };
  },
  components: {
    Header,
    Swiper
  },
  mounted() {
    this.axios.get("/shopping_api/imgSelect.php").then(res => {
      // console.log(res);
      var msg = res.data.msg;
      if (msg === "ok") {
        this.imgList = res.data.data.img;
        console.log(this.imgList);
      } else {
        this.$toast({
          message: "提示",
          position: "图片获取失败",
          duration: 5000
        });
      }
    });
  }
};
</script>
<style scoped lang="scss">
.container {
  padding-top: 40px;
}
.pic_show {
  height: 150px;
}
.pic_show img {
  width: 100%;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
