<template>
  <div class="container">
    <Header title="新闻"></Header>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" @click="getPhotoListByCateId(1)">推荐</a>
          <a class="mui-control-item" @click="getPhotoListByCateId(2)">明星</a>
          <a class="mui-control-item" @click="getPhotoListByCateId(3)">体育</a>
          <a class="mui-control-item" @click="getPhotoListByCateId(4)">校园</a>
          <a class="mui-control-item" @click="getPhotoListByCateId(4)">校园</a>
          <a class="mui-control-item" @click="getPhotoListByCateId(4)">校园</a>
          <a class="mui-control-item" @click="getPhotoListByCateId(4)">校园</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link
        v-for="item in photoList"
        :key="item.id"
        :to="'/home/photoinfo/' + item.id"
        tag="li"
      >
        <img v-lazy="item.src">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.content }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "@/assets/lib/mui/js/mui.min.js";
import Header from "@/components/Header";
export default {
  name: "photoList",
  data() {
    return {
      photoList: []
    };
  },
  props: {
    title: String
  },
  components: {
    Header
  },
  mounted(){
    this.getPhotoListByCateId(1);
        // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getPhotoListByCateId(id) {
      console.log(id);
      this.axios
        .get("/shopping_api/photoSelect.php?id=" + id)
        .then(res => {
          this.photoList = res.data.data.img;
        });
    }
  }
};
</script>


<style lang="scss" scoped>

.container {
  padding-top: 40px;
  padding-bottom: 40px;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      // position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 200px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
