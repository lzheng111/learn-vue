import axios from "axios";

export function request(config){
    // 1.创建axiios实例
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8080',
      timeout: 5000,
    })
    //2.axios拦截器
    //2.1拦截请求的要求
    instance.interceptors.request.use(config => {
      // console.log(config);
      //1.比如config中的一些信息不符合服务器的要求
      //2.不如每次发送网络请求时，都希望在界面显示一个请求的图标
      //3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
      return config
    },err => {
      // console.log(err);
    })
    //拦截响应
    instance.interceptors.response.use(res =>{
      console.log(res);
      return res.data
    },err => {
      console.log(err);
    })


    //3.发送真正的网络请求
   return instance(config)
  }


//7.
// export function request1(config){
//   return new Promise((resolve, reject) =>{
//     // 1.创建axiios实例
//     const instance = axios.create({
//       baseURL:'http://152.136.185.210:7878/api/hy66',
//       timeout: 1000,
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//        resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//5.
// export function request1(config,success,failure){
//   // 1.创建axiios实例
//   const instance = axios.create({
//     baseURL:'http://152.136.185.210:7878/api/hy66',
//     timeout: 1000,
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

export function request2(){

}
