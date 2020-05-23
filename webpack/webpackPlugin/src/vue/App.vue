<template>
    <div>
        <h2 class="title">{{name}}</h2>
        <h2>some thing adding!!!!!</h2>
        <h2>some thing adding!!!!!</h2>
        <h2>some thing adding!!!!!</h2>
        <Cpn/>
    </div>
</template>

<script>
    import Cpn from "./Cpn.vue";

    export default {
        name: "App",
        data() {
            return{
                name: '我是app组件'
            }
        },
        components: {
            Cpn
        }
    }
</script>

<style scoped>
.title{
    color: blue;
}
</style>
