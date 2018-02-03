
var Block=function(position){
	var image=imageFromPath("image/block.png")
	var p=position
	
	var o={
		image:image, 
		x:p[0],
		y:p[1],
		alive:true,
		lives:p[2]||1,
		/*jiao:function (a) {
			if(a.x<o.x+o.image.width&&a.x>o.x){
				if (a.y<o.y+o.image.height&&a.y>o.y) {
					//相交
					return true
				}
			}
			return false
		},*/
		kill:function () {
			o.lives--
			if(o.lives<1){
				o.alive=false
			}
		},
		tan:function (ball) {
			ball.speedY*=-1
		},
		collide:function (a) {
		if(o.alive){	//活着的时候检测相交
			return rectIntersects(a,o)||rectIntersects(o,a)}
		
		},

	}

return o;
}