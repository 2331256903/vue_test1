<template>
  <div class="app">
    <h1>{{msg}},学生姓名是:{{studentName}}</h1>
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种写法,使用@或v-on)-->
    <!--<Student v-on:atguigu="getStudentName" @demo="m1"/>--><!-- v-on给student组件的实例对象绑定了一个atguigu事件,在student组件中触发 -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种写法,使用ref,可以实现异步操作)-->
    <Student ref="student" @click.native="show"/><!--想在某个组件的根元素上监听一个原生事件则使用.native修饰v-on-->

    <hr>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name:'App',
  components:{School,Student},
  data(){
    return{
      msg:'你好',
      studentName:''
    }
  },
  methods: {
    getSchoolName(name){
      console.log('App收到了学校名',name)
    },
    /*getStudentName(name,...params){
      console.log('App收到了学生名',name,params)
      this.studentName = name
    },*/
    m1(){
      console.log('demo方法被调用了')
    },
    show(){
      console.log('触发点击事件')
    }
  },
  //ref
  mounted(){
    /*setTimeout(()=>{
      this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
    },3000)*/
    /*this.$refs.student.$once('atguigu',this.getStudentName)*/ //绑定自定义事件(一次性)
    this.$refs.student.$on('atguigu',(name,...params)=>{
      //注意:此时函数写进参数,this指向触发该事件的组件(Student),因此使用箭头函数将this指向App
      console.log('App收到了学生名',name,params)
      this.studentName = name
    })
  }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>
