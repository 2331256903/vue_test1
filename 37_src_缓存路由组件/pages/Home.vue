<template>
  <div>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <keep-alive include="News"> <!--此处include表示需要缓存的组件,值为组件名-->
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
  }
</script>

<style scoped>

</style>
