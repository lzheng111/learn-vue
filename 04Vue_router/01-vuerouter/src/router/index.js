//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

//懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile =() =>import('../components/Profile')


//1.通过Vue.use（插件），安装插件
Vue.use(Router)

const routes = [
  {
    path: '/',
    // components: Home
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name:'首页',
    // mate:{
    //   title:'首页'
    // },
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path: 'news',
        component: HomeNews,
        name:'新闻',
      },
      {
        path: 'message',
        component:HomeMessage,
        name:'信息',
      }
    ]
  },
  {
    path: '/about',
    component: About,
    name:'关于',
    // mate:{
    //   title:'关于'
    // },
  },
  {
    path: '/user/:userId',
    component: User,
    name:'用户',
    // mate:{
    //   title:'用户'
    // },
  },
  {
    path: '/profile',
    component: Profile,
    name:'我的',
    // mate:{
    //   title:'我的'
    // },
  }
]

//2.创建VueRouter对象
const router = new Router({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass:'active'
})

//前置守卫（前置钩子 guard）
router.beforeEach( (to, from, next) => {
  document.title = to.matched[0].name
  next()
})

//后置守卫（后置钩子 hook）
// router.afterEach((to,from) =>{
//   // console.log(('----'));
// })


//3.将router对象传入Vue实例
export default router

