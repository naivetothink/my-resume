function text(){

var x=document.getElementById("x");
var y=document.getElementById("y");
var a=document.getElementById("a");
var contain=document.getElementsByClassName("contain")[0];


onmousemove=function(){//x.style.height= o+2+"px";o=o+2;
x.style.height=event.clientX/2+"px";
//contain.style.height=x.style.height;
y.style.height=(event.clientY+"px");
//if(o<150){o=o+2;}else{o=o-2}
var o=0;
var o1=0;
o=event.clientX/10;
o1=event.clientY/2;
x.style.backgroundColor="rgb("+o+","+o1+",0)";
y.style.backgroundColor="rgb("+o1+","+o+",0)";
x.innerHTML="X: "+event.clientX+"px";
y.innerHTML="Y: "+event.clientY+"px";
//设置块a的位置
a.style.left=event.clientX+10+"px";
a.style.top=event.clientY-50+"px";

a.innerHTML="<p>X: "+event.clientX+"px"+"</p><p>Y: "+event.clientY+"px</p>";
a.style.backgroundColor="rgb("+o+","+o+","+o1+")";
}



}
window.onload=text;