function lunbotu() {
	var log=console.log.bind(console);
	var pre=document.getElementById('pre'),
		next=document.getElementById('next'),
		inner=document.getElementById('inner'),
		buttons=document.getElementById('buttons'),
		indexs=buttons.getElementsByTagName('span'),
		index=0,
		alive=false;
	inner.style.left="-940px"
	function animate(num) {
		var preLeft=parseInt(inner.style.left);
		var newLeft=preLeft+num;
		var xpos=num/20;
		
		function go() {
			alive=true;
			if (animate.timer) {clearTimeout(animate.timer)}
			var preLeft=parseInt(inner.style.left)
			if (newLeft!=preLeft) {
				inner.style.left=preLeft+xpos+"px"			
				animate.timer=setTimeout(go,1000/30)		
			}else{
					alive=false;
					if(preLeft==0){inner.style.left=-940*5+"px"}
					if(preLeft==-940*6){inner.style.left=-940+"px"}	
			}		
		}
		go()	
	}
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
			animate(-940)
			index++
			showButton()
		}	
	}
	pre.onclick=function () {
		if(!alive){
			animate(940)
			index--
			showButton()
		}	
	}
	for (var i = 0; i < indexs.length; i++) {
		indexs[i].onclick=function () {
			if(!alive){
				var inde=this.getAttribute("index")	
				var num=(inde-1-index)*-940
				animate(num)
				index=inde-1;	
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

}
lunbotu()