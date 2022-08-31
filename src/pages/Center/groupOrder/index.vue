<template>
   <div class="order-right">
    <el-table
    :data="myPackage[0].packageList"
    border:true
    style="width: 100%">
    <el-table-column label="日期">
      <template slot-scope="scope">
        <span>{{scope.row.deliverDate}}</span>
      </template>
    </el-table-column>
    <el-table-column label="快递品牌">
      <template slot-scope="scope">
        <span>{{scope.row.deliveryBrand}}</span>
      </template>
    </el-table-column>
    <el-table-column label="快递单号">
      <template slot-scope="scope">
        <span>{{scope.row.deliverNum}}</span>
      </template>
    </el-table-column>
    <el-table-column label="快递员名字">
      <template slot-scope="scope">
        <span>{{scope.row.deliverMan}}</span>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
  //理清思路：上一级个人中心点击我的包裹跳到该页面路由，同时发出带参（订单号）请求：在该账号下的包裹数据。
  //先做静态页面： 完成页面样式 
  //包含的内容： 请求api  快递日期   快递品牌 快递单号 快递员姓名 
export default {
    name:'myPackage',
    data() {
      return {
        myPackage:[],
      }
    },
    mounted(){
      //获取包裹数据
      this.getPackage()
    },
    methods:{
      async  getPackage(){
          let result = await this.$API.reqPackageList()
          if(result.code==200){
            this.myPackage = result.data
          }
        },
        
    }
}
</script>

<style>

</style>