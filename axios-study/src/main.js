import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(data => {
//   console.log(data);
// })
//
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(data => {
//   console.log(data);
// })
//
// let instance = axios.create({
//   // config
// });


import {requestPromise} from "./network/request";
import {requestUlt} from "./network/request";

// requestPromise({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

requestUlt({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
