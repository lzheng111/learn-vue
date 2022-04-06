import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

import {INCREMENT} from "./mutations-types";

//1.安装插件
Vue.use(Vuex)

const state = {
  counter:1000,
  students:[
    {id:100,name:'lzh',age:18},
    {id:101,name:'lt',age:22},
    {id:102,name:'aaa',age:30},
    {id:103,name:'bbb',age:8},
    {id:104,name:'ccc',age:38}
  ],
  info:{
    name:'kobe',
    age:40,
    height:1.98
  }
}

//创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a: moduleA
  }
})

//导出store独享
export default store

//对象的解构
// const obj ={
//   name:'lzhhhh',
//   age:18,
//   height: 1.88
// }
//
// const [name,age,height] = obj;
// console.log(name)
