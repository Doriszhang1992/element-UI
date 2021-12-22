<template>
  <div class="top-title">
<span class="title">熊猫大篆</span>
<span class="time">会员到期时间:2021-12-31</span>
<span class="user">用户名-门店名</span>
<div class="avatar"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-title{
  color:#fff;
  width:100%;
  height:82px;
  line-height: 82px;
  background-color: var(--color-tint);
  position:relative;

}
.title{
  font-size:48px;
  padding-left:72px;
}
.user{
  font-size:28px;
  position:absolute;
  right:160px;
}
.time{
   position:absolute;
  right:360px;
}
.avatar{
  width:65px;
  height:65px;
  border-radius:50%;
  background-color: #fff;
  float:right;
  position:absolute;
 right:65px;
 top:8.5px;
  /* transform:translate(-50%); */

}
</style>