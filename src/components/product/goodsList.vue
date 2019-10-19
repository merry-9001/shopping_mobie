<template>
<div class="containerGoodList">
    <Header title="商品页"></Header>
     <div class="goods-list">

   <router-link class="goods-item" v-for="item in goodslist" :key="item.productId" :to="'/home/goodsinfo/' + item.productId" tag="div">
      <img :src="item.src" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>

    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'goodlist',
  data(){
      return{
          index:1,
          goodslist:[]
      }
  },
  components:{
      Header
  },
  mounted(){
      this.getList();
  },
  methods:{
      getList(){
          this.axios.get('http://47.96.175.28/shopping_api/productList.php?page='+this.index).then(res=>{
              var state=res.data.state;
            //   console.log(res);
              if(state==='0')
              {
                this.goodslist = this.goodslist.concat(res.data.data.productList);
                // console.log(this.goodslist);
              }
          })
      },
    getMore() {
      this.index++;
      this.getList();
    },
  }

}
</script>

<style lang="scss" scoped>
.containerGoodList{
  padding-top: 40px;
  padding-bottom: 40px;
}
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>