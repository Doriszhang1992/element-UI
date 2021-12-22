<template>
  <div class="home-page">
    <div class="bgc">
      <div class="grey"></div>
      <div class="white"></div>
    </div>
   <top-title />
   <left-menu class="menu"/>
   <perforamnce class="performance"/>
  </div>
</template>

<script>
import TopTitle from './childComp/TopTitle.vue'
import Perforamnce from './childComp/Performance.vue'
import LeftMenu from './childComp/LeftMenu.vue'
export default {
components:{
  TopTitle,
  Perforamnce,
  LeftMenu
}
}
</script>

<style scoped>
.home-page{
 height:100vh;
 width:100%;
background-color: #f0f7ff;

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

.performance{
  position: relative;
  right:-361px;
}
.menu{
  position: absolute;
 
}
</style>