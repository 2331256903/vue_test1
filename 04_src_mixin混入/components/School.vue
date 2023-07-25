<template>
  <div class="school">
    <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
// eslint-disable-next-line no-unused-vars
/*import {hunhe,hunhe2} from "@/mixin"*/
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'School',
  data(){
    return {
      name:'baidu',
      address:'hefei'
    }
  },
/*  mixins:[hunhe,hunhe2]*/
}
</script>

<style>
</style>
