<template>
  <div id="app">
    <v-header></v-header>
    <div class="progress container">
      <div class="row">
        <div class="col-md-8 cl">
          <ul class="bar">
            <li v-for="item in styles">
              <p v-bind:style="{  borderLeft: item.borderColor+' 4px solid',backgroundColor: item.bgColor,color:item.color,width:item.bar  }">{{item.text}}<span>{{item.bar}}</span></p>
            </li>
          </ul>
        </div>
        <div class="col-md-4 download">
          <h3>基本信息</h3>
          <ul>
            <li v-for="(item,key,index) in msg"><strong>{{key}}</strong> :  <span v-html='item'></span></li>
          </ul>
          <h3>个人介绍</h3>
          <p>我是一个对前端由衷热爱、有趣的前端工程师。
我目前正在寻找前端工程师岗位的工作机会，希望借此为 贵公司献上我的一点绵薄之力，快招我到碗里来吧！</p>
          <div class="download-button-container">
            <a class="download-button" href="./penghui-resume.pdf" target="_blank">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import header from '../../components/header/Header.vue'

export default {
  name: 'App',
  components: {
    'v-header': header,
  },
  data() {
    return {
      styles: [{
          text: 'javascript',
          bar: '80%',
          bgColor: '#d6efff',
          borderColor: '#3498db',
          color: '#2a7da9',
        },
        {
          text: 'HTML & CSS',
          bar: '70%',
          bgColor: '#d6efff',
          borderColor: '#3498db',
          color: '#2a7da9',
        },
        {
          text: 'jquery',
          bar: '70%',
          bgColor: '#eaf6d0',
          borderColor: '#80bd01',
          color: '#6e9c0f',
        },
        {
          text: 'vue',
          bar: '75%',
          bgColor: '#eaf6d0',
          borderColor: '#80bd01',
          color: '#6e9c0f',
        },
        {
          text: 'webpack',
          bar: '80%',
          bgColor: '#eaf6d0',
          borderColor: '#80bd01',
          color: '#6e9c0f',
        },
        {
          text: 'Photoshop',
          bar: '70%',
          bgColor: '#fff6dd',
          borderColor: '#fdbc40',
          color: '#ff742a',
        },
        {
          text: 'HTTP协议、sass等',
          bar: '50%',
          bgColor: '#fff6dd',
          borderColor: '#fdbc40',
          color: '#ff742a',
        },
      ],
      msg: {
        '个人信息': '彭会 / 男',
        '毕业院校': '许昌职业技术学院',
        'QQ或微信': '1034154496',
        'GitHub': '<a href="http://github.com/naivetothink" target="_blank">http://github.com/naivetothink</a>',

      },
    }
  },
}

</script>
<style lang='scss'>
body {
  #app {
    .v-header {
      z-index: 2;
    }
    .progress {
      z-index: 1;
      margin-top: 120px;
      .bar li {
        margin-bottom: 20px;
        p {
          font-size: 20px;
          min-height: 40px;
          line-height: 40px;
          padding-left: 10px;
          span {
            float: right;
            padding-right: 10px;
          }
        }
      }
    }
    .download {
      h3{
        font-size: 24px;
        color: #00A1D6;
        line-height: 30px;
        border-bottom: 1px solid #00A1D6;
        margin: 10px 0 15px 0px;
      }
      ul li {
            font-size: 15px;
    line-height: 27px;
    color: #616161;

      }
      .download-button {
        font-weight: 300;
        color: #FFF;
        background: #23A1E6;
        text-shadow: rgba(0, 0, 0, 0.1533333333) 0 1px 1px;
        font-size: 14pt;
        border-radius: 3px;
        letter-spacing: 0.03rem;
        text-align: center;
        display: block;
        box-sizing: border-box;
        height: 70px;
        padding: 1.35em 0 0;
        margin: 20px auto 0;
        text-decoration: none;
        &:hover {
          background: #1e75a5;
        }
        ;
        
      }
      p {
        margin:10px 0;
        text-indent: 2em;
        background-color: #fff;
        /*word-break:break-all;*/
      }
    }
  }
}

</style>
