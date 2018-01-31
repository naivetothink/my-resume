<template>
  <div class="v-header">
    <div class="wrap container">
      <div class="row">
        <div class="fl name">
          <h1 class="fl"><a href="/index.html">彭会</a></h1>
          <p class="fl">一秒钟记住<span>彭</span>德怀去开<span>会</span></p>
        </div>
        <div class="fr messages">
          <ul class="showUl">
            <li class="email" href="project.html">
              <img src="../../assets/email.jpg" alt=""> 1034154496@qq.com</li>
            <li href="home.html"><img src="../../assets/phone.jpg" alt="">13271236931</li>
            <li class="blog"><a href="https://naivetothink.github.io/jekyll-simple-blog/" target="_blank">个人博客</a></li>
          </ul>
          <span @click="toggle('showUl','0')">占位<div class="menu-icon"></div></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-header',
  data() {
    return {
    	

    }
  },
  methods:{
  	toggle:function (className,index) {
  		var classIndex;
  		if(index){classIndex=index;}else{classIndex=0;}
  		var element = document.getElementsByClassName(className)[classIndex];
  		if (element.style.display=='block') {
  			element.style.display='none';
  		}else{
  			element.style.display='block';
  		}
  		
  	}
  }
}

</script>
<style lang='scss'>

.v-header {
  position: relative;
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: #fff;
  border-bottom: 1px solid gray;
  text-align: center;
  line-height: 90px;
  .name {
    padding-right: 15px;
    padding-left: 15px;
    h1 a {
      font-size: 40px;
      color: #333;
      text-decoration: none;
    }
    p {
      color: #777;
      padding-top: 10px;
      margin-left: 10px;
      span {
        font-size: 1.5em
      }
      ;
    }
    @media screen and (max-width: 400px) {
      p {
        font-size: 12px;
      }
      h1 a {
        font-size: 30px;
      }
    }
  }
  .messages {
    padding-right: 15px;
    padding-left: 15px;


    ul li {
      display: inline-block;

      margin-left: 20px;
      img {
        width: 30px;
        height: auto;
        vertical-align: middle;
      }
      &.blog a {
        padding: 5px;
        border: 1px solid gray;
        border-radius: 6px;
        background-color: #ddd;
      }
    }
    span{display: none;text-indent: -9999px;}
    @media screen and (max-width:980px) {
    	ul{display: none;background-color: #fff;text-align: center;position: absolute;top: 90px;right: 15px;}
      ul li {
        display: block;border-bottom: 1px solid gray;
      }
      span{display: block;width: 30px;height: 30px;background-color: #fff;position: absolute;top: 30px;right: 20px;
      	.menu-icon{width: 30px;height: 30px;background-color: red;position:absolute;top: 0;
      	$menuColor:gray; 
        border-top: 5px solid $menuColor;  
        border-bottom: 5px solid $menuColor;  
        background-color: $menuColor;  
        padding: 7px 0;
        background-clip:content-box;
        &:hover{$menuColor:#DD575C;border-top: 5px solid $menuColor;border-bottom: 5px solid $menuColor;background-color: $menuColor;};  
      	}
      }
    }
  }
}

</style>
