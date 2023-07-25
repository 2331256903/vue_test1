export default {
  install(Vue,x,y,z){
    console.log(x,y,z)
    //全局过滤器
    Vue.filter('mySlice',function(value){
      return value.slice(0,4)
    })

    //定义全局指令
    Vue.directive('fbind',{
      //指令与元素成功绑定时(一上来) react,暂时不了解
      bind(element,binding){
        element.value = binding.value
        console.log('bind',this)
      },
      //指令所在元素被插入页面时
      inserted(element){
        element.focus()
        console.log('inserted',this)
      },
      //指令所在模板被重新解析时
      update(element,binding){
        element.value = binding.value
        console.log('update',this)
      }
    })

    //定义混入
    Vue.mixin({
      data(){
        return {
          x:1010,
          y:200
        }
      }
    })

    //给Vue原型上添加一个方法
    Vue.prototype.hello = ()=>(alert('你好'))
  }
}
