<template>
  <div>
    <h2>{{this.$store.state.counter}}</h2>
    <h2>{{this.$store.getters.powerCounter}}</h2>
    <h2>{{this.$store.getters.studentAgeGreater18(18)}}</h2>
    <h2>{{this.$store.getters.greaterAgesCount}}</h2>
  </div>

</template>

<script>
    export default {
        name: "HelloVuex"
    }
</script>

<style scoped>

</style>
