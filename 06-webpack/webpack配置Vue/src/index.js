import {name, age} from "./js/aaa";

console.log(name, age);

// 依赖CSS
require('./css/aaa.css');
require('./css/speical.less');

import Vue from 'vue';
import App from './vue/App.vue';


new Vue({
    el: '#app',
    template: '<App/>',
    components:{
        App,
    }
})
