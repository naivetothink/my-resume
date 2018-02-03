var log=console.log.bind(console);
var wrap=document.getElementById('wrap'),
	fang=document.getElementById('fang'),
	bimg=document.getElementById('bimg'),
	bimga=bimg.getElementsByTagName('img')[0],
	fangx,
	fangy;
// fang.style.left="0px";
// fang.style.top="0px";

wrap.onmousemove=function () {
	bimg.style.display="block";
	fang.style.display="block";
	fangx=event.offsetX-35
	fangy=event.offsetY-35
	if (fangx<0) {fangx=0}
	if (fangx>230) {fangx=230}
	if (fangy<0) {fangy=0}
	if (fangy>100) {fangy=100}
	fang.style.left=fangx+"px"
	fang.style.top=fangy+"px"
	//大图片的位移
	log(bimga)
	bimga.style.left=-fangx*3+"px"
	bimga.style.top=-fangy*3+"px"

}
wrap.onmouseout=function () {
	bimg.style.display="none";
	fang.style.display="none";
}