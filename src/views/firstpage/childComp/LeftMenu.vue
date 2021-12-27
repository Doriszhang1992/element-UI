<template>
<div class="menu">
  <div class="sdmenu">
    <div>
      <div class="home">
        <span>
          <img src="~assets/img/home.png" alt="">首页
        </span>
      </div>
    </div>
            <div >
            <span class="menuSpan"> <img src="~assets/img/cash.png" alt="">收银台</span>
            <a href="#">收银台1</a>
            <a href="#">收银台2</a>
            <a href="#">收银台3</a>
            <a href="#">收银台4</a>
            <a href="#">收银台5</a>
            <a href="#">收银台6</a>
        </div>
        <div class="collapsed ">  
            <span class="menuSpan"> <img src="~assets/img/crown.png" alt="">会员管理</span>
            <a href="#">会员1</a>
            <a href="#">会员2</a>
            <a href="#">会员3</a>
        </div>
        <div class="collapsed ">
            <span class="menuSpan"> <img src="~assets/img/anaylize.png" alt="">数据看板</span>
            <a href="#">看板1</a>
            <a href="#">看板2</a>
            <a href="#">看板3</a>
        </div>
        <div class="collapsed ">     
            <span class="menuSpan">  <img src="~assets/img/personel.png" alt="">人员管理</span>
            <a href="#">小A上午来的</a>
            <a href="#">小B</a>
            <a href="#">小C</a>
            <a href="#">小D</a>
        </div>
  </div>
  </div>
</template>

<script>
import menu from 'common/tool.js'
export default {
mounted(){
  menu()
}
}
</script>

<style scoped>
 *{
            margin:0;
            padding:0;
        }
        .menu{
          height:calc(100vh - 102px);
          background-color: #f0f2f3;
        }
        .sdmenu{
            width:340px;
            margin:0px auto;
           box-shadow: 2px 0px 2px #f0f2f3;
        }
        
        .sdmenu div{
           background-color: #f0f2f3;
            overflow: hidden;      
        }
        .sdmenu div.collapsed{
            height:88px; 
        }
        .sdmenu div.collapsed .menuSpan{
            background:url(~assets/img/collapsed.gif) no-repeat 300px center ;
        }
        .sdmenu div .home{
            position: relative;
            left:20px;
            width:280px;
            height:50px;
            line-height: 50px;
            border-radius: 5px;
            margin-top:50px;
            background-color: #196da0;
            box-shadow: 3px 2px 4px #ddd;
        }
        .sdmenu div .home span{
            color:#fff;
            
            font-size: 20px;
            padding-left: 36px;
        }
        .sdmenu div .home span img{
            position: relative;
            top:5px;
          margin-right:15px;
        }
        .menuSpan{
            display:block;
            color:#196da0;
            font-size: 20px;
            padding-left: 56px;
            line-height: 88px;
            border-bottom:1px solid #ddd;
            cursor: pointer;
            background:url(~assets/img/expanded.gif) no-repeat 300px center;
        }
        .menuSpan img{
          position:relative;
          top:5px;
          margin-right:15px;
        }
        .sdmenu div a{
            display:block;
           border: 0;
			text-decoration: none;
            color:#196da0;
            font-size: 16px;
            background-color:#eee;
           padding:15px 86px;
           border-bottom:1px solid #ddd;	
        }
        .sdmenu div a:hover{
            color:white;
            background:#196da0 url(~assets/img/linkarrow.gif) no-repeat right center;
        }
</style>