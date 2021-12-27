<template>
  <div class="show" :style="getStyle()" >
    <div class="top"><slot name="top"></slot></div>
     <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
export default {
props:[
  'bgccolor'
],
methods:{
  getStyle(){
    return 'background-color:'+this.bgccolor
  }
}
}
</script>

<style scoped>
.show{
  position: relative;
  width:298px;
  height:97px;
  color:#fff;
 margin:10px 35px;
 box-shadow: 6px 6px 8px #eee;
 cursor: pointer;
 transition-duration: 1s;
}
.show:hover{
  opacity:0.6;
 color:yellow;
}
.top{
   font-size:22px;
   margin:15px auto 5px auto;
   position:absolute;
  left:25px;
}
.bottom{
   font-size:30px;
   position:absolute;
   bottom:20px;
   left:70px;

}
</style>