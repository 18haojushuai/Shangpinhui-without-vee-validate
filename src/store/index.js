import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//引入模块仓库
import home from './home/index.js'
import search from './search/index.js'
import detail from './detail.js'
import shopcart from './shopcart.js'
import user from './user.js'
import trade from './trade.js'


//state 仓库存储数据的地方
const state = {}
//mutations 修改state的唯一手段
const mutations = {}
//action 处理action 书写自己的业务逻辑 处理异步 但不能修改state
const actions = {}
//getters为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}
export default new Vuex.Store({ //在main.js注册 
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }

})