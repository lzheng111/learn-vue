import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//

//runtimecompliler
//template -解析-> ast（抽象语法树） -编译->render（函数） -转化-> vdom（虚拟DOM） -转化-> UI（真实DOM）

//runtimeonly (1.性能更高，2.下面代码量更少)
// render --> vdom -->UI

//那么vue文件里的template是由谁处理的
//是由vue-template-compliler插件完成的
