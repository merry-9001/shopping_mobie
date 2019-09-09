<template>
  <div class="shopcar-container">
    <Header title="购物车"></Header>
    <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item, i) in shoppingCar" :key="item.productId">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- v-model="$store.getters.getGoodsSelected[item.id]"
            @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"-->
            <mt-switch v-model="$store.getters.getGoodsSelected[item.productId]"
            @change="selectedChanged(item.productId, $store.getters.getGoodsSelected[item.productId])"></mt-switch>
            <img :src="item.src" class="img" />
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <Number
                  :initcount="$store.getters.getGoodsCount[item.productId]"
                  :goodsid="item.productId"
                ></Number>
                <!-- <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox> -->
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#" @click.prevent="remove(item.productId, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件， 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
            </div>
             <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
      <!-- <p>{{ $store.getters.getGoodsSelected }}</p> -->
  </div>
</template>

<script>
import Number from "@/components/ShoppingCarNumber";
import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";
export default {
  name: "shopcar",
  data() {
    return {
      shoppingCar: []
    };
  },
  components: {
    Header,
    Tabbar,
    Number
  },
  mounted() {
    var idArr = [];
    this.$store.state.car.forEach(item => idArr.push(item.id));
    // console.log(idArr);
    if (idArr.length <= 0) {
      return;
    }
    var ss = idArr.join(",");
    // console.log(ss);
    this.axios
      .get("http://120.27.1.3/shopping_api/shoppingCar.php?id=" + ss)
      .then(res => {
        // console.log(res);
        var state = res.data.state;
        if (state === "0") {
          this.shoppingCar = res.data.data.shopping;
          console.log(this.shoppingCar);
        }
      });
  },
  methods: {
    remove(id, index) {
      // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
      this.shoppingCar.splice(index, 1);
      this.$store.commit("removeFormCar", id);
    },
    selectedChanged(id, val) {
      // 每当点击开关，把最新的 快关状态，同步到 store 中
      // console.log(id + " --- " + val);
      this.$store.commit("updateGoodsSelected", { id, selected: val });
    }
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
