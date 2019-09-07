<template>
<div class="containerHead">
    <mt-swipe :auto="4000" class="pic_show">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.src" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- <h1>232</h1>
    <h1>232</h1>
    <h1>232</h1>
    <h1>232</h1> -->
</div>
</template>



<script>
export default {
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
        width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>
