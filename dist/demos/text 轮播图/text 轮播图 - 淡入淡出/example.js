function lunbotu() {
	var log=console.log.bind(console);
	var pre=document.getElementById('pre'),
		next=document.getElementById('next'),
		inner=document.getElementById('inner'),
		buttons=document.getElementById('buttons'),
		imgs=inner.getElementsByTagName('img'),
		indexs=buttons.getElementsByTagName('span'),
		index=0,		
		alive=false;
	//hack 初始化图片
	for (var i = 0; i < imgs.length; i++) {
			 imgs[i].style.opacity="0"
			
		}
	fadeInt(imgs[0])
	function showPic(){
		for (var i = 0; i < imgs.length; i++) {
			 //imgs[i].style.opacity="0"
			fadeOut(imgs[i])
		}
		if(index<0){index=4}
		if(index>4){index=0}
		fadeInt(imgs[index])
	
		
	}
	function fadeInt(obj) {
		var opaci1=0;		
		setTimeout(function animat1(){
			if (obj.timer) {clearTimeout(obj.timer)}
			if (opaci1<100) {
				opaci1+=20
				obj.style.opacity=opaci1/100				
				obj.timer=setTimeout(animat1,200)
			}			
		},200)
	}

	function fadeOut(obj) {
		var opaci1=100;
		if (obj.timer) {clearTimeout(obj.timer)}
		obj.timer=setTimeout(function animat2(){
			if (obj.style.opacity>0) {
				opaci1-=20
				obj.style.opacity=opaci1/100			
				obj.timer=setTimeout(animat2,200)				
			}			
		},200)
	}
	//showPic()		//初始化图片 显示第一张
	function showButton() {
		for (var i = 0; i < indexs.length; i++) {
			indexs[i].setAttribute("class","")
		}
		if(index<0){index=4}
		if(index>4){index=0}
		indexs[index].setAttribute("class","on")
		
	}
	next.onclick=function () {
		if(!alive){
			
			index++
			showPic()
			
			showButton()
		}	
	}
	pre.onclick=function () {
		if(!alive){
			
			index--
			showPic()
			showButton()
		}	
	}
	for (var i = 0; i < indexs.length; i++) {
		indexs[i].onclick=function () {
			if(!alive){
				var inde=this.getAttribute("index")	
				
				index=inde-1;
				showPic()	
				showButton()
				//inner.style.left=inde*-940+"px"
			}
		}
		
	}
	inner.onmouseout=function () {
		inner.timer=setInterval(next.onclick,3000)
	}
	inner.onmouseover=function () {
		clearInterval(inner.timer)
	}
	inner.timer=setInterval(next.onclick,3000)
}
lunbotu()