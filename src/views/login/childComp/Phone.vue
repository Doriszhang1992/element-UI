<template>
  <div class="phone">
    <div class="user">
    <input type="text" placeholder="手机号码" v-model="phone">
    <img src="~assets/img/user.png" alt="">
    </div>
    <div class="message">
      <input type="text" placeholder="短信验证码" v-model="message">
       <button >获取</button>
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
    <button class="button" @click="loginClick" :disabled="! phone|| !message || !code">立即登录</button>
  </div>
</template>

<script>
export default {
   data(){
    return{
    phone:'',
    message:'',
    code:''
    }
  },
methods:{
  loginClick(){
    this.$router.push('/homepage')
  }
}
}
</script>

<style scoped>
.phone{
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
  cursor: pointer;

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
.button{
  width:374px;
  height:40px;
  border:none;
  border-radius:10px;
  background-color: var(--color-tint);
  color:#fff;
  font-weight:600;
   margin:40px 0 30px 0;
   cursor: pointer;
}
button:disabled{
   cursor:not-allowed;
   background-color: rgba(25,109,160,0.8);
}

</style>