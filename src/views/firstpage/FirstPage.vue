<template>
  <div class="home-page">
    <div class="bgc">
      <div class="grey"></div>
      <div class="white"></div>
    </div>
   <top-title />
   <left-menu class="menu"/>
   <perforamnce class="performance"/>
   <curve-chart class="curve-chart"/>
   <pie-chart class="pie-chart"/>
   <bar-chart class="bar-chart" />
  </div>
</template>

<script>
import TopTitle from './childComp/TopTitle.vue'
import Perforamnce from './childComp/Performance.vue'
import LeftMenu from './childComp/LeftMenu.vue'
import CurveChart from './childComp/CurveChart.vue'
import PieChart from './childComp/PieChart.vue'
import BarChart from './childComp/BarChart.vue'
export default {
components:{
  TopTitle,
  Perforamnce,
  LeftMenu,
  CurveChart,
  PieChart,
  BarChart
}
}
</script>

<style scoped>
.home-page{
 height:100vh;
 width:100%;
background-color: #f0f7ff;
overflow: hidden;
}
.bgc{
  height:20px;
  display:flex;
}
.bgc .grey{
  width:340px;
  background-color:#f0f2f3;
  box-shadow: 2px 0px 4px #f0f2f3;
}
.bgc .white{
  flex:1;
  background-color: #fff;
}

.performance,.curve-chart,.pie-chart{
  position: relative;
  right:-361px;
}
.bar-chart{
   position: relative;
    right:-1130px;
    top:-280px;
}
.menu{
  position:absolute;
  left:0;
  
}
</style>