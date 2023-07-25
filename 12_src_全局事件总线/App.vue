<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Student from './components/Student.vue'
// eslint-disable-next-line no-unused-vars
import School from './components/School.vue'

export default {
  name:'App',
  components:{School,Student},
  data(){
    return{
      msg:'你好',
    }
  }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>
