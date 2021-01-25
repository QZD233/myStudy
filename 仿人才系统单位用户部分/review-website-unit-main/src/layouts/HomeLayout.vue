<template>
  <div id="home-layout">
    <home-header></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
export default {
  name: 'HomeLayout',
  components: {
    [HomeHeader.name]: HomeHeader
  }
}
</script>

<style lang="scss" scoped>
#home-layout {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #ecf0f1;
}
</style>
