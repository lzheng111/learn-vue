import axios from "axios";

export function request(config){

  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout: 5000,
  })
  //拦截器  拦截请求  拼接一点东西 在发送请求时增加一点动画
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  },err => {
    console.log(err);
  })
  //拦截相应
  // instance.interceptors.response.use(res => {
  //   console.log(res);
  //   return res.data
  // },err => {
  //   console.log(err);
  // })


  //返回真正的网络请求
  return instance(config)
}
