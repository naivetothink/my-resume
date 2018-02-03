<template>
  <div id="designs">
    <div class="design ">
      <div class="container">
        <h1>看不见的原理，看得见的设计</h1>
        <p>从阳光到电力，示意图上简单的4个步骤包含允能为每位用户量身定做的专属方案。
          <br> 现在就开始，定制您的专属解决方案！
        </p>
        <img src="./1-首页30_03.png">
        <ul>
          <li>太阳光包含大量能量，通常当这些
            <br>光线击中一个物体时会产生热量。</li>
          <li>但是当太阳光照射到硅时，能量
            <br>就变成了电流。</li>
          <li>因此，我们根据每位客户的用电情况，在屋顶合理布局
            <br>太阳能设备，将阳光转化为清洁的电能。</li>
        </ul>
      </div>
    </div>
    <div class="see container cl">
      <div class="inner col-md-6">
        <h1>所见即所得</h1>
        <p>从一开始，你的太阳能系统就不会只是一个想象！在建造之前，你就能看见它完工后的样子。最重要的是，无论针对个人还是工商业用户，这项服务完全免费。</p>
      </div>
      <div class="col-md-6">
        <img src="./1-首页30_07.png" alt="">
      </div>
    </div>
    <div class="chart">
    	<div class="container cl">
    		<div class="time">
    		<img src="./图表s 1.png" alt="">
    		</div>
    		<div class="inner">
    			<h1>你的投入是最有价值的</h1>
    			<p>投资一个绿色的未来？不如我们先来谈谈如何直接从太阳能上获得经济利益！允能科技为您提供您看得见的收益回报——准备好大吃一惊了么？他可能是您最稳赚不赔的投资！</p>
    			<button class="cur">家庭用户</button>
    			<button>工商用户</button>
    		</div>
    	</div>
    </div>
    <div class="quote">
    	<div class="container">
    	<div>
    		<h1>获取报价之前，你还应该知道</h1>
    		<p>免费现场勘查，免费设计图纸，免费评估报价...还在担心建立您自己的太阳能系统的费用？允能已经为您节约下一笔资金。
质保承诺，独家收益监测系统，允能保障您稳健的未来收益。
点击按钮，开始建立属于您自己的太阳能王国吧！</p>
<button class="cur">立即报价</button>
<button>联系我们</button>

    	</div>
    	<img src="./cal.png" alt="">
    	</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'designs',
  data() {
    return {

    }
  },
}
</script>
<style lang='scss'>
#designs {
  .design {
    background-color: #f8f7f7;
    text-align: center;
    padding-bottom: 90px;
    color: #5a5a5a;
    img {
      width: 100%;
    }
    h1 {
      color: #0eb493;
      font-size: 48px;
      padding-top: 88px;
      padding-bottom: 30px;
    }
    p {
      font-size: 18px;
    }
    ul {
      text-align: left;
      li {
        display: inline-block;
      }
      li:nth-child(1) {
        margin-left: 32px;
      }
      li:nth-child(2) {
        margin-left: 86px;
      }
      li:nth-child(3) {
        margin-left: 160px;
      }
    }
  }
  .see {
    height: 500px;
    /*  display:table-cell;  
      vertical-align:middle;*/
    display: flex;
    align-items: center;
    .inner {
      padding: 0px 3em 50px 32px;
      /*padding-left: 32px;
				padding-right:3em;*/
      h1 {
        color: #0eb493;
        font-size: 48px;
      }
      p {
        padding-top: 30px;
      }
    }
    img {
      width: 100%;
      display: block;
      padding: auto 0;
    }
  }
  @media screen and(max-width: 750px) {
    .see {
      display: block;
    }
  }
  .chart{
  	min-height: 580px;
  	background-image: url('./小孩1.png');
  	background-repeat: no-repeat;
  	background-position: right top;
  	background-color: #fbfaf9;
  	color:#5a5a5a;
  	font-size: 18px;
  	.container{
			.time{
				display: inline-block;
				margin-left: 22px;

				img{display: block;margin-top: 60px;}
			}
  		.inner{
  			width: 520px;
  			float: right;  			
  			h1 {
        color: #0eb493;
        font-size: 48px;
        padding-top: 136px;
        padding-bottom: 30px;
      }
      p{padding-bottom: 42px;}
      button{width: 170px;height: 50px;
      	color:#0eb493;font-size:26px ;border: 2px solid #0eb493;border-radius: 22px;margin-right: 30px;
					&:hover,&.cur{cursor: pointer;color:#fff;background: #0eb493;}
      }

  		}
  	}
  }
  .quote{
  	height: 416px;
  	background-color: #0eb493;
  	.container{
  		height: 416px;
  		position: relative;
  		div{
  			width: 620px;
  			color:#fff;
  			  			h1 {
        color: #fff;
        font-size: 48px;
        padding-top: 80px;
        padding-bottom: 30px;
      }
            p{padding-bottom: 42px;}
  			button{width: 170px;height: 50px;
      	color:#fff;font-size:26px ;border: 2px solid #fff;border-radius: 22px;margin-right: 30px;
      	background-color: #0eb493;
					&:hover,&.cur{cursor: pointer;color:#0eb493;background: #fff;}
      }

  		
  		}
  		img{position: absolute;bottom: 0;right:84px;}
  	}
  }
}
</style>