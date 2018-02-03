var Paddle=function(){
	var image=imageFromPath("image/paddle.png")
	var o={
		image:image,
		x:100,
		y:300,
		speed:15,
		moveLeft:function(){
			o.x-=o.speed
		},
		moveRight:function(){
			o.x+=o.speed
		},
		moveTop:function(){
			o.y-=o.speed
		},
		moveBottom:function(){
			o.y+=o.speed
		},
		collide:function(ball){
					if(ball.x+ball.image.width>o.x&&ball.x<o.x+o.image.width
						&&ball.y+ball.image.height>o.y&&ball.y<o.y+o.image.height){
						return true
					}
					
					return false
		},
		//左右弹
		//ball.x+ball.width>o.x&&ball.x<o.x+o.width

		tan:function(gua){
				
				if(o.collide(gua)==true){
					gua.speedY=-gua.speedY
				}
		},


	}//对象O结束  别忘了对象里属性要有,,,,,,,


return o;
}