# 笔记

## 脚手架文件结构
|-node_modules
|-public
|   |-favicon.ico: 页签图标
|   |_index.html: 主页面
|-src
|  |-assets:存放静态资源
|  |    |-logo.png
|  |-component: 存放组件
|  |    |-HelloWorld.vue
|  |-App.vue: 汇总所有组件
|  |_main.js: 入口文件
|-.gitignore: git版本管制忽略的配置
|-babel.config.js: babel的配置文件
|-package.json: 应用包配置文件
|-README.md: 应用描述文件
|_package-lock.json: 包版本控制文件

## 关于不同版本的vue
关于不同版本的Vue:
1.vue.js与vue.runtime.xxx.js的区别
    (1).vue.js是完整版的Vue,包含核心功能+模板解析器
    (2).vue.runtime.xxx.js是运行版的Vue,只包含核心功能,没有模板解析器
2.由于vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用 
render函数接收到的createElement函数去指定具体内容

## vue.config.js配置文件
使用vue inspect > output.js可以查看到脚手架的默认配置
使用vue.config.js可以对脚手架进行个性化定制,详情见 https://cli.vuejs.org/zh

## ref属性
  1.被用来给元素或子组件注册引用信息(id的替代者)
  2.应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象
  3.使用方式:
    打标识:<h1 ref="xxx">...</h1> 或 <School ref = "xxx"></School>
    获取: this.$refs.xxx

## 配置项props
  功能:让组件接收外部传过来的数据
    (1).传递数据:
        <Demo name="xxx">
    (2):接收数据'
        (1).第一种方式:只接收
            props:['name']
        (2),第二种方式:限制类型
            props:{
                name:String
            }
        (3).第三种方式:限制类型,限制必要性,指定默认值
            props:{
                type:String, //类型
                required:turn  //必要性
                default:'老王' //默认值 
    备注:props是只读的,Vue底层会监视你迪对props的修改,如果进行了修改,就会发出警告
        若业务需求确实需要更改,那么请复制props的内容到data中一份,然后去修改data中的数据

## mixin(混入)
  功能:可以把多个组件共用的配置提取成一个混入对象,定义了一部分可复用的方法或计算属性,混入对象可以包含任意组件选项,组件使用混入对象时所有混入对象的选项
      将被混入该组件本身的选项 
  使用方式:
    第一步定义混合,例如:
  { 
    data(){....},
    methods:{....}
    ....
  }
    第二步使用混入:
    1.全局混入:Vue.mixin(xxx)
        一旦使用全局混入对象,将会影响到所有之后创建的vue实例,使用恰当时可以为自定义对象注入处理逻辑
    2.局部混入:mixins:['xxx']
  注意: 当组件和混入对象含有同名选项时,这些选项将以恰当的方式混合
    比如,数据对象在内部会进行浅合并(一层属性深度),在和组件的数据发生冲突时以组件数据优先
    如果methods选项中有相同的函数名,则Vue实例优先级会较高

## 插件
  功能: 用于增强Vue
  本质: 包含install方法的一个对象,install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据
  定义插件:
    对象 const install = function (Vue,options){
            //1.添加全局过滤器
            Vue.filter(...)
            //2.添加全局指令
            Vue.directive
            //3.配置全局混入
            Vue.mixin
            //4.添加实例方法
            Vue.prototype.$myMethod = function() {...}
            Vue.prototype.$myProperty = xxx
         }
    使用插件: Vue.use()
    
## scoped样式
  作用:让样式在局部生效,防止冲突
  写法:<style scoped>
  
## 总结TodoList案例
 1.组件化编码流程
  (1).拆分静态组件:组件要按照功能点拆分,命名不要与html元素冲突
  (2).实现动态组件:考虑好数据的存放位置,数据是一个组件在用还是一些组件在用
    1).一个组件在用:放在组件自身即可
    2).一些组件在用:放在他们共同的父组件上
  (3).实现交互:从绑定事件开始
 2.props适用于:
 (1)父组件 ===> 子组件 通信
 (2)子组件 ===> 父组件 通信(要求父先给子一个函数)
 3.使用v-model时切记:v-model绑定的值不能是props传过来的值,props是不可修改的
 4.props传过来的若是对象类型的值,修改对象中的属性时Vue不会报错,但不推荐这样做
 
