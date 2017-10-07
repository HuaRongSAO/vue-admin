<template>
<div class="left" v-if="show" >
    <div class="left-logo">
        <img src="./assets/logo.png" alt="logo">
        vue admin
    </div>
    <el-menu default-active=""
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose"
        :collapse="isCollapse"
        theme="dark">
    <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
            <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    </el-menu>
</div>
  
</template>
<<script>
export default {
  name: 'left-nav',
  data () {
    return {
      isCollapse: false
    }
  },
//   beforeCreate () {
//     this.$store.dispatch('nav/SHOW_NAV')
//   },
//   beforeRouteLeave (to, from, next) {
//     alert('hello')
//     this.$store.dispatch('nav/SHOW_NAV')
//   },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    show () {
      return this.$store.getters['nav/show']
    }
  }

}
</script>
<style lang="scss" scoped>
.left{
  width: 250px;
  height: 100%;
  background-color: #324157;
  &-logo{
      padding: 15px 0;
      border-bottom: 1px solid #aaa;
      color: #41b883;
      & img{
          display:block;
          width: 20%;          
          margin: 5px auto;
      }
  }
}
</style>
