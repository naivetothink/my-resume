<template>
	<div id="botCon" >
		<div class="news container" >
			<div>
				<button class="hover">允能动态</button>
				<button>行业新闻</button>
			</div>
			<div><img src="./1-首页30_19.png" alt=""></div>
		</div>
		<div class="friends container">
			<p>我们的合作伙伴</p>
			<div>
				<img src="./1-首页30_23.png" alt="">
				<img src="./1-首页30_27.png" alt="">
				<img src="./1-首页30_31.png" alt="">
				<img src="./1-首页30_34.png" alt="">
				<img src="./1-首页30_37.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'botCon',
		data(){
			return {

			}
		},
	}
</script>
<style lang='scss'>
	#botCon{
		.news{
			text-align: center;
			button{width: 140px;height: 42px;color:black;background-color: #fff;font-size: 24px;border:none;border-radius: 20px;line-height: 42px;margin:44px 0;}
			button:hover,.hover{background-color: #0eb493;color: #fff;}
		}
		.friends{
			padding:0 40px 120px;
			p{text-align: center;color:#5a5a5a;padding-top: 54px;font-weight: bold;padding-bottom: 10px;}
			img{margin-right: 80px;}
		}

	}
</style>