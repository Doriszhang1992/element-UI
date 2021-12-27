<template>
  <div class="curve-chart">
    <span class="title">按人员</span>
     <span class="shop">按门店</span>
<echart ref="chart"/>
  </div>
</template>

<script>
import Echart from 'components/echart/Echart'

export default {
  data(){
  return{
    name:'人员分析',
    xData:['0','2','4','6','8','10','12','14','16','18','20','22','24','26','28','30'],
    yData:[30,132,80,156,166,189,80,78,50,146,500,700,380,550,120,360]
  }
  },
components:{
  Echart

},
mounted(){
  const {name,xData,yData}=this
  this.$refs.chart.initChart(name,xData,yData)
}
}
</script>

<style scoped>
.curve-chart{
  width:1514px;
  height:320px;
  background-color: #fff;
  box-shadow: 0px 6px 12px #eee,0 6px 10px 0 #eee;
  margin:25px 0;
}

.curve-chart span{
  padding-left:15px;
  position: relative;
  top:15px;
  color:#f7ce95;
  font-weight:600;
}
.curve-chart span.shop{
  color:#000;
}

</style>