## WebStorage
 1.存储大小一般支持5MB左右
 2.浏览器端通过Window.sessionStorage 和 Window.localStorage属性来实现本地存储机制
 3.相关API:
 (1).xxxStorage.setItem('key','value');  
 该方法接收一个键和值作为参数,会把键值对添加到存储中,如果键名存在,则更新其对应的值
 (2).xxxStorage.getItem('person');
 该方法接收一个键作为参数,返回键名对应的值
 (3).xxxStorage.removeItem('key');
 该方法接收一个键名作为参数,并把该键名从存储中删除
 (4).xxxStorage.clear();
 该方法会清空存储中的所有数据
 4.备注:
  1).SessionStorage存储的内容会随着浏览器窗口的关闭而消失
  2).LocalStorage存储的内容,需要手动清除才会消失
  3).xxxStorage.getItem(xxx)如果xxx对应的value获取不到,那么getItem的返回值是null
  4).JSON.parse(null)的结果依然是null

## 组件的自定义事件
 父组件是使用props传递数据给子组件,但如果子组件要把数据传递回去,就需要使用自定义事件
 使用v-on绑定自定义事件,每个Vue实例都实现了事件接口,即:
    使用$on(eventName)监听事件
    使用$emit(eventName)触发事件
 另外父组件可以在使用子组件的地方直接用v-on来监听子组件触发的事件
 1.一种组件间通信的方式,适用于:子组件===>父组件
 2.使用场景:A是父组件,B是子组件,B想给A传数据,那么就要在A中给B绑定自定义事件(事件的回调在A中)
 3.绑定自定义事件:
   1).第一种方式,在父组件中: <Demo @atguigu = "test"/>或<Demo v-on:atguigu = "test"/>
   2).第二种方式,在父组件中:
     <Demo ref = "demo"/>
     ......
     mounted(){
       this.$refs.xxx.$on('atguigu',this.test)
     }
   3).若想让自定义事件只能触发一次,可以使用once修饰符或$once方法
  4.触发自定义事件:this.$emit('atguigu',数据)
  5.解绑自定义事件:this.$off('atguigu')
  6.组件上也可以绑定原生DOM事件,需要使用native修饰符
  7.注意:通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时,回调要么配置在methods中要么用箭头函数,否则this指向会出现问题
 
## 全局事件总线
 1.一种组件间通信的方式,适用于任意组件间通信
 2.安装全局事件总线
    new Vue({
        ......
        beforeCreate(){
            Vue.prototype.$bus = this  //安装全局事件总线,$bus就是当前应用的vm
        },
        ......
    )}
 3.使用事件总线
    1).接收数组:A组件想接收数据,则在A组件中给$bus绑定自定义事件,事件的回调留在A组件自身
    methods(){
        demo(data){......}
    }
    ......
    mounted(){
        this.$bus.$on('xxx',this.demo)
    }
    2).提供数据:this.$bus.emit('xxx',数据)
 4.最好在beforeDestroy钩子中,用$off解绑当前组件所用到的事件
 
## 消息订阅与发布
 1.一种组件间通信方式,适用于任意组件间通信
 2.使用步骤:
    1).安装pubsub: npm i pubsub-js
    2).引入: import pubsub from 'pubsub-js'
 3.接收数据:
    methods(){
        demo(data){...}
    }
    ...
    mounted(){
        this.pid = pubsub.subscribe('xxx',this.demo)
    }
 4.提供数据: pubsub.publish('xxx',数据)
 5.最好在beforeDestroy钩子中,用Pubsub,unsubscribe(pid)去取消订阅
 
## nextTick
 1. 语法: this.$nextTick(function(){})
 2. 作用: 在下一次DOM更新结束后再执行其指定的回调
 3. 什么时候用: 当改变数据后,要基于更新后的DOM进行某些操作时,要在$nextTick所指定的回调函数中执行

