<template>
  <div>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Student from './components/Student.vue'
// eslint-disable-next-line no-unused-vars
import School from './components/School.vue'

export default {
  name:'App',
  // eslint-disable-next-line vue/no-unused-components
  components:{School,Student},
}
</script>

<style>
</style>
