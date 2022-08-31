//引入mockjs模块 
import Mock from 'mockjs'
//json默认对外暴露
import banner from './banner.json'
import floor from './floor.json'
import myPackage from './myPackage.json'

//mock数据 第一个参数请求地址  第二 请求数据
Mock.mock("/mock/banner",{code:200,data:banner}) //轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor})

//我的包裹数据
Mock.mock("/mock/package",{code:200,data:myPackage})
