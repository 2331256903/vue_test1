<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
/*审查严格*/
/*import './assets/css/bootstrap.css'*/
import Count from "@/components/Count.vue";
import Person from "@/components/Person.vue";

export default {
    name:'App',
    components:{Count,Person},
}
</script>
