<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">输出上方DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
//引入School组件
// eslint-disable-next-line no-unused-vars
import School from './components/School.vue'

export default {
  name:'App',
  // eslint-disable-next-line vue/no-unused-components
  components:{School},
  data() {
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title) //真实DOM元素
      console.log(this.$refs) //真实DOM元素
      console.log(this.$refs.sch) //School组件的实例对象(vc)
    }
  }
}
</script>

<style scoped>
</style>
