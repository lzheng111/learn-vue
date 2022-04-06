import Vue from "vue";
import Vuex from "vuex"
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex)

const state ={
  name:'lzh',
  counter:0,
}

const store = new Vuex.Store({
  state,
  mutations, //方法
  getters,   //计算属性
  actions,   //异步操作
})


export default store
