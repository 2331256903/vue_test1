<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input
        type="checkbox"
        :checked="isAll"
        @change="checkAll"
      />
    <!--<input type="checkbox" v-model="isAll"/>-->
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'MyFooter',
    props:['todos'],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        /*let i = 0
        this.todos.forEach((todo)=>{
          if(todo.done) i++
        })
        return i*/
        return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0) ,0)
      },
      isAll(){
        /*一个计算属性,允许其他计算属性计算得到*/
        return this.doneTotal === this.total && this.total > 0
      },
      /*isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0
        },
        set(value){
          //this.checkAllTodo(value)
          this.$emit('checkAllTodo',value)
        }
      }*/
    },
    methods:{
      checkAll(e){
        this.$emit('checkAllTodo',e.target.checked)
      },
      clearAll(){
        this.$emit('clearAllTodo',)
      }
    }
  }
</script>

<style scoped>
   .todo-footer {
     height: 40px;
     line-height: 40px;
     padding-left: 6px;
     margin-top: 5px;
   }

   .todo-footer label {
     display: inline-block;
     margin-right: 20px;
     cursor:pointer;
   }

   .todo-footer label input {
     position:relative;
     top: -1px;
     vertical-align: middle;
     margin-right: 5px;
   }

   .todo-footer button {
     float: right;
     margin-top: 5px;
   }
</style>
