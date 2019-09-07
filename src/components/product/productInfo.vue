<template>
<div class="containerInfo">
    <Header title="商品详情">
    </Header>
<!-- ref="ball" -->
    <!-- <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ></div>
    </transition> -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :lunbotuList="img" :isfull="false"></Swiper>
        </div>
      </div>
    </div>


    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <!--     -->
          <p>购买数量：<Numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></Numbox></p>
          <p>
            <!-- <mt-button type="primary" size="small">立即购买</mt-button> -->
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.productId}}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.time }}</p>
          
        </div>
      </div>
      <div class="mui-card-footer">
        <!-- <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button> -->
      </div>
    </div>


</div>
</template>

<script>
import Header from "@/components/Header";
import Swiper from "@/components/swiper";
import Numbox from "@/components/product/numberBox";
export default {
  name: 'productInfo',
  data(){
      return{
        id:this.$route.params.id,
        goodsinfo:{},
        img:[],
        ballFlag:false,
        selectedCount: 1 // 保存用户选中的商品数量， 默认，认为用户买1个
      }
  },
  props: {
    title: String,
  },
  components:{
    Header,Swiper,Numbox
  },
  mounted(){
      this.initInfo();
  },
  methods: {
    initInfo()
    {
      this.axios.get('http://120.27.1.3/shopping_api/productInfo.php?id='+this.id).then(res=>{
          var state=res.data.state;
          console.log(res);
          if(state==='0')
          {
              this.goodsinfo=res.data.data.productList;
            //   console.log(this.productInfo);
          }
      });
      this.axios.get('http://120.27.1.3/shopping_api/productInfoImg.php?id='+this.id).then(res=>{
          var state=res.data.state;
        //   console.log(res);
          if(state==='0')
          {
              this.img=res.data.data.infoImg;
              console.log(this.img);
          }
      })
    },
    addToShopCar()
    {
       this.ballFlag = !this.ballFlag;
    },
    // beforeEnter(el) {
    //   el.style.transform = "translate(0, 0)";
    // },
    // enter(el, done) {
    //   el.offsetWidth;
    //   el.style.transform="translate(93px, 230px)";
    //   el.style.transition="all 1s ease";
    //   done();
    // },
    // afterEnter(el) {
    //   this.ballFlag = !this.ballFlag;
    // },
    getSelectedCount(count) {
      // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
      this.selectedCount = count;
      // console.log("父组件拿到的数量值为： " + this.selectedCount);
    }
  },
}
</script>
<style scoped>
.containerInfo{
  padding-top: 40px;
  padding-bottom:40px;
}
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
</style>