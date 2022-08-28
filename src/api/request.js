//axios二次封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入store
import store from '@/store'
//start 开始 done 结束
import 'nprogress/nprogress.css'
//创建axios实例
const requests = axios.create({
    //配置对象
    baseURL:'/api',//请求路径都带上api
    timeout:5000,
})
//请求拦截器 发请求之前todosomething

requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        //请求头添加一个字段 与后端商量
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //config：配置对象，其中headers属性为请求头

    //需要携带token给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调函数，响应拦截器在数据回来后todosomething
    //参考axios文档
    nprogress.done()
    return res.data
},(error)=>{
    //失败回调
    return Promise.reject(new Error('faile'))
})

export default requests