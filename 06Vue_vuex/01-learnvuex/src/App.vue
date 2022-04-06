<template>
  <div id="app">
    <h2>----------------app的内容：modules中的内容--------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改按钮</button>




    <h2>----------------app的内容：info对象内容是否响应式--------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------------app的内容--------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">++</button>
    <button @click="subtraction">--</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>


    <h2>----------------app的内容：getters相关信息--------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(20)}}</h2>



    <h2>----------------HelloVuex的内容--------------</h2>
    <HelloVuex > </HelloVuex>

  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
// import {INCREMENT} from './store/mutations-types'


export default {
  name: 'App',
  components: {
    HelloVuex
  },
   data(){
     return{
       message:'我是APP组件',
       // counter:0
     }
   },
  computed:{
   // more20stu(){
   //   return this.$store.state.students.filter(s => s.age >20)
   // }
  },
  methods:{
    addition(){
      this.$store.commit('increment')
      // this.$store.commit(INCREMENT)

    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //payload: 负载
      //普通提交风格
      this.$store.commit('incrementCount',count)
      //特殊提交风格
      // this.$store.commit({
      //   type:"incrementCount",
      //   count,
      // })
    },
    addStudent(){
      const stu ={id:155,name:'lllll',age:22}
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      //异步操作 不够优雅
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success: ()=>{
      //     console.log('里面已经完成啦');
      //   }
      // })
      this.$store
        .dispatch('aUpdateInfo','我是携带的信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res);
        })
    },
    updateName() {
      //提交
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdatename')
    }
  }
}
</script>

<style>

</style>
