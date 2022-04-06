import Vue from 'vue';
import Vuex from 'vuex';


//1.安装插件
Vue.use(Vuex)

const moduleA = {
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
const mutations ={
  //方法
  //  [INCREMENT](state){
  //    state.counter ++
  //  },
  increment(state){
    state.counter ++
  },
  decrement(state){
    state.counter--
  },
  incrementCount(state,count){
    state.counter += count
  },
  //特殊风格
  // incrementCount(state,payload){
  //   state.counter += payload.count
  // },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updateInfo(state){
    state.info.name = 'lzheng'
    //异步操作 错误代码 不要在mutations进行异步操作 用action
    // setTimeout(() => {
    //   state.info.name = 'lzheng'
    // },1000)

    //不是响应式 添加信息
    // state.info['address'] = '洛杉矶'
    //响应式
    // Vue.set(state.info,'address','洛杉矶')
    //不是响应式 删除信息
    // delete state.info.age
    //响应式 删除信息
    // Vue.delete(state.info,'age')
  }
}
//创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions:{
    //不够优雅
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }
    aUpdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('1111')
        },1000)
      })
    }
  },
  getters:{
    //类型计算属性computed
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age >20)
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      // return function (age){
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s =>s.age > age)
      }
    }
    },
  modules:{
    a: moduleA
    // b:{
    //   state:{},
    //   mutations:{},
    //   actions:{},
    //   getters:{}
    // }
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
