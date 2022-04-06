//1.使用commonjs的模块化进行规范
import {mul,add} from "./js/mathUtils.js";

console.log(add(10, 100));
console.log(mul(11, 10));

//2.使用ES6的模块化进行规范
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊，lzh</h2>')

//使用vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el:'#app',
  template:'<App/>',
  components: {
    App
  },
})

document.writeln('<span>嘿嘿嘿吼吼吼</span>')
