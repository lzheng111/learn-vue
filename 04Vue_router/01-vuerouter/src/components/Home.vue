<template>
  <div>
    <h2>我是首页哈哈哈哈</h2>
    <p>爱了爱了</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      path:'/home/news'
    }
  },
  created() {
    console.log(('home created'));
  },
  destroyed() {
    console.log('home destroyed')
  },
  //这两个组件只有被保持了状态使用了Keep-alive时，才是有效的
  activated() {
    // console.log(('activated'));
    this.$router.push(this.path)
  },
  // deactivated() {
  //   console.log(('deactivated'));
  // },
  beforeRouteLeave(to, from, next){
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }

}
</script>

<style scoped>

</style>
