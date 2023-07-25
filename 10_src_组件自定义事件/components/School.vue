<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
  export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'School',
  props:['getSchoolName'],
  data(){
    return {
      name:'baidu',
      address:'hefei'
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>/*scoped局部样式 给标签增加了一个值随机的属性*/
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>
