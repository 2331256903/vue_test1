<template>
  <li>
    <label>
      <input type="checkbox"
             :checked="todo.done"
             @change="handleCheck(todo.id)">
      <!--以下代买也能实现功能,但v-model修改了props里的值,违反原则-->
      <!--<input type="checkbox" v-model="todo.done">-->
      <span v-show="!todo.isEdit" >{{todo.title}}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
    </label>
    <button
      class="btn btn-danger"
      @click="handleDelete(todo.id)">
      删除
    </button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'MyItem',
    props:['todo'],
    methods:{
      //勾选或取消勾选
      handleCheck(id){
        //通知App组件将对应的todo对象的done值取反
        this.$bus.$emit('checkTodo',id)
      },
      handleDelete(id){
        if(confirm('确定删除吗?')){
          //this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo',id)
        }
      },
      //编辑
      handleEdit(todo){
        // eslint-disable-next-line no-prototype-builtins
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }
        else{
          console.log('@')
          this.$set(todo,'isEdit',true)
        }
        /*setTimeout(()=>{
          this.$refs.inputTitle.focus()
        })*/
        //$nextTick指定的节点会在下一次DOM更新结束后再执行回调  用的很多
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      //失去焦点回调 执行修改逻辑
      handleBlur(todo,e){
        todo.isEdit = false
        //console.log('updateTodo',todo.id,e.target.value)
        if(!e.target.value.trim()) return alert('输入不能为空!')
        this.$bus.$emit('updateTodo',todo.id,e.target.value)
      },
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top:-1px
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }
</style>
