<template>
  <div id="header" >
    <div class="container cl">
      <img src="./index-log.png">
      <ul>
        <li>
          <a href="gz-index.html" :class="{active: active.index}">首页</a>
          <ul >
            <li>服务理念</li>
            <li>工作原理</li>
            <li>投资回报</li>
            <li>获取报价</li>
            <li>新闻动态</li>
          </ul>
        </li>
        <li><a href="gz-family.html" :class="{active: active.family}">家庭用户</a>
          <ul>
            <li>服务理念</li>
            <li>工作原理</li>
            <li>投资回报</li>
            <li>获取报价</li>
            <li>新闻动态</li>
          </ul>
        </li>
        <li>工商用户</li>
        <li>关于我们</li>
        <li>Q&A</li>
        <li>联系我们</li>
      </ul>
      <div>
        <span><a href="#">登陆</a></span>
        <button>免费报价</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: ['isActive'],
  data() {
    return {
      // message:this.isActive
      

    }
  },
  computed: {
    active: function () {
      var o = {}
      if (this.isActive=='index') { 
        o.index=true;      
      }
      if (this.isActive=='family') {       
          o.family=true
      }
      return o; 
    
    },
    // index: function () {
    //   if (this.isActive=='index') {
    //     return true
    //   }      
    // },
    // family: function () {
    //   if (this.isActive=='family') {
    //     return true
    //   }      
    // },
  }
}
</script>
<style lang='scss'>
#header {
  /*height: 80px;*/
  .container {
    /*height: 80px;*/
    line-height: 80px;
    img {
      padding: 16px 0;
      float: left;
    }
    ul {
      float: left;
      margin-left: 46px;
      z-index: 0;
    }
    ul li {
      float: left;
      padding-right: 30px;
      cursor: pointer;
      
      & a:hover,
      & a.active {
        color: #2cbda1;
      }
      &:hover {
        ul {
          display: block;
        }
      }
      position: relative;
      ul {
        display: none;
        z-index: 5;
        position: absolute;
        margin: 0;
        left: -12px;
        top: 80px;

        line-height: 18px;
        color: black;
        width: 140px;
        background: #fff;
        li {
          width: (140-18*2)px;
          height: 40px;
          line-height: 40px;
          margin: 0 18px;
          border-bottom: 1px #e8e8e8 solid;
          &:nth-last-child(1) {
            border-bottom: none;
          }
          &:hover,
          &.active {
            color: #2cbda1;
          }
        }
      }
    }
    div {
      float: right;

      height: 40px;
      span {
        margin-right: 24px
      }
      button {
        width: 140px;
        height: 40px;
        padding: auto;
        background: #0eb493;
        color: #fff;
        font-size: 18px;
        border-radius: 4px;
      }
    }
  }
}
</style>