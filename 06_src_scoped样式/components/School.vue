<template>
  <div class="demo">
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
      name:'baidu123456',
      address:'hefei'
    }
  },
}
</script>

<style scoped>/*scoped局部样式 给标签增加了一个值随机的属性*/
  .demo {
    background-color: skyblue;
  }
</style>
