export default{
  state:{
    name: 'zhangsan'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    aUpdatename(context){
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name + '1111'
    },
    fullname2(state,getters){
      return getters.fullname +'2222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.counter
    }
  }
}
