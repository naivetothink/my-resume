
var Ball=function(){
	var image=imageFromPath("image/ball.png")
	var shu=15
	
	
	var o={
		image:image, 
		x:75,
		y:270,
		speedX:shu,
		speedY:shu,
		fired:false,		
		fire:function(){o.fired=!o.fired;},
		//stop:function(){o.fired=!o.fired},
		move:function(){
				if(o.fired){
					//log("move")
					if(o.x<0||o.x+o.image.width>600){
						o.speedX=-o.speedX
						
					}
					if(o.y<0||o.y+o.image.height>500){
						o.speedY=-o.speedY
					}
					o.x+=o.speedX
					o.y+=o.speedY
				}
		},

	}


return o;
}