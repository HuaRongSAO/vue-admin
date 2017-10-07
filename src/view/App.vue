<template>
  <div id="app">
    <router-view name="noWindow"></router-view>
    <left-nav></left-nav>
    <div class="right">
      <top-nav></top-nav>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import TopNav from '@components/TopNav'
import LeftNav from '@components/LeftNav'
export default {
  name: 'app',
  components: {
    TopNav,
    LeftNav
  }
}
</script>
<style>
html,body{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
#app {
 font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
}
.fade-enter-active {
  transition: opacity 1s
}
.fade-enter {
  opacity: 0
}
.right{
  flex: 1;
}
</style>
