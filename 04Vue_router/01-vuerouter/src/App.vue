<template>
  <div id="app">
<!--    replace无法返回-->
<!--    <router-link to ="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to = "/about" tag="button" replace active-class="active">关于</router-link>-->

<!--    <router-link to ="/home" tag="button" replace >首页</router-link>-->
<!--    <router-link to = "/about" tag="button" replac>关于</router-link>-->

<!--    <button @click="homeClick">首页 </button>-->
<!--    <button @click="aboutClick">关于 </button>-->

    <router-link to ="/home" tag="button"  active-class="active">首页</router-link>
    <router-link to = "/about" tag="button"  active-class="active">关于</router-link>
<!--    <router-link :to ="'/user/' + userId" tag="button" active-class="active">用户</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{name:'lzh',age:18,height:1.88}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive>
      <router-view/>
    </keep-alive>

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
    homeClick(){
      //通过代码的方式修改对象
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query:{
          name: 'lzh',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
  .active{
    color: red;
}
</style>
