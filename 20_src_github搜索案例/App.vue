<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
/*审查严格*/
/*import './assets/css/bootstrap.css'*/
import Search from "@/components/Search.vue";
import List from "@/components/List.vue";

export default {
    name:'App',
    components:{Search,List}
}
</script>

<style>

</style>