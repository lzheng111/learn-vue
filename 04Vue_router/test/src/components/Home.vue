<template>
<div>
  <h2>我是首页</h2>
  <router-link to="/home/news" tag="button">新闻</router-link>
  <router-link to="/home/message" tag="button">消息</router-link>
   <router-view/>
</div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>
