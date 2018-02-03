var log=console.log.bind(console);

var imageFromPath=function(path){//载入图片函数
	var img = new Image();  
	img.src = path;
	return img;
}
var rectIntersects=function(o,ball){
					if(ball.x+ball.image.width>o.x&&ball.x<o.x+o.image.width
						&&ball.y+ball.image.height>o.y&&ball.y<o.y+o.image.height){
						return true
					}
					
					return false
}
//判断a 在 b里面
var aInb=function (a,b) {
	if (a.offsetX>b.x&&a.offsetX<b.x+b.image.width) {
		if(a.offsetY>b.y&&a.offsetY<b.y+b.image.height){
			return true
		}
	}
	return false
}