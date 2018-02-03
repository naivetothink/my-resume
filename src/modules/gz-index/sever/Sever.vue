<template>
  <div id="sever" class="cl">
    <div class="col-md-4 hope">
      <h1>我们希望你<br>得到最好的服务</h1>
      <p>从阳光到电力，看似简单的转化背后蕴藏允能的全部心力。规范化的流程，每个步骤却都是专属定制。<br> 现在就开始，与允能一起建立您自己的专属太阳能解决方案！</p>
      <button>查看允能工作流程</button>
    </div>
    <div class="col-md-8">
      <div class="col-md-4 col-sm-6">
        <img src="./img-2.png">
      </div>
      <div class="col-md-4 col-sm-6">
        <img src="./img-3.png">
      </div>
      <div class="col-md-4 col-sm-6">
        <img src="./img-4.png">
      </div>
      <div class="col-md-4 col-sm-6">
        <img src="./img-5.png">
      </div>
      <div class="col-md-4 col-sm-6">
        <img src="./img-6.png">
      </div>
      <div class="col-md-4 col-sm-6">
        <img src="./img-7.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sever',
  data() {
    return {

    }
  },
}
</script>
<style lang='scss'>
#sever {
	div{padding:0;}
  img {
    display: block;
  }
  .hope {
    padding:3%;
    padding-bottom: 0;
    h1{color:#0eb493;font-size: 48px;}
    p{color: #5a5a5a;font-size: 18px;margin:20px 0;}
    button{width:280px;height: 50px;color: #fff;font-size:26px;background-color: #0eb493;border-radius: 22px;}
  }
  .col-md-8 {
    img{width: 100%;}
  }
}
</style>