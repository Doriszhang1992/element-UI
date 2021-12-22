<template>
  <div class="change-place">
 <div class="user">
    <input type="text" placeholder="手机号码">
    <input type="password" placeholder="密码">
    <input type="password" placeholder="确认密码">
    </div>
   <div class="code">
      <input type="text" placeholder="图形验证码">
       <img src="~assets/img/code.png" alt="">
    </div>
   <div class="message">
      <input type="text" placeholder="短信验证码" >
       <button >获取</button>
    </div>
    <button>密码修改</button>
    <button @click="backToClick">返回登录</button>
  </div>
</template>

<script>
export default {
methods:{
  backToClick(){
      this.$router.push('/login')
  }
}
}
</script>

<style scoped>
.change-place{
  width:502px;
  height:560px;
  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  border-radius:15px;
  position:fixed;
  right:8.5%;
  top:20%;
  text-align: center;
}
input{
  border:1px solid #c7c7d6;
  width:374px;
  height:50px;
  margin-top:25px;
  padding-left:10px;
}
.user input:first-of-type{
    margin-top:55px;
}
input::placeholder{
  color:#c7c7d6;
}
input:focus{
  border:2px solid var(--color-tint);
  border-radius:5px;
}
.code input{
  width:200px;
 position:relative;
 left:-12px;


}
.code img{
  position:relative;
 left:-5px;
 top:15px;
}
.message input{
width:120px;
 position: relative;
 left:-68px;

}
.message button{
  position: relative;
  right:-67px;
  background-color: var(--color-tint);
  width:120px;
  color:#fff;
  height:50px;
  border:none;

}
button{
  width:374px;
  height:40px;
  border:none;
  border-radius:10px;
  background-color: var(--color-tint);
  color:#fff;
  font-weight:600;
   margin:10px 0 15px 0;
   cursor: pointer;
}
</style>