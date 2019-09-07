<template>
  <div class="app-container">
      <transition>
    <router-view/>
      </transition>
    <Tabbar></Tabbar>
  </div>
  
</template>
<script>
import Tabbar from "@/components/Tabbar";
export default {
  name: 'home',
  components: {
    Tabbar
  },
}
</script>
<style lang="scss">
.app-container {
  // padding-top: 40px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

</style>