## Vue封装的过度与动画
 1.作用:在插入,更新,或移除DOM元素时,在合适的时候给元素添加样式类名
 2.v-enter ---->  v-enter-to   v-leave  ---->  v-leave-to
           Enter                        Leave
        v-enter-active              v-leave-active
 3.写法:
    1).准备好样式
        元素进入的样式:
            1.v-enter:进入的起点
            2.v-enter-active:进入过程中
            3.v-enter-to:进入的终点 
        元素离开的样式:
            1.v-leave:离开的起点 
            2.v-leave-active:离开过程中 
            3.v-leave-to:离开的终点
    2).使用<transition>包裹要过度的元素并配置name属性
    <transition name="hello">
        <h1 v-show="isShow">你好啊!</h1>
    </transition>
    3).备注:若有多个元素需要过度,则需要使用<transition-group>,且每个元素都要指定key值

## Vue脚手架配置代理
    
 方法一:
    在Vue.config.js中添加如下配置
        devServer:{
            proxy:"http://localhost:5000"
        }
    说明:
     1.优点:配置简单,请求资源时直接发给前端(8080)即可
     2.缺点:不能配置多个代理,不能灵活的控制请求是否走代理
     3.工作方式:若按照上述配置代理,当请求了前端不存在的资源时,那么该请求会转发给服务器(有限匹配前端资源)
  方法二:
    编写Vue.config.js配置具体代理规则:
     devServer:{
         proxy: {
             '/atguigu': {  //匹配所有以'/atguigu'开头的请求路径
             target: 'http://localhost:5000', //代理目标的基本路径
             pathRewrite: {'^/atguigu':''},
             ws: true, //用于支持websocket
             changeOrigin: true //用于控制请求头中的host值
             },
             '/demo': {
                 target: 'http://localhost:5001',
                 pathRewrite: {'^/demo':''},
                 /*ws: true, //用于支持websocket
                 changeOrigin: true //用于控制请求头中的host值*/
                 /* 
                    changeOrigin设置为true时,服务器收到的请求头中的host为:localhost:5000
                    changeOrigin设置false时,服务器收到的请求头中的host为:localhost:8080
                    changeOrigin默认值为true
                 */
             },
         }
     }
    说明:
        1.优点:可以配置多个代理,且可以灵活的控制请求是否走代理
        2.缺点:配置略微繁琐,请求资源时必须加前缀
 
## 插槽
 1.作用:让父组件可以向子组件指定位置插入html结构,也是一种组件间通信的方式,适用于父组件===>子组件
 2.分类:默认插槽,具名插槽,作用域插槽
    默认插槽:
        父组件中:
            <Category>
                <div>html结构1</div>
            </Category>
        子组件中:
            <template>
                <div>
                    <!--定义插槽-->
                    <slot>插槽默认内容</slot>
                </div>
            </template>
    具名插槽:
        父组件中:
             <Category>
                <template slot="center">
                    <div>结构1</div>
                </template>
             </Category>
             <Category>
                <template v-slot:footer>
                    <div>结构2</div>
                </template>
             </Category>
        子组件中:
            <template>
                <div>
                    <!--定义插槽-->
                    <slot name="center">插槽默认内容</slot>
                    <slot name="footer">插槽默认内容</slot>
                </div>
            </template>
    作用域插槽:
        1.理解:数据在组件的自身,但根据数据生成的结构需要组件的使用者来决定(games的数据在Category组件中,
            但使用数据所遍历的结构由App组件决定)
        2.具体编码
        父组件中:
            <Category title="游戏">
              <template scope="atguigu">
                <!--生成的是ul列表-->
                <ul>
                  <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                </ul>
              </template>
            </Category>
            <Category title="游戏">
              <template scope="{games}">
                <!--生成的是ol列表-->
                <ol>
                  <li style="color: red" v-for="(g,index) in games" :key="index">{{g}}</li>
                </ol>
              </template>
            </Category>
        子组件中:
            <template>
              <div class="category">
                <h3>{{title}}分类</h3>
                <!--  定义一个插槽,等组件使用者填充  -->
                <slot :games="games">默认内容</slot>
              </div>
            </template>
            <script>
              export default {
                name:'Category',
                props:['title'],
                data(){
                  return {
                    games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                  }
                }
              }
            </script>
 
