<template>
  <div>
    <!-- 三级联动全局组件 已经是全局组件，不需要引用-->
    <TypeNav/>
    <ListContainer/>>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list='floor' />
    <Brand/>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from '@/pages/MyHome/ListContainer/MyIndex.vue'
import Recommend from '@/pages/MyHome/Recommend/MyIndex.vue'
import Rank from '@/pages/MyHome/Rank/MyIndex.vue'
import Like from '@/pages/MyHome/Like/MyIndex.vue'
import Floor from '@/pages/MyHome/Floor/MyIndex.vue'
import Brand from '@/pages/MyHome/Brand/MyIndex.vue'
import { mapState } from 'vuex'
export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
    },
  mounted(){
    //派发action，获取floor组件的数据
    this.$store.dispatch("getFloorList")

  },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList
    })
  }
}

</script>

<style>

</style>