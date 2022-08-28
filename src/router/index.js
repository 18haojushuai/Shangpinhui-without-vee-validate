//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes' 
//使用插件
Vue.use(VueRouter)

//引入store
import store from '@/store'
// 重写push，保存VuwRouter原型对象push
 // call apply相同与区别 都可以调用函数一次，都可以篡改函数的上下弯一次  call与apply传递参数时，call用逗号隔开，apply传递数组
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace;
// 原来push方法，往哪里跳转
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location, () => {}, () => {}, )
    }
}
// 重写replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location, () => {}, () => {}, )
    }
}

//配置路由
let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to,from,savedPositon){
        //返回滚动条距离最上方像素
        return { y:0 }
    },
})

export default router;


//全局守卫： 前置守卫（路由跳转之前判断）
router.beforeEach( async (to,from,next)=>{
    //to:可以获取到你要跳转到那个路由信息
    //from 获取从哪个路由而来的信息
    //next 放行 next(path) 放行到指定路由 next(false)返回原来
    //用户登录了 才会有token 未登录一定不会有token
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if(token){
        //拒绝访问login
        if(to.path=='/login'){
            next('/home')
        }else{
            //登录了但是去的不是login
            if(name){
                next()
            }else{
                //没有用户信息,派发action存储用户信息再跳转
               try {
                await store.dispatch('getUserInfo')
                next()
               } catch (error) {
                //token失效 清除token 回到登录
                 await store.dispatch('userLogout')
                 next('/login')
               }
            }
        }
    }else{
        // next()//测试使用
        let toPath = to.path;
        if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
            next('/login?redirect='+toPath);
        } else {
            next();
        }
    }
})