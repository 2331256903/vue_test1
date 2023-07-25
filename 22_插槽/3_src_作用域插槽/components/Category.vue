<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!--  定义一个插槽,等组件使用者填充  -->
    <slot :games="games">默认内容</slot>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Category',
    props:['title'],
    data(){
      return {
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      }
    }
  }
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    text-align: center;
    background-color: orange;
  }
</style>
