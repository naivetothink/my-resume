<template>
  <div id="footer">
    <div class="container cl">
      <img src="./footer-logo.png" alt="">
      <ul class="fl one">
        <li>上海允能新能源科技有限公司   </li>
        <li>地址：上海市普陀区中山北路中关村大厦</li>
        <li>电话：021-56749081</li>
        <li>传真：021-5674908</li>
      </ul>
      <ul class="fl two">
        <li>关于我们</li>
        <li>业务介绍</li>
        <li>加入我们</li>
        <li>关于允能</li>
      </ul>
      <div class="fl">
        <p>联系我们</p>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
      <div class="fr">
        <p>全国免费服务热线</p>
        <p>4008-628-969</p>
        <p>Copyright © 上海允能新能源科技有限公司</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'footer',
  data() {
    return {
      msg: ''
    }
  },

}
</script>
<style lang='scss'>
  #footer{
    background: #f4f4f4;
    padding:50px 0 40px 0;
    .container{
      img{display:block;padding:0 0 24px 24px;}
      ul{line-height: 22px;}
      ul.one{margin-left:24px;}
      ul.two{margin-left:68px;}
      div.fl{
        margin-left: 64px;
        p{padding-bottom: 12px;}
        a{display: inline-block;width: 60px;height: 60px;margin-right:16px;background-image: url('./icon.png');}
        a:nth-child(3){background-position:0px -60px;}
        a:nth-child(4){background-position:0px -120px;}
      }
      div.fr{
        margin-right: 24px;
        text-align: right;
        p:nth-child(1){font-size: 18px;}
        p:nth-child(2){font-size: 36px;}
        p:nth-child(3){font-size: 12px;}
      }
    }

  }

</style>