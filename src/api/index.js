//这个模块用于：API统一管理
import requests from './request.js'
import mockRequests from './mockAjax.js'
import trade from '@/store/trade.js'
//三级联动接口
///api/product/getBaseCategoryList   get 无参数

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})
//发请求 返回Promise对象

//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')
//获取包裹数据
export const reqPackageList = () => mockRequests.get('/package')

//获取搜索search数据 地址/api/list  post 请求需要带参数
//获取搜索模块数据的接口，给服务器传递一个默认参数至少是一个空对象
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

//获取产品详情信息接口 URL: /api/item/{skuId}       方式get 
export const  reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get',})

//将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{skuId}/{skuNum}  POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post",})

//获取购物车列表数据接口
// /api/cart/cartList method:get
export const reqCartList =()=> requests({url:'/cart/cartList',method:"get",})

//删除购物产品的接口
// /api/cart/deleteCart/{skuId}  method:"delete"
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改购物车勾选
// url /api/cart/checkCart/{skuId}/{isChecked} method:get
export const reqUpdateCheckedById = (skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
//  URL /api/api/user/passport/sendCode/{phone}
export const reqGetCode= (phone) =>requests({url:`/user/passport/sendCode/${phone}`,method:'get'}) 

//注册
//url /user/passport/register method:post 
export const reqUserRegister = (data)=>requests({url:`/user/passport/register`,data,method:'post'})

//登录
// url: /user/passport/login   method :post phone password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,data,method:'post'})

//获取用户信息  带token
///user/passport/auth/getUserInfo  /user/passport/auth/getUserInfo
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

//退出登录 
// user/passport/logout
export const reqLogout =()=>requests({url:`/user/passport/logout`,method:'get'})

//获取用户地址信息
// /user/userAddress/auth/findUserAddressList get
export const reqAddressInfo =()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取商品清单
//  /api/order/auth/trade get
export const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'})

//提交订单接口
///order/auth/submitOrder?tradeNo={tradeNo} method post 
export const reqSubmitOrder =(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取支付信息
// /payment/weixin/createNative/{orderId} get
export const reqPayInfo =(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取支付订单状态
///payment/weixin/queryPayStatus/{orderId} get
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取个人中心数据
///order/auth/{page}/{limit}
export const reqMyOrderList =(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})