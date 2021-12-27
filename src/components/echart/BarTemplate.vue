<template>
  <div class="bar-template" id="bar-template" :style="{float:'left',width:'744px',height:'280px'}">

  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
methods:{
  initChart(dataAxis,dataY){
     let getchart=echarts.init(document.getElementById('bar-template'))
     var option={
        tooltip:{
        trigger:'item'
      },
       title:{
       subtext:'每日客流量统计(day)',
       left:'550px',
      top:'3%'
      },
       grid:{
         top:'15%',
        left:'15%',
        right:'15%',
        bottom:'15%',
       },
       xAxis:[{
         type:'category',
         axisLabel:{
           textStyle:{
             color:'#757575',
           },
         },
         offset:10,
         boundaryGap:false,
         splitLine:{
           show:false
         },
         data:dataAxis,
         axisLine:{
           show:false,
         },
         axisTick:{
           show:false,
         }
       }],
       yAxis:{
         type:'value',
         
         splitLIne:{
           show:false
         },
         axisLine:{
           show:false
         },
         axisTick:{
           show:false
         },
         axisLabel:{
           show:true
         }
       },
       dataZoom:[
         {
           type:'inside'
         }
       ],
       series:[
         {
           type:'bar',
           barWidth:16,//柱图宽度
           itemStyle:{
             normal:{
               barBorderRadius:12,
               color:{
                 type:'liner',
                 x:0,
                 y:0,
                 x2:0,
                 y2:1,
                 colorStops:[
                   {
                     offset:0,color:'#73c3fe'//0%处的颜色
                   },
                   {
                     offset:1,color:'#379ef5'//100%处的颜色
                   }
                 ],
                 globalGoord:true//缺省为false
               },
               label:{
                 show:true,
                 position:'top',
                 textStyle:{
                   color:'#222222'
                 },
                 formatter:function(params){
                   if(params.value==0){
                     return ''
                   }else{
                      return params.value
                   }
                 }
               },
             },
           },
           data:dataY
         }
       ]
     };
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