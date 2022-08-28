import {reqGetSearchInfo} from "@/api"


//search模块的小仓库
const state={
    //仓库初始状态
    searchList:{}
}
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions={
   async getSearchList({commit},params={}){
    //reqGetSearchInfo 这个函数在调用获取服务器数据的时候至少传递一个参数 即空对象
    // params形参是当用户派发action的时候 第二个参数传递过来的
      let result = await reqGetSearchInfo(params)
      if(result.code==200){
        commit("GETSEARCHLIST",result.data)
      }
    }
}
//getters为简化数据而生 项目中主要作用：简化仓库中的数据 组件获取数据时就方便了
const getters={
    //当前仓库中的state 
    goodsList(state){
        //这样写因为：如果数据回来没问题，是个数组，若网络出现问题，goodsList可能返回的是undefined。searchList对象为空，空对象内的undefined
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}
export default{
    state,mutations,actions,getters
}
