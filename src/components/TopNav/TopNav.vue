<template>
<div v-if="isShowNav">
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="index"  v-promise="promise">
      首页
    </el-menu-item>
    <el-menu-item index="login">
      登入
    </el-menu-item>
    <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
        promise
    </el-menu-item>
    <el-menu-item index="4">
        show
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'top-nav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      promise: true
    }
  },
  computed: {
    isShowNav () {
      return this.$store.getters['nav/show']
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '3') {
        this.promise = false
        console.log(this.promise)
        return
      }
      if (key === '4') {
        this.promise = true
        console.log(this.promise)
        return
      }
      this.$router.push({name: key})
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
