<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click = "sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
  data(){
    return {
      name:'张三',
      sex:'男',
    }
  },
  methods:{
    sendStudentName(){
      this.$bus.$emit('hello',666)
    }
  },
  mounted() {
    console.log('Student',this.x)
  }
}
</script>

<style lang="less" scoped>/*lang调整所用语言为less,需要less-loader支持*/
  .student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>
