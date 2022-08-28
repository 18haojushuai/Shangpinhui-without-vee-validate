<template>
  <div>
    <MyHeader></MyHeader>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在登录注册隐藏 -->
    <MyFooter v-show="$route.meta.show"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader/MyIndex.vue'
import MyFooter from './components/MyFooter/MyIndex.vue'

export default {
    components:{
      MyHeader,
      MyFooter,
      },
      mounted(){
                //通知VUEX发请求，存储于仓库当中
      this.$store.dispatch('categoryList')
      }
}
</script>

<style>

</style>
