
var GuaGame=function(){
	var canvas=document.getElementById("drawing");
	var context=canvas.getContext("2d");
	var g={}
	var fps=15;
	
	var huatiao=document.getElementById('fps')
	huatiao.addEventListener("input",function (event) {
		//log(event,event.target.value)
		fps=event.target.value
//log(GuaGame.fps)
	})

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

	var runloop=function () {
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
	}


	setInterval(function(){
		runloop()

	},1000/fps)
return g;
}
