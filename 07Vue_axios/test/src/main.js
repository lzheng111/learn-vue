import Vue from 'vue'
import App from './App'
import {request} from "./network/request";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

request({
  url:'api/user/bar'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
