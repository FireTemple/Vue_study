<template>
  <div id="app">
    <h2>{{message}}</h2>
    <p>{{this.$store.state.counter}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="changeCount(5)">+5</button>

    <HelloVuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    data() {
      return {
        message: "hello",
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      },
      changeCount(count){
        this.$store.commit('changeCount', count)
      }
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>
