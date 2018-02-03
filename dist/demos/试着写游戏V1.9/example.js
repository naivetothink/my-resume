var log=console.log.bind(console);

var imageFromPath=function(path){//载入图片函数
	var img = new Image();  
	img.src = path;
	return img;
}

var Paddle=function(){
	var image=imageFromPath("paddle.png")
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
	//log("xiangzhuang")
						return true
					}
					return false
		},
		tan:function(gua){
				if(o.collide(gua)){
					gua.speedY=-gua.speedY
				}
		},


	}//对象O结束  别忘了对象里属性要有,,,,,,,


return o;
}


var Ball=function(){
	var image=imageFromPath("ball.png")
	var o={
		image:image,	 
		x:100,
		y:300,
		speedX:8,
		speedY:8,
		fired:false,		
		fire:function(){o.fired=true;},
		stop:function(){o.fired=false;},
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

var GuaGame=function(){
	var canvas=document.getElementById("drawing");
	var context=canvas.getContext("2d");
	var g={}
	g.canvas=canvas;
	g.context=context;

	g.keydowns={}
	g.actions={}

	g.clear=function(){
		g.context.clearRect(0, 0,g. canvas.width,g. canvas.height);
	}
//g.drawImage=function(GuaGame){g.context.drawImage(GuaImage.image,GuaImage.x,GuaImage.y);}
	g.drawImage=function(hh){
		g.context.drawImage(hh.image,hh.x,hh.y)
	}
//注册事件
	g.registerAction=function(key,callback){
		g.actions[key]=callback
	}


	window.addEventListener('keydown', function(event){
					g.keydowns[event.key] = true
	})

	window.addEventListener("keyup",function(event){//listener的L要大写
					g.keydowns[event.key]=false
	})




	setInterval(function(){
		var actions=Object.keys(g.actions)
		for(var i=0;i<actions.length;i++){
			var key=actions[i]
			if(g.keydowns[key]){
				g.actions[key]()
			}

		}//for 结束
		g.update()
		g.clear()
		g.draw()
		//g.drawImage()//运行这句时直接运行语句，然后错误。

	},1000/30)
return g;
}

var _main=function(){

	var game=GuaGame()
	var paddle = Paddle()

	var ball=Ball()

	// log(game)

	game.registerAction("a",function(){paddle.moveLeft()})
	game.registerAction("d",function(){paddle.moveRight()})

	game.registerAction("w",function(){paddle.moveTop()})
	game.registerAction("s",function(){paddle.moveBottom()})

	game.registerAction("f",function(){ball.fire()})
	game.registerAction(" ",function(){ball.stop()})
	//game.drawImage(paddle)
	game.update = function() {
					ball.move()
					//判断相撞
					paddle.tan(ball)
	//if(
	//paddle.collide(ball)){ball.speedY=-ball.speedY}

	}
	game.draw = function() {
					// draw
				 
					game.drawImage(paddle)
					game.drawImage(ball)

	}

}
_main()