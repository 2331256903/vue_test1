<template>
    <ul class="todo-main">
      <transition-group name="todo" appear>
        <MyItem
          v-for="todoObj in todos"
          :key="todoObj.id"
          :todo="todoObj"
        />
      </transition-group>
    </ul>
</template>

<script>
  import MyItem from './MyItem.vue'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'MyList',
    components:{MyItem},
    props:['todos']
  }
</script>

<style scoped>
.todo-enter-active {
  animation: atguigu 0.5s linear;
}
.todo-leave-active {
  animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}

  /*main*/
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
