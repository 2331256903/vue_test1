<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
/*审查严格*/
/*import './assets/css/bootstrap.css'*/
import Category from "@/components/Count.vue";

export default {
    name:'App',
    components:{Category},
}
</script>

<style scoped>
  .container, .foot{
    display: flex;
    justify-content: space-around;
  }
  video {
    width: 100%;
  }
  img {
    width: 100%;
  }
  h4 {
    text-align: center;
  }
</style>