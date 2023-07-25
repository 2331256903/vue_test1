<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h3>当前求和,放大十倍为:{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Count',
    data() {
      return {
        n:1 //用户选择的数据
      }
    },
    computed:{
      //靠程序员自己亲自写计算属性
      //es6语法: ...{},相当于把对象中的每个部分依次取出放在该行 此处相当于上面注释的部分
      //借助mapState生成计算属性,从state中读取数据  (对象写法)
      //...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

      //借助mapState生成计算属性,从state中读取数据  (数组写法)  生成计算属性名和读取出来的名得一致
      ...mapState(['sum','school','subject']),

      /*bigSum(){
        return this.$store.getters.bigSum
      },*/

      //借助mapGetters生成计算属性,从getters中读取数据  (对象写法)
      //...mapGetters({bigSum:'bigSum'})
      //借助mapGetters生成计算属性,从getters中读取数据  (数组写法)
      ...mapGetters(['bigSum'])
    },
    methods:{
      /*increment(){
        this.$store.commit('JIA',this.n)
      },
      decrement(){
        this.$store.commit('JIAN',this.n)
      },*/


      //借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象写法)
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      //借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象写法)
      //...mapMutations(['JIA','JIAN']),

      /*incrementOdd(){
        this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.n)
      },*/
      //借助mapMutations生成对应的方法,方法中会调用dispatch去联系actions(对象写法)
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
      //...mapActions(['jiaOdd','jianOdd'])
    },
    mounted(){
      const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
      console.log(x)
    }
  }
</script>
<style lang="css">
  button {
    margin-left: 5px;
  }
</style>