## Vuex
 Vuex五个核心属性:
    state:定义Vuex的数据的地方 为单一状态树,在state中定义需要管理的字符串,数组,对象等
    actions:定义异步延迟的方法 可以提交mutation,在action中也可以执行store.commit,而且action中可以有任何的异步操作,在页面中如果要调用这个action,
 则需要执行store.dispatch
    mutations:唯一可以修改state数据的方法  类似事件,每个mutation都有一个字符串类型的事件类型和一个回调函数,需要改变state的值就要在回调函数中改变,
 要执行这个回调函数就需要执行一个相应的调用方法:store.commit
    getters:从现有state数据中计算出新的数据,类似vue中的计算属性,对state的数据进行计算(会被缓存) 当需要从store中的state中派生出一些状态,那么
 就需要使用getter,接收state作为第一个参数,返回值会根据它的依赖被缓存起来,只有getter中的依赖值(state中的某个需要派生状态的值)发生改变的时候才会
 被重新计算
    modules:模块化管理仓库,当state中很复杂臃肿的时候,module可以将store分隔成模块,每个模块拥有自己的state,actions,mutations,getters甚至是嵌套子模块  
 1.概念:
    在Vue中实现集中式状态(数据)管理的一个Vue插件,对Vue应用中多个组件的共享状态进行集中式的管理
 (读/写),也是一种组件间通信的方式,且适用于任意组件间通信
 2.何时使用:
    多个组件需要共享数据时
 3.搭建Vuex环境
    1).创建文件: src/store/index.js
        //引入Vuex
        import Vuex from 'vuex'
        import Vue from "vue";
        //应用Vuex插件
        Vue.use(Vuex)
        //准备actions  用于响应组件中的动作
        const actions= {}
        //准备mutations 用于操作数据(state)
        const mutations= {}
        //准备state 用于存储数据
        const state= {}
        //创建并暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state,
        })
    2).在main.js中创建vm时传入store配置项
        ......
        //引入store
        import store from './store'
        ......
        //创建vm
        new Vue({
            el:'#app',
            render: h => h(App),
            store
        )}
 4.基本使用
    1).初始化数据,配置mutation,操作文件store.js
    //引入Vuex
    import Vuex from 'vuex'
    import Vue from "vue";
    //应用Vuex插件
    Vue.use(Vuex)
    //准备actions  用于响应组价中的动作
    const actions= {
    /*jia(conText,value){
        console.log('action中的jia被调用了')
        conText.commit('JIA',value)
      },
    jian(conText,value){
        console.log('action中的jian被调用了')
        conText.commit('JIAN',value)
    },*/
    jiaOdd(conText,value){
        console.log('action中的jiaOdd被调用了')
        if(conText.state.sum % 2){
            conText.commit('JIA',value)
        }
    },
    jiaWait(conText,value){
        console.log('action中的jiaWait被调用了')
            setTimeout(()=>{
                conText.commit('JIA',value)
            },500)
        }
    }
    //准备mutations 用于操作数据(state)
    const mutations= {
        JIA(state,value){
            console.log('mutations中的JIA被调用了')
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的JIAN被调用了')
            state.sum -= value
        },
    }
    //准备state 用于存储数据
    const state= {
        sum:0 //当前的和
    }
    //创建并暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state,
    })
    2).组件读取Vuex中的数据:$store.state.sum
    3).组件修改Vuex中的数据:$store.dispatch('action中的方法名',数据) 或 $store.commit('mutations中的方法名',数据)
   备注:若没有网络请求或其他业务逻辑(无异步操作需求),组件中也可以越过actions,即不写dispatch,直接编写commit
 
## getters的使用
 1.概念:当state中的数据需要经过加工后再使用时,可以使用getters加工(逻辑复杂且希望逻辑可以复用)
 2.在store.js中追加getters配置
 .......
 const getters = {
    bigSum(state){
        return state.sum * 10
    }
 }
 //创建并暴露store
 export default new Vuex.Store({
    ......
    getters
 })
 3.组件中读取数据 $store.getters.bigSum
 
