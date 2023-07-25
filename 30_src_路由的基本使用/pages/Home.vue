<template>
  <div>
    <h2>我是Home的内容</h2>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    mounted() {
      console.log('Home组件挂载完毕',this)
      window.aboutRoute = this.$route
      window.aboutRoute = this.$router
    },
    /*beforeDestroy() {
      console.log('Home组件即将被销毁')
    }*/
  }
</script>

<style scoped>

</style>
