<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
      return {
        name:'baidu',
        address:'hefei'
      }
    },
    methods:{
      demo(msgName,data){
        console.log('hello消息收到了',msgName,data)
      }
    },
    mounted(){
      /*this.$bus.$on('hello',(data)=>{
        console.log('school组件收到数据',data)
      })*/
      /*this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log('有人发布hello消息,hello消息的回调执行了',msgName,data)
        console.log(this)
      })*/
      this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy() {
      /*this.$bus.$off('hello')*/
      //取消订阅
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style scoped>/*scoped局部样式 给标签增加了一个值随机的属性*/
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>
