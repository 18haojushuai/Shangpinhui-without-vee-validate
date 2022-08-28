//引入API
import { reqCategoryList,reqFloorList,reqGetBannerList } from "@/api"
//home模块的小仓库
const state={
    //state默认数据
    categoryList:[],
    //轮播图数据
    bannerList:[],
    floorList:[]
}
const mutations={
    CATEGORTLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}

const actions={
    //通过API里面的接口函数调用
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code==200){
            commit('CATEGORTLIST',result.data)
        }
    },
    //获取轮播图数据
    async getBannerList({commit}){
       let result= await reqGetBannerList()
       if(result.code == 200){
        commit('GETBANNERLIST',result.data)
       }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code == 200){
            //提交mutation
            commit('GETFLOORLIST',result.data)
        }
    },
}
const getters={}
export default{
    state,mutations,actions,getters
}
