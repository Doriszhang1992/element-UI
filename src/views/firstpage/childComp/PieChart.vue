<template>
  <div class="pie-chart">
<pie-template ref="pie"/>
  </div>
</template>

<script>
import PieTemplate from 'components/echart/PieTemplate'
export default {
  data(){
    return{
      valueData:[
        { value: 1048, name: '散客消费' },
        { value: 735, name: '会员消费' },
        { value: 580, name: '新客开卡' },
        { value: 484, name: '其他' },
       
      ]
    }
  },
components:{
  PieTemplate
},
mounted(){
 const {valueData}=this
  this.$refs.pie.initChart(valueData)
}
}
</script>

<style scoped>
.pie-chart{
   width:721px;
  height:280px;
  background-color: #fff;
  box-shadow: 0px 6px 12px #eee,0 6px 10px 0 #eee;
}
</style>