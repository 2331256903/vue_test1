//该文件用于创建Vuex中最核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from "vue";

//应用Vuex插件
Vue.use(Vuex)

//准备actions  用于响应组价中的动作
const actions= {
  /*jia(conText,value){
    console.log('action中的jia被调用了')
    conText.commit('JIA',value)
  },
  jian(conText,value){
    console.log('action中的jian被调用了')
    conText.commit('JIAN',value)
  },*/
  jiaOdd(conText,value){
    console.log('action中的jiaOdd被调用了')
    if(conText.state.sum % 2){
      conText.commit('JIA',value)
    }
  },
  jiaWait(conText,value){
    console.log('action中的jiaWait被调用了')
    setTimeout(()=>{
      conText.commit('JIA',value)
    },500)
  }
}
//准备mutations 用于操作数据(state)
const mutations= {
  JIA(state,value){
    console.log('mutations中的JIA被调用了')
    state.sum += value
  },
  JIAN(state,value){
    console.log('mutations中的JIAN被调用了')
    state.sum -= value
  },
}
//准备state 用于存储数据
const state= {
  sum:0 //当前的和
}

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
})

