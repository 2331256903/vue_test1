<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试go</button>
  </div>
</template>

<script>
  export default {
    name:'Banner',
    methods:{
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      test(){
        this.$router.go(3) //正数前进,负数后退,数值为步数
      }
    }
  }
</script>
