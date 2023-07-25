<template>
  <ul>
    <li>消息编号:{{id}}</li>
    <li>消息标题:{{title}}</li>
  </ul>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Detail',
    props:['id','title'],
    /*computed:{
    // eslint-disable-next-line vue/no-dupe-keys
      id(){
        return this.$route.query.id
      },
      // eslint-disable-next-line vue/no-dupe-keys
      title(){
        return this.$route.query.id
      }
    },*/
    mounted(){
      // console.log(this.$route)
    }
  }
</script>

<style scoped>

</style>
