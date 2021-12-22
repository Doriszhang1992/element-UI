<template>
  <div class="login">
<div class="title">
  熊猫大篆管理系统
</div>
 <login-place />
 
  </div>
</template>

<script>
import LoginPlace from './childComp/LoginPlace.vue'

export default {
components:{
  LoginPlace,
  

}
}
</script>

<style scoped>
.login{
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