## 四个map方法的使用
 1.mapState方法: 用于帮助我们映射state中的数据为计算属性
 2.mapGetters方法:用于帮助我们映射getters中的数据为计算属性
 3.mapActions方法:用于帮助我们生成与actions对话的方法,即:包含$store.dispatch(xxx)的函数
 4.mapMutations方法:用于帮助我们生成与mutations对话的方法,即:包含$store.commit(xxx)的函数
 (1).使用mapState对象
 目的:简化获取store数据代码  把vuex中的state数据映射到组件的计算属性中
    import {mapState} from 'vuex'
    //使用mapState来生成计算属性,mapState函数返回值是对象:
    //使用mapState使用对象传参
    computed: mapState({
        //1.基础写法(state)代表就是vuex声明的state
        count: function(state){
            return state.count
        }
        //2.使用箭头函数
        count: state => state.count
        //3.vuex提供写法 传字符函数'count'等同于`state => state.count`
        count : 'count'
        //4.当你的计算属性需要依赖vuex中的数据 同时依赖组件中的data的数据时 为了使用this获取局部状态,必须使用常规函数
        count(state){
            return state.count + this.num
        }
    })
 (2).使用:mapState(数组)
    //2.mapState是一个数组 当映射的计算属性名称与state的子节点名称相同时,可以给mapState传一个字符串数组
    //computed:mapState(['count', 'total'])
 (3).如果组件拥有自己的计算属性,state的字段映射成计算属性
    //3.即在内部保留原有的计算属性,又要把store中的数据映射为计算属性
    computed: {
        //组件自己的计算属性:
        calcNum() {
            return this.num + 1
        }
        //把mapState返回值那个对象进行展开操作(把对象的属性添加到该位置) 由于...(对象展开运算符),可将mapState写在对象computed对象内部
        ...mapState(['count'])
    }
 
## 模块化+命名空间
 1.目的:让代码更好维护,让多种数据分类更加明确
 2.修改store.js
    //该文件用于创建Vuex中最核心的store
    //引入Vuex
    import Vuex from 'vuex'
    import Vue from "vue";
    import countOptions from './count'
    import personOptions from './person'
    Vue.use(Vuex)
    //创建并暴露store
    export default new Vuex.Store({
        modules:{
            countAbout:countOptions,
            personAbout:personOptions
        }
    })
 3.开启命名空间后,组件中读取state数据  namespace:true 
    //方式一:自己直接读取
    this.$store.state.personAbout.list
    //方式二:借助mapState读取
    ...mapState('countAbout',['sum','school','subject']),
 4.开启命名空间后，组件中读取getters数据：
    //方式一：自己直接读取
    this.$store.getters['personAbout/firstPersonName']
    //方式二：借助mapGetters读取：
    ...mapGetters('countAbout',['bigSum'])
 5.开启命名空间后,组件中调用dispatch
    //方式一：自己直接dispatch
    this.$store.dispatch('personAbout/addPersonWang',person)
    //方式二：借助mapActions：
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
 6.开启命名空间后，组件中调用commit
    //方式一：自己直接commit
    this.$store.commit('personAbout/ADD_PERSON',person)
    //方式二：借助mapMutations：
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

 注意:存储在vuex中的状态,刷新页面会丢失,为了解决刷新页面的丢失问题,有了数据持久化,最简单的方法是利用插件vuex-persistedState
    cnpm install vuex-persistedState -S 
    const store = new Vuex.Store({
        ...,
        plugins: [createPersistedState({
            storage: sessionStorage,
            key: "token"
        })] //会自动保存创建的状态,刷新后还在
    })
 
## 路由
 1.理解:一个路由(route)就是一组映射关系(key-value),多个路由需要多个路由器(router)进行管理
 2.前端路由:key是路径,value是组件
 3.基本使用:
    1).安装vue-router,命令 npm i vue-router
    2).应用插件:Vue.use(VueRouter)
    3).编写router配置项
        //该文件专门用于创建整个应用的路由器
        import VueRouter from "vue-router";
        //引入组件
        import About from "@/components/About.vue";
        import Home from "@/components/Home.vue";
        //创建一个路由器
        export default new VueRouter({
        routes:[
            {
                path:'/about',
                component:About
            },
            {
                path:'/home',
                component:Home
            }
        ]
        })
    4).实现切换(active-class可配置高亮样式)
        <router-link active-class="active" to="/about">About<router-link>
    5).指定展示位置
        <router-view></router-view>
 4.几个注意点
    1).路由组件通常存放在pages文件夹,一般组件通常存放在components文件夹
    2).通过切换,"隐藏"了的路由组件,默认是被销毁的,需要的时候再去挂载
    3).组件都有自己的$route属性,里面存储着自己的路由信息
    4).整个应用只有一个router,可以通过组件的$router属性获取到
        

