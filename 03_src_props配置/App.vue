<template>
  <div>
    <!--不加v-bind传参为字符串形式,加上后才将后面参数作为js解析式传入-->
    <Student name="张三" sex="男" :age="18"/>
    <Student name="李四" sex="女" :age="19"/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Student from './components/Student.vue'

export default {
  name:'App',
  // eslint-disable-next-line vue/no-unused-components
  components:{Student},
}
</script>

<style>
</style>
