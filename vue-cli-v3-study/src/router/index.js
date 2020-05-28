import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from "../components/Home";
// import about from "../components/about";
// import User from "../components/User";
// 必须通过vue.use 安装插件

// 懒加载写法
const Home = () => import('../components/Home');
const about = () => import('../components/about');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Profile = () => import('../components/Profile')
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                //子组件不写 /
                path: 'news',
                component: HomeNews,
                meta: {
                    title: 'news'
                }
            },
            {
                path: 'messages',
                component: HomeMessage,
                meta: {
                    title: 'messages'
                }
            }
        ],
        meta: {
            title: 'home'
        }
    },
    {
        path: '/about',
        component: about,
        meta: {
            title: 'about'
        }
    },
    {
        path: '/user/:userId',
        component: User,
        meta: {
            title: 'user'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: 'profile'
        }
    }
]

let router = new VueRouter({
    routes,
    // 去掉#
    mode: 'history'
});

router.beforeEach((to, from,next) =>{
    // 跳转
    next();
    console.log(to)
    document.title = to.matched[0].meta.title;
} )

export default router;
