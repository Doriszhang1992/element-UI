<template>
  <div class="change" path="/login/changepassword">
     <div class="title">
  熊猫大篆管理系统
  </div>
  <change-place />
  </div>
</template>

<script>
import ChangePlace from './ChangePlace.vue'
export default {
components:{
  ChangePlace
}
}
</script>

<style scoped>
.change{
  height:100vh;
  background:url("~assets/img/background.jpg");
  position: relative;
}
.title{
  font-size:56px;
  color:#fff;
  text-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  position: absolute;
  right:10%;
  top:10%;
}
</style>