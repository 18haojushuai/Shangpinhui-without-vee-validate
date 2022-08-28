<template>
  <div class="pagination">
    <!-- v-for可以遍历数组数字字符串对象 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" >1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-if="page >= startNumAndEndNum.start" 
    @click="$emit('getPageNo',page)"
    :class="{active:pageNo==page}"
    >{{page}}</button>
    

    <button v-if="startNumAndEndNum.end <totalPage -1">···</button>
    <button v-if="startNumAndEndNum.end <totalPage" @click="$emit('getPageNo',totalPage)" >{{totalPage}} </button>
    <button :disabled="pageNo == totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}}条</button>
  </div>
</template>

<script>
//第几页pageNo 每页多少条pageSize 页数total 
//需要计算：整个分页器一共多少条数据 分页器连续页面个数5/7【奇数】 pagesize
  export default {
    name: "Pagination",
    props:['pageNo','pageSize','total','continues'],
    computed:{
        totalPage(){
            //向上取整
            return Math.ceil(this.total/this.pageSize)
        },
        //计算连续页码起始与结束数字
        startNumAndEndNum(){
            //先定义2个变量
            let start = 0 
            let end = 0
            const { totalPage, continues, pageNo } = this;
            //错误现象，总页数没有连续页码多
            if(continues > totalPage){
                start = 1
                end   = totalPage
            }else{
                start = pageNo - parseInt(continues/2)
                end   = pageNo + parseInt(continues/2)
            }
            //start负数
            if(start < 1){
                start = 1 
                end = continues
            }
            //end大于total
            if(end > totalPage){
                end = totalPage
                start = totalPage - continues + 1
            }
            return { start, end };
        }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
  .active{
    background: skyblue;;
  }
</style>
