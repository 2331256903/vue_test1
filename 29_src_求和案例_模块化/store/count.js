//求和相关配置
export default {
  //启用命名空间
  namespaced:true,
  actions:{
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
  },
  mutations:{
    JIA(state,value){
      console.log('mutations中的JIA被调用了')
      state.sum += value
    },
    JIAN(state,value){
      console.log('mutations中的JIAN被调用了')
      state.sum -= value
    },
  },
  state:{
    sum:0, //当前的和
    school:'尚硅谷',
    subject:'前端',
  },
  getters:{
    bigSum(state){
      return state.sum*10
    }
  },
}