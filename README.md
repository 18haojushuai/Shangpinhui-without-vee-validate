# firstproject

# 项目创建时间 2022/8/11 23:30 目标：2022/9/1 前完成

项目开发日志

1.脚手架搭建

2.项目配置 无

3.静态页面注入 #MyFooter MyHeader

4.vue-router路由搭建 

  pages/views文件夹放置路由组件  component文件夹放置非路由组件
运用将index中routes内meta属性的T/ F，在App.vue文件中用v-show 根据meta 值隐藏

5.路由传参  声明式导航、编程式导航（更佳）

运用v-model监视在input内输入的keyword值{

  1.query参数
  2.params参数

}

重写了push、replace方法，解决了多次搜索飘红的问题

6.将Home拆分、TypeNav三级联动组件

三级联动使用范围广，需要注册为全局组件，即与Footer Header同级

Brand Footer Like ListContainer Rank Recommend 

7.二次封装AXIOS

参考中文文档

```
https://www.axios-http.cn/docs/interceptors
```

接口统一管理 

配置代理跨域webpack 有devserver配置

SRC目录下创建api 内有二次封装axios文件request.js，API统一管理index.js 

在main.js文件中 引入index中暴露的接口，（分别暴露加花括号）并调用

在vue.config.js中调用target

8.nprogress进度条使用（加载显示)

```
npm install --save nprogress
```

start done 开始结束 可以在nprogress.css内修改颜色

9、vuex状态管理库 vue2对应vuex版本为3

```
npm install vuex@3 
```

实现模块式开发

store文件夹中创建模块各自的index.js

在store根目录中的index引入各自的模块数据

10.TypeNav

在TypeNav内运用v-for遍历API中返回的三级数组的三级分类 删去写死的值替换为 插值表达式{{}} 

将样式hover展示改为JS操作

```
div内 :style="{ display:currentIndex==index?'block':'none' }
```

11.防抖、节流

引入lodash

```
import  throttle from 'lodash/throttle.js'
changeIndex: throttle(function(index){this.currentIndex = index},10) //只能ES5写法
```

12.三级联动路由跳转

声明式导航：router-link编程式导航push | replace

声明式导航在v-for下产生多个组件，会出现卡顿现象 依旧采用编程式导航

用编程式导航+事件的委派

确定点击的是a标签内的哪集分类

传递参数 query/params参数

在给路由传递参数的对象location中，其query、params参数需要合并、传递

在Header中，获得的是params参数中的keyword，同时if判断query参数，若有顺便合并，query是三级联动的数据

在TypeNav组件中，获得的是query参数即三级联动参数，若有

13.Mock模拟数据

  第一步:安装依赖包mockjs

  第二部：在src文件夹下创建一个文件夹，文件夹mock文件夹。

  第三步:准备模拟的数据
把mock数据需要的图片放置于public文件夹中！
比如:listContainer中的轮播图的数据
[
   {id:1,imgUrl:'xxxxxxxxx'}, 
   {id:2,imgUrl:'xxxxxxxxx'}, 
   {id:3,imgUrl:'xxxxxxxxx'}, 
]

  第四步：在mock文件夹中创建一个server.js文件
注意：在server.js文件当中对于banner.json||floor.json的数据没有暴露，但是可以在server模块中使用。
对于webpack当中一些模块：图片、json，不需要对外暴露，因为默认就是对外暴露。


  第五步:通过mock模块模拟出数据

通过Mock.mock方法进行模拟数据

  第六步:回到入口文件，引入serve.js
mock需要的数据|相关mock代码页书写完毕，关于mock当中serve.js需要执行一次，
如果不执行，和你没有书写一样的。



  第七步:在API文件夹中创建mockRequest【axios实例：baseURL:'/mock'】
专门获取模拟数据用的axios实例。

在开发项目的时候：切记，单元测试，某一个功能完毕，一定要测试是否OK



## 获取数据的原理解析： vuex+Ajax

### vuex内有：                                                                                  Backend API

### VC →（dispatch（‘方法名’，参数）函数）actions ↑（行动，内容为对象，对象内函数）→mutations（变化）→ state（状态）通过computed计算属性mapstate→vueComponent（vue组件）

Vuex需要一个store作为载体 

Vue Component通过dispath方法，传递动作函数名以及参数给一个store的vuex内的actions，actions本质为一对象，对象内函数同名被调用，函数可commit（调拨）给mutations（变化），mutation内函数同名有state属性。state将数据返回给VC，进行展示 若有确定参数，可以直接在VC内commit给mutation

若dispatch内没有传递参数只传递了函数名，actions将从Backend API中获取 参数，即数据

## 14.Swiper 轮播图

安装swiper，用5

1引入依赖包 2页面中需要有结构 3初始化结构 4mock数据

用watch&nextTick监听bannerList属性的属性值变化，

nextTick：下次DOM更新循环结束后，执行延迟回调，修改数据之后使用这个方法
