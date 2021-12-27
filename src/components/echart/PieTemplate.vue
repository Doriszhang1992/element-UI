<template>
  <div class="pie-template" id="pie-chart-template" :style="{float:'left',width:'721px',height:'280px'}"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
methods:{
  initChart(valueData){
    let getchart=echarts.init(document.getElementById('pie-chart-template'))
    var option={
      tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '5%',
    left: 'center'
  },
  title:{
  text:'业绩分析',
  left:'center',
  top:'5%'
  },
  series: [
    {
      // name: 'Access From',
      type: 'pie',
      radius: ['30%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data:valueData
    }
  ]
    }
     getchart.setOption(option)
    window.addEventListener('resize',()=>{
      getchart.resize()
    }) 
  }
}
}
</script>

<style scoped>

</style>