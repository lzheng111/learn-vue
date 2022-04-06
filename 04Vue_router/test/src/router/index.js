import Vue from "vue";
import Router from "vue-router";

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const HomeNew = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const User = () => import('../components/User')

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home,
    name:'首页',

    children:[
      {
        path:'/',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNew,
        name:'新闻'
      },
      {
        path:'message',
        component:HomeMessage,
        name:'消息'
      },
    ]


  },
  {
    path:'/about',
    component:About,
    name:'关于'
  },
  {
    path:'/user/:id',
    component:User,
    name:'用户'
  }
]

const router = new Router({
  routes,
  mode:'history',
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].name
  next()
})

export default router
