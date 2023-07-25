<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'About',
    /*mounted() {
      console.log('About组件挂在完毕')
    },
    beforeDestroy() {
      console.log('About组件即将被销毁')
    }*/
    mounted() {
      console.log('About组件挂载完毕',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    },
  }
</script>

<style scoped>

</style>
