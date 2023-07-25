<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>当前和为:{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组价实例(vc)</button>
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
      number:0
    }
  },
  methods:{
    add(){
      console.log('add回调被调用了')
      this.number++
    },
    sendStudentName(){
      //使用$emit触发Student组件实例身上的atguigu事件
      this.$emit('atguigu',this.name,666,888,900)
      //this.$emit('demo')
      //this.$emit('click')
    },
    unbind(){
      this.$off('atguigu') //解绑一个自定义事件
      //this.$off(['atguigu','demo']) //解绑多个自定义事件 销毁后所有Student实例的自定义事件全部不奏效
      //this.$off()  //解绑所有自定义事件
    },
    death(){
      this.$destroy() //销毁了当前Student组件的实例
    }
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
