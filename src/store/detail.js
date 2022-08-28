import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
//封装临时游客身份模块uuid--->生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    //游客临时身份
    uuid_token:getUUID()
}


const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}


const actions ={
    //获取产品信息action
   async getGoodInfo({commit},skuId){
       let result = await reqGoodsInfo(skuId)
       if(result.code==200){
        commit('GETGOODINFO',result.data)
       }
    },
    //将产品添加到购物车中或修改产品个数
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //加入购物车返回的结果
        //加入购物车以后发请求，将参数带给服务器
        //服务器写入数据成功并没有返回其他数据，返回code==200代表成功 不需要vuex存储数据
      let result =  await reqAddOrUpdateShopCart(skuId,skuNum)
      //执行该函数，返回的是Promise
      if(result.code==200){
        return 'ok'
      }else{
        //promise错误标记
        return Promise.reject(new Error('faile'))
      }
    }
}

//简化数据
const getters = {
    //路径导航简化数据
    categoryView(state){
        //state。goodInfo初始状态空对象  空对象的categoryView属性值undefined
        //当前计算出的categoryView至少是一个空对象， 不会有warn
        return state.goodInfo.categoryView||{}
    },
    //产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    //产品售卖属性的变化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
    
}


export  default{
    state,
    actions,
    mutations,
    getters
}