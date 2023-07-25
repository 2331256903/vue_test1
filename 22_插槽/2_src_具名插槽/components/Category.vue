<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!--  定义一个插槽,等组件使用者填充  -->
    <slot name="center">我是默认值,使用者没有传递具体结构时出现</slot>
    <slot name="footer">我是默认值,使用者没有传递具体结构时出现</slot>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Category',
    props:['title']
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
