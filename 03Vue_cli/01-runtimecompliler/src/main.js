// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

const cpn = {
  template:`
  <div>{{ message }}</div>`,
  data(){
    return{
      message:'我是message'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:function (h){
    //1.普通用法
    //creatElement（’标签‘，{标签属性}，{’内容‘}）
    // return h('h2',
    //   {class:'box'},
    //   ['hello lzh',h('button',['按钮'])
    // ])
   //2.传入组件对象
    return h(App)
  }
})



//runtimecompliler
//template -解析-> ast（抽象语法树） -编译->render（函数） -转化-> vdom（虚拟DOM） -转化-> UI（真实DOM）

//runtimeonly (1.性能更高，2.下面代码量更少)
// render --> vdom -->UI
