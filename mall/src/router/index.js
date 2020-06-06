import Vue from 'vue';
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Detail =() => import('../views/detail/Detail')


Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:iid',
    component: Detail
  }

]

let router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
