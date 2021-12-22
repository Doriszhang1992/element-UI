var menu=()=>{
//二级菜单
var menuSpan=document.querySelectorAll(".menuSpan");
var openDiv=menuSpan[0].parentNode;
for(var i=0;i<menuSpan.length;i++){
      menuSpan[i].onclick=function(){
        //   alert(1);
             var parentDiv=this.parentNode;
             toggleMenu(parentDiv);
             if(openDiv!=parentDiv&&!hasClass(openDiv,"collapsed")){
                toggleMenu(openDiv);
             }
             openDiv=parentDiv;
      };
};

function toggleMenu(obj){
    var begin=obj.offsetHeight;
             toggleClass(obj,"collapsed");
             var end=obj.offsetHeight;
             obj.style.height=begin+"px";
             move(obj,10,end,"height",function(){
                obj.style.height="";
             });
}

// 轮播，定时使用
function move(obj,speed,target,attr,callback){
 
   clearInterval(obj.timer);
   var current = parseInt(getStyle(obj,attr));
     if(current>target){
         speed=-speed;
     }
  obj.timer=setInterval(function(){
     //var speed=-10; 
    
     var oldValue=parseInt(getStyle(obj,attr));
       var newValue=oldValue+speed;

       if((newValue < target && speed < 0 )|| (newValue > target && speed > 0)){
         newValue=target;
       }
     obj.style[attr]=newValue+"px";
     
       if(newValue==target){
           clearInterval(obj.timer);
           callback && callback();;
       }

   } ,30);
 }
 function getStyle(obj,name){
if(window.getComputedStyle){
 return getComputedStyle(obj,null)[name];
}else{
 return currentStyle[name];
}
}


function addClass(obj,cn){
 if(!hasClass(obj,cn)){

   obj.className+= " "+cn;
 }
  //引号里一定要留有空格才行
  // obj.className += " "+cn;
}

function hasClass(obj,cn){
 var reg=new RegExp("\\b"+cn+"\\b");
 return reg.test(obj.className);
}

function removeClass(obj,cn){
var reg=new RegExp("\\b"+cn+"\\b");
obj.className=obj.className.replace( reg,"");
}

function toggleClass(obj,cn){
 if(hasClass(obj,cn)){
     removeClass(obj,cn);
 }else{
     addClass(obj,cn);
 }
}
// 事件的绑定
function bind(obj,eventstr,callback){
 if(obj.addEventListener){
     obj.addEventListener(eventstr,callback,false)
 }else{
     obj.attachEvent("on"+eventstr,function(){
         callback.call(obj);
     })
 }

}

}

export default menu