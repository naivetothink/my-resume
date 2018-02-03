
var loadLevel=function (n) {
	n=n-1
	level=levels[n]
	var blocks=[]
	for (var i = 0; i < level.length; i++) {
		
		var p=level[i]
		var b=Block(p)//用哪个名字引用应该无所谓吧 e 得用大写。。。
		blocks.push(b)
	}

return blocks



}



var _main=function(){

	
	var game=GuaGame();
	var scene=Scene(game);

	//game.drawImage(paddle)
	game.update = function() {
					

				


	}
	game.draw = function() {

		scene.draw();
					
					
	}

}
_main()