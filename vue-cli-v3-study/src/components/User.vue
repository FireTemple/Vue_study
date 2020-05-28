<template>
    <div>
        <h2>用户界面</h2>
        <p>用户内容</p>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId(){
                return this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>
