<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
        <!--原始html中我们使用a标签实现页面的跳转-->
        <!--<a class="list-group-item" href="./about.html">About</a>-->
        <!--<a class="list-group-item active" href="./home.html">Home</a>-->

        <!--Vue中借助router-link标签实现路由的切换-->
          <router-link to="/about" class="list-group-item" active-class="active">About</router-link>
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            此处展示什么组件
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*审查严格*/
/*import './assets/css/bootstrap.css'*/
import Banner from "@/components/Banner.vue";

export default {
  name:'App',
  components:{Banner}
}
</script>
