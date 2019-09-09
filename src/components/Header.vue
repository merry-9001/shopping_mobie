<template>
<div class="containerHead">
      <mt-header fixed :title="title">

      <span slot="left" @click="goBack" v-show="flag">
            <mt-button icon="back">返回</mt-button>
      </span>
      </mt-header>
</div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
  },
  created() {
    this.flag = this.$route.path === "/index" ? false : true;
  },
  methods: {
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/index") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
}
</script>
<style scoped>

</style>