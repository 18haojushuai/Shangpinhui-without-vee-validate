
//引用路由组件
import MyHome from '@/pages/MyHome/MyIndex.vue'
import Login from '@/pages/Login'
import Register from '@/pages/Register/index.vue'
import MySearch from '@/pages/MySearch/MyIndex.vue'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import Shopcart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'


export default [
    {
        path:'/center',
        component:Center,
        meta:{show:true},
        //二级路由
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            //重定向
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show:true},
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopcart',
        component:Shopcart,
        meta:{show:true},
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true},
    },
    {
        //detail后面的skuid是占位
        path:'/detail/:skuId?',
        component:Detail,
        meta:{show:true},
    }
    ,
    {
        path:'/home',
        component:()=>import('@/pages/MyHome/MyIndex.vue'),//路由懒加载
        meta:{show:true},
    }
    ,
    {
        path:'/search/:keyword?',
        component:MySearch,
        meta:{show:true},
        name:'search',
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false},
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false},
    },
    {
        path:'*',
        redirect:'/home'
    },
        ]