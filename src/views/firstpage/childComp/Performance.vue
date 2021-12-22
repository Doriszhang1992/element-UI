<template>
  <div class="performance">
<div class="top">
  <span class="rect"></span>
  <span class="title">业绩概览</span>
</div>
<div class="show">
<show  bgccolor="#60b8f7">
  <div slot="top">散客消费统计</div>
  <div slot="bottom">2121.99元</div>
</show>
<show  bgccolor="#ff787c">
  <div slot="top">会员消费统计</div>
  <div slot="bottom">2121.99元</div>
</show>
<show  bgccolor="#efa5e4">
  <div slot="top">业绩环比</div>
  <div slot="bottom">2121.99元</div>
</show>
<show  bgccolor="#fbc785">
  <div slot="top">散客消费统计</div>
  <div slot="bottom">2121.99元</div>
</show>
</div>
  </div>
</template>

<script>
import Show from './Show.vue'
export default {
components:{
  Show
}
}
</script>

<style scoped>
.performance{
  width:1514px;
  height:157px;
  background-color: #fff;
  margin:25px 0 40px 0;
  box-shadow: 10px 10px 12px #eee;
}
.top{
  padding-top:5px;
  padding-left:10px;
}
.rect{
  display: inline-block;
  width:7px;
  height:30px;
  background-color: var(--color-tint);
  margin-right:5px;
  vertical-align: middle;
}
.show{
  display:flex;
}
</style>