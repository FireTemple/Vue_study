<template>
    <div id="app">
        <router-link :to="'/user/' + userId">用户</router-link>

        <router-link :to="{path: '/profile',
        query: {name: 'why', age: 18,height: 1.77}}">用户(query)
        </router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        methods: {
            test() {
                this.$router.push('/about');
            },
            test1() {
                this.$router.push('/home');
            }
        },
        data() {
            return {
                userId: 'Bohan'
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
