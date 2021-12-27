<template>
  <div class="bar-chart">
<bar-template ref="barchart"/>
  </div>
</template>

<script>
import BarTemplate from 'components/echart/BarTemplate'
export default {
  data(){
  return{
    dataAxis:['','12/20','12/21','12/22','12/23','12/24','12/25','12/26','12/27','12/28','12/29','12/30'],
    dataY:[0,220,350,110,380,450,220,300,486,325,111,230]
  }
  },
components:{
  BarTemplate
},
mounted(){
  const {dataAxis,dataY}=this
  this.$refs.barchart.initChart(dataAxis,dataY)
}
}
</script>

<style scoped>
.bar-chart{
  width:744px;
  height:280px;
  background-color: #fff;
  box-shadow: 0px 6px 12px #eee,0 6px 10px 0 #eee;
}
</style>