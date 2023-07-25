<template>
  <div class="Student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
  data(){
    return {
      name:'张三',
      sex:'男'
    }
  }
}
</script>

<style lang="less" scoped>/*lang调整所用语言为less,需要less-loader支持*/
  .demo {
    background-color: orange;
    .qwe{
      font-size: 40px;
    }
  }
</style>
