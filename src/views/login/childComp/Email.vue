<template>
  <div class="email">
    <div class="user">
    <input type="text" placeholder="用户名/邮箱" v-model="usermail">
    <img src="~assets/img/user.png" alt="">
    </div>
 

    <div class="password">
      <input type="password" placeholder="密码" v-model="password">
       <img src="~assets/img/lock.png" alt="">
    </div>
    <div class="code">
      <input type="text" placeholder="图形验证码" v-model="code">
       <img src="~assets/img/code.png" alt="">
    </div>
    <div class="check">
      <label  class="checkbox-re active">
      <input type="checkbox" >
      <span class="checkbox"></span>
      </label>
      <span> 记住密码</span>
      
    </div>
    <button @click="loginClick" :disabled="!usermail|| !password || !code" >立即登录</button>
   
  </div>
</template>

<script>

export default {
  data(){
    return{
    usermail:'',
    password:'',
    code:''
    }
  },
methods:{
  loginClick(){
  this.$router.push('/homepage')
    //console.log(this.usermail)
   
  }
}
}
</script>

<style scoped>
.email{
  position:relative;
  
}

input{
  border:1px solid #c7c7d6;
  width:374px;
  height:50px;
  margin-top:25px;
  padding-left:10px;
}
input::placeholder{
  color:#c7c7d6;
}

.code input{
  width:200px;
 position:relative;
 left:-12px;

}
.code img{
   position:relative;
 left:5px;
 top:15px;
}

input:focus{
  border:2px solid var(--color-tint);
  border-radius:5px;
}

.user img{
  position: absolute;
  top:35px;
  right:80px;
}
.password img{
   position: absolute;
  top:112px;
  right:80px;
}
.check{
  margin:20px auto;
  position: relative;
  left:-147px;
}
.checkbox-re  input[type='checkbox']{
  display:none;
}

.checkbox-re .checkbox{
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid #c7c7d6;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: 50%;
  top:2px;
}
.checkbox-re input[type='checkbox']:checked~span{
  background-image:url(~assets/img/download.svg);
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
   margin:40px 0 30px 0;
   cursor:pointer;
}

button:disabled{
   cursor:not-allowed;
   background-color: rgba(25,109,160,0.8);
}

</style>