## 多级路由(嵌套路由)
 1.配置路由规则,使用children配置项
    routes:[
    /*一级路由*/
        {
            path:'/about',
            component:About
        },
        {
        path:'/home',
        component:Home,
        children:[
            {
                path:'news',
                component:News,
            },
            {
                path:'message',
                component:Message,
            },
        ]
    ]
 2.跳转(要写完整路径)
    <router-link to="/home/news">News</router-link>
 
## 路由的query参数
 1.传递参数
    <!--跳转并携带query参数,to的字符串写法-->
    <router-link :to="/home/message/detail?id=666&title=你好啊!">跳转</router-link>
    <!--跳转并携带query参数,to的对象写法-->
    <router-link
        :to="{
            path:'home/message/detail',
            query:{
                id:666,
                title:'你好'
            }
        }"
    >跳转</router-link>
 2.接收参数:
    $route.query.id
    $route.query.title
 
## 命名路由
 1.作用:简化路由的跳转
 2.使用:
    1).给路由命名
        routes:[
            {
                name:'hello',//给路由命名
                path:'/about',
                component:About
            },
        }
    2).简化路由
    <!--简化前,需要写完整的路径-->
    <router-link to="/demo/test/welcome">跳转</router-link>
    <!--简化后,直接通过名字跳转-->
    <router-link :to="{name:'hello'}">跳转</router-link>
    <!--简化写法配合传递参数-->
    <router-link
    :to="{
    name:'hello',
    query:{
    id:666,
    title:'你好'
    }
    }"
    >跳转</router-link>
 
## 路由的params参数
 1.配置路由,声明接收params参数
 {
    path:'/home',
    component:Home,
    children:[
        {
            path:'news',
            component:News,
        },
        {
            component:Message,
            children:[
                name:'xiangying',
                path:'detail/:id/:title', //使用占位符声明接收params参数
                component:Detail
            ]
        }
    ]
 }
 2.传递参数
    <!--跳转并携带params参数,to的字符串写法-->
    <router-link :to="/home/message/detail/666/你好">跳转</router-link>
    <!--跳转并携带params参数,to的对象写法-->
    <router-link
        to:="{
            name:'xiangqing',
            params:{
                id:666,
                title:'你好',
            }
        }"
    >跳转</router-link>
 特别注意:路由携带params参数时,若使用to的对象写法,则不能使用path配置项,必须使用name配置
 3.接收参数:
    $route.params.id
    $route.params.title
 
 传参可以使用params和query参数,params参数和query参数的区别:
    引入方式不同,query要用path而params要用name
    params是路由的一部分,必须在路由后面添加参数名,query是拼接在url后面的参数,没有也没关系
    url不同,直白说query相当于get请求,页面跳转的时候可以在地址栏看到请求参数,而params相当于post请求,参数不会在地址栏中显示

## 路由的props配置
 作用:让路由组件更方便的收到参数
 {
    name:'xiangqing',
    path:'detail/:id',
    component:Detail,
    //第一种写法:props值为对象,该对象中所有的key-value的组合最终都会通过props传给Detail组件
    //props:{a:900}
    //第二种写法:props值为布尔值,布尔值为true,则把路由收到的所有params参数通过props传给Detail组件
    //props:true
    //第三种写法:props值为函数,该函数返回的对象中每一组key-value都会通过props传给Detail组件
    props(route){
        return{
            id:route.query.id,
            title:route.query.title
        }
    }
 }
 
## <router-link>的replace属性
 1.作用:控制路由跳转时操作浏览器历史记录的模式
 2.浏览器的历史记录有两种写入方式:分别为push和replace,push是追加历史记录,replace是替换当前记录,路由跳转时候默认为push
 3.如何开启replace模式:<router-link replace ......>News</router-link>
 
