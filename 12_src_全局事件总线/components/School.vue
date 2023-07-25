<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
      return {
        name:'baidu',
        address:'hefei'
      }
    },
    mounted(){
      this.$bus.$on('hello',(data)=>{
        console.log('school组件收到数据',data)
      })
    },
    beforeDestroy() {
      this.$bus.$off('hello')
    }
  }
</script>

<style scoped>/*scoped局部样式 给标签增加了一个值随机的属性*/
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>
