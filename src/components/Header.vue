<template>
<div class="containerHead">
      <mt-header fixed :title="title">
        <!-- <slot></slot> -->
      <router-link to="/" slot="left" >
            <mt-button icon="back">back</mt-button>
      </router-link>
      </mt-header>
</div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
  },
}
</script>
<style scoped>

</style>