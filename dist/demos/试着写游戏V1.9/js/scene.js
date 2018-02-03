
var Scene=function (game) {
	var o={}

	// var game=GuaGame()
	var paddle = Paddle()
	var ball=Ball()
	var score=0;
	//var blocks=[]
	var	blocks=loadLevel(1)
	// log(game)
	var qiushu=document.getElementById('qiu-fps')
		log(qiushu)
		qiushu.addEventListener("input",function (event) {
			//log(event,event.target.value)
			ball.speedX=event.target.value/4
			ball.speedY=event.target.value/4
			//log(ball.speedY)
		})
 
	 
	

	game.registerAction("a",function(){paddle.moveLeft()})
	game.registerAction("d",function(){paddle.moveRight()})

	game.registerAction("w",function(){paddle.moveTop()})
	game.registerAction("s",function(){paddle.moveBottom()})

	game.registerAction("f",function(){ball.fire()})

	//载入关卡
	game.registerAction("1",function(){blocks=loadLevel(1)})
	game.registerAction("2",function(){blocks=loadLevel(2)})
	game.registerAction("3",function(){blocks=loadLevel(3)})

	


	//加个拖拽
	var enableDrag=false;
	game.canvas.addEventListener("mousedown",function (argument) {
		if(aInb(event,ball)){
				enableDrag=true
			}
	})
	game.canvas.addEventListener("mousemove",function (argument) {
		if(enableDrag){
			ball.x=event.offsetX;
			ball.y=event.offsetY;
		}
		
	})
	game.canvas.addEventListener("mouseup",function (argument) {
		enableDrag=false
	})


					/*	//判断游戏结束
					 if(ball.y>paddle.y){
					 	o.draw=function () {
					 		game.context.fillStyle = "black";
					 		game.context.fillRect(0,0 , game.canvas.width, game.canvas.height);
					 		game.context.fillStyle = "white";
							game.context.font = "20px sans-serif ";
							game.context.fillText("分数："+score, 15, 480);
							game.context.fillText("游戏结束" ,200, 200);
					 	}
					
						
					}*/

	o.draw=function() {
					ball.move()
					//判断相撞
					paddle.tan(ball)

					// draw
				 	//画个背景
				 	game.context.fillStyle = "black";  
					game.context.fillRect(0,0 , game.canvas.width, game.canvas.height);



					game.drawImage(paddle)
					game.drawImage(ball)
					//根据是否存活判断是否画砖块
					for (var i = 0; i < blocks.length; i++) {
						block=blocks[i]
						//判断是否kill
					if(block.collide(ball)){
						//log(block.jiao(ball))
						block.tan(ball)
						block.kill()
						score+=100
					}
						if(block.alive){
							game.drawImage(block)
						}
					}
					game.context.fillStyle = "white";
					game.context.font = "20px sans-serif ";
					game.context.fillText("分数："+score, 15, 480);
					
					//log(block.alive)
					
	}





return o;
}