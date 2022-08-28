import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api"

const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions ={
    //获取购物车列表数据
  async  getCartList({commit}){
           let result   =   await reqCartList()
           if(result.code==200){
            commit('GETCARTLIST',result.data)
           }
    },
    //删除购物车某一产品
  async  deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code ==200){
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    //修改购物车勾选状态
      async  updateCheckedById({commit},{skuId,isChecked}){
                let result= await reqUpdateCheckedById(skuId,isChecked)
                if(result.code==200){
                    return 'ok'
                }else{
                    return Promise.reject(new Error('faile'))
                }
        },
        //删除全部勾选的产品
        deleteAllCheckedCart({dispatch,getters,}){
            //context 上下文 ：小仓库，commit 提交mutation 修改state getters 计算属性 dispatch
            //获取购物车中全部的产品
            let PromiseAll = [ ]
            getters.cartList.cartInfoList.forEach(item=>{
             let Promise =  item.isChecked == 1 ? dispatch('deleteCartListBySkuId',item.skuId):''
             //将每一次返回的Promise添加到数组当中
             PromiseAll.push(Promise)
            })
            //只要数组内都成功就返回成功。
            return Promise.all(PromiseAll)
        },
        //修改全部产品状态
        updateAllCartIsChecked({dispatch,state},isChecked){
            let promiseAll = []
            state.cartList[0].cartInfoList.forEach(item=>{
              let Promise =  dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
              promiseAll.push(Promise)
            })
            //最终返回结果
            return Promise.all(promiseAll)
        }
}
const getters={
    //简化数据
    cartList(state){
        return state.cartList[0]||{}
    },
    // cartInfoList(state){
    //     return state.
    // }
}
export default{
    state,
    mutations,
    actions,
    getters,
}