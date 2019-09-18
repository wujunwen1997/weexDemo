<template>
  <div class="wrapper">
    <top-bar class="topBar" style="z-index: 9999"></top-bar>
    <router-view class="route"/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
export default {
  name: 'App',
  components: {
    TopBar
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .topBar{
    z-index: 99999999;
  }
  .route{
      margin-top: 90px;border-bottom: 1px solid #00B4FF;
    }
</style>
