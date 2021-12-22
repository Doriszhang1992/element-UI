<template>
  <div class="register" path='/login/register'>
   <div class="title">
  熊猫大篆管理系统
</div>
<register-place />
  </div>
</template>

<script>
import RegisterPlace from './RegisterPlace.vue'
export default {
components:{
  RegisterPlace
}
}
</script>

<style scoped>
.register{
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
  top:5%;
}
</style>