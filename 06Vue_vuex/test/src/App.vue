<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="addClick">++</button>
    <button @click="subClick">--</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    addClick(){
      this.$store.commit('increment')
    },
    subClick(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>

</style>
