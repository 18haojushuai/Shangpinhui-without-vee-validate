import Vue from 'vue'
import App from './App.vue'

// 注册三级联动全局组件
import TypeNav from './components/TypeNav/MyIndex.vue'
//注册轮播图
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui'
//不引入css样式将以文本形式展现在左下角
import 'element-ui/lib/theme-chalk/index.css';

// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
Vue.component(TypeNav.name,TypeNav)/* 全局组件名字+哪一个组件 */
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from './router/index.js'
//引入仓库
import store from './store'
//引入MockServer数据
import '@/mock/mockServe'
import "swiper/css/swiper.css"
import cry from '@/assets/images/cry.gif'
//引入懒加载
import VueLazyload from 'vue-lazyload'
import validate from '@/plugins/validate' //表单验证 可用elmui
Vue.use(VueLazyload,{
  //懒加载默认图片
  loading:cry
})
Vue.config.productionTip = false

//统一引入api所有请求函数
import * as API from '@/api'
new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store,
}).$mount('#app')
