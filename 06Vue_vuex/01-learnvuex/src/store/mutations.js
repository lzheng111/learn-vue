export default {
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
