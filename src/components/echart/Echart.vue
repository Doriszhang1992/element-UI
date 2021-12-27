<template>
  <div class="echart" id="echart-line" :style="{float:'left',width:'1514px',height:'320px'}">

  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
methods:{
  initChart(name,xData,yData){
    let getchart =echarts.init(document.getElementById('echart-line'))
    var option={
      tooltip:{
        trigger:'axis'
      },
      legend:{
        data:[name],
        top:'5%',
        right:'20%'
      },
      grid:{
        top:'15%',
        left:'5%',
        right:'5%',
        bottom:'11%',
        containLabel:true
      },
      xAxis:{
        type:'category',
        boundaryGap:false,
        data:xData
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:name,
          type:'line',
          stack:'总量',
          data:yData
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

<style>

</style>