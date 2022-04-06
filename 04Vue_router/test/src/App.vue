<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <!--    <router-link :to="{path:'/about',query:{name:'lzh',age:18}}" tag="button">关于</router-link>-->
<!--   //代码跳转-->
    <button @click="aboutClick">关于</button>
    <router-link :to="'/user/'+ userId" tag="button">用户</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lzheng'
    }
  },
  methods:{
    aboutClick(){
      this.$router.push({
        path:'/about',
        query:{
          name:'lzh',
          age:18
        }
      })
    }
  }
}
</script>

<style>

</style>
