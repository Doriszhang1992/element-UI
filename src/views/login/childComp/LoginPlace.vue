<template>
  <div class="place">
 <tab-control :title="['账号登录','验证码登录']" @tabClick="tabClick" />
 <email v-if="EmailActive" />
 <phone v-else-if="phoneActive"/>
  <div class="bottom">
      <span class="left" @click="registerClick">我要注册</span>
      <span class="right" @click="forgetClick">忘记密码？</span>
    </div>
  </div>
</template>

<script>
import TabControl from 'components/tabcontrol/TabControl'
import Email from './Email.vue'
import Phone from './Phone.vue'
export default {
  data(){
   return {
     EmailActive:true,
     phoneActive:false
   }
  },
components:{
 TabControl,
 Email,
 Phone
},
methods:{
 tabClick(index){
  switch(index){
    case 0:
     this.EmailActive=true ,
     this.phoneActive=false
      break
    case 1:
     this.phoneActive=true ,
    this.EmailActive=false
      break 
  }
  //console.log(index)
 },
  registerClick(){
   this.$router.push('/login/register')
  },
  forgetClick(){
      this.$router.push('/login/changepassword')
  }
 
}
}
</script>

<style scoped>
.place{
  width:502px;
  height:560px;
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.3),0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius:15px;
  position:fixed;
  right:8.5%;
  top:20%;
  text-align: center;
}
.login-top{
 margin:20px auto;
 position:absolute;
 left:50%;
 transform:translate(-50%)
}
.bottom{
 color:red;
 width:374px;
 height:40px;
 /* background-color: grey; */
position:absolute;
left:66px;
cursor: pointer;
}
</style>