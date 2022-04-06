import Vue from 'vue'
import App from './App'

import axios from "axios";
import {config} from "shelljs";
import {request} from "./network/request";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   // method:'get'
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

//3.使用全局axios和相应的配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// //axios发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params: {
//     type:'sell',
//     page:5
//   }
// })])
//   .then(axios.spread((res1,res2) => {
//     console.log(res1);
//     console.log(res2);
//   }))

//4.创建对应的axios的实例
// const instance = axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout: 5000
// })
//
// instance({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance({
//   url:'home/data',
//   params:{
//     type:'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//
// const instance2 = axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout: 1000,
// })

//5.封装request模块
// import {request} from "./network/request";
//
// request({
//   url:'/home/multidata'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

//6.
// request({
//   baseConfig:{
//
//   },
//   success:function (res){
//
//   },
//   failure:function (err){
//
//   }
// })

//7.
request({
  url:'home/multidata'
}).then(res =>{
  // console.log(res);
}).catch(err => {
  // console.log(err);
})

