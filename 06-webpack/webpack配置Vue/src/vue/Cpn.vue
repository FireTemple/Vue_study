<template>
    <div>
        <h2 class="title">我是标题</h2>
        <p>我是内容</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                name: "Bohan"
            }
        }
    }
</script>

<style scoped>
.title{
    color: rebeccapurple;
}
</style>
