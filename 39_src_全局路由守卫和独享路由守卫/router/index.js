//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";

//创建一个路由器
const router = new VueRouter({
  routes:[
    /*一级路由*/
    {
      name:'guanyu',
      path:'/about',
      component:About,
      meta:{isAuth:false,title:'关于'}
    },
    {
      name:'zhuye',
      path:'/home',
      component:Home,
      meta:{title:'主页'},
      children:[
        {
          name:'xinwen',
          path:'news',
          component:News,
          meta:{isAuth:true,title:'新闻'}
        },
        {
          name:'xiaoxi',
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'消息'},
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component:Detail,
              meta:{title:'详情'},
              props({query:{id,title}}){
                return {id,title}
              }
            }
          ]
        },
      ]
    }
  ]
})

//全局前置路由守卫--初始化时和每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
  console.log('前置路由守卫',to,from)
  if(to.meta.isAuth){ //判断是否需要鉴定权限
    if(localStorage.getItem('school')==='atguigu'){
      next()
    }else{
      alert('学校名不对.无权限查看')
    }
  }else{
    next()
  }
})

//全局后置路由守卫--初始化时和每次路由切换之后被调用
router.afterEach((to,from,next)=>{
  console.log('后置路由守卫',to,from,next)
  document.title = to.meta.title || '硅谷系统'
})

export default router
