export default {
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
}
