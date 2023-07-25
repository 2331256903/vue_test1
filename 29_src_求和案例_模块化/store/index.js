//该文件用于创建Vuex中最核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from "vue";
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})