## 编程式路由导航
 1.作用:不借助<router-link>实现路由跳转,让路由跳转更加灵活
 2.具体编码:
    //$router的两个API
    //回退到上一次记录
    this.$router.push({
        name:'xiangqing',
        params:{
            id:xxx,
            title:xxx
        }
    })
    //替换掉了历史记录,不可以回退到上一次记录
    this.$router.replace({
        name:'xiangqing',
        params:{
            id:xxx,
            title:xxx
        }
    })
    this.$router.forward() //前进
    this.$router.back() //后退
    this.$router.go() //可前进也可后退
 实际上<router-link :to="...">(声明式) 等同于调用 router.push(...)(编程式)
## 缓存路由组件
 1.作用:让不展示的路由组件保持挂载,不被销毁
 2.具体编码:
    <keep-alive include="News">
        <router-view></router-view>
    </keep-alive>
 
## 两个新的声明周期钩子
 1.作用:路由组件所独有的两个钩子,用于捕获路由组件的激活状态
 2.名字:
    activated:路由组件被激活时触发
    deactivated:路由组件失活时触发
 
## 路由守卫
 1.作用:对路由进行权限控制
 2.分类:全局守卫,独享守卫,组件内守卫
 3.全局守卫:
    //全局前置路由守卫--初始化时和每次路由切换之前被调用
    //第一个参数to,包含的内容是切换后的路由对象,也就是跳转后的路由对象
    //第二个参数from,包含的内容是切换前的路由对象,也就是跳转前的路由对象
    //第三个参数next(),是否往下执行,如果不写则路由不会跳转,操作将会终止
    router.beforeEach((to,from,next)=>{
        console.log('前置路由守卫',to,from)
        if(to.meta.isAuth){ //判断是否需要鉴定权限 meta:{isAuth:true} 判断如果在路由上meta.isAuth为true则开始校验  
            //路由元信息meta:有时希望将任意信息附加在路由上,如过渡名称,谁可以访问路由等,这些事情可以通过接收属性对象的meta属性来实现,并且它可以在
            //路由地址和导航守卫上都被访问到,定义路由的时候可以配置meta字段
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
 4.独享守卫
    /*独享路由守卫只有前置 可以和全局路由守卫配合使用*/
    beforeEnter:(to,from,next)=>{
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
    },
 5.组件内守卫:
    //进入守卫:通过路由规则,进入该组件时被调用
    beforeRouteEnter(to,from,next){
    },
    //离开守卫:通过路由规则,离开该组件时被调用
    beforeRouteLeave(to,from,next){
    }
 
## 路由器的两种工作模式
 const createRouter = () => new Router({
    ...
    mode:'history'
    ...
 })
 1.对于一个url来说,什么是hash值  --#及其后面耳朵内容就是hash值
 2.hash值不会包含在HTTP请求中,即:hash值不会带给服务器
 3.hash模式: 使用URL的hash来模拟一个完整的url  http://localhost:8080/#/home
    1).地址中永远带着#号,不美观
    2).若以后将地址通过第三方手机app分享,若app检验严格,则地址会被标记为不合法
    3).兼容性较好
 4.history模式: 美化后的hash模式,路径中不包含'#',依赖于Html5的history api
    1).地址干净,美观
    2).兼容性和hash模式相比略差
    3).应用部署上线时需要后端人员支持,解决刷新页面服务器端404的问题

history模式下打包后的代码刷新后会报404
    将history模式下打包的代码放置在服务器运行,出错:浏览器一刷新就会出现页面丢失的问题
    原因:
        第一次发送请求时,浏览器会默认在url后加一个'/',访问到服务器的index.html文件,随后返回index.html文件给浏览器,浏览器拿到数据后开始渲染,
    渲染发现index.html文件里有外链的js和css,发起第二次请求拿到某个js文件,拿到js文件后发现js文件里有个逻辑,没有登录就调到login,刷新后就表示直接去
    服务器中找login页面,而服务器里面时没有login页面的,所以报404
        而hash模式用#隔开,浏览器发送请求时服务器会忽略后面的内容
    解决方式:让后端配置处理,将地址访问做映射,而在开发中脚手架已经帮忙做好了处理,所以在开发中不会受到影响
