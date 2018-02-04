<template>
  <div id="app">
    <v-header></v-header>
    <div class="progress container cl">
      <div class="row">
        <div class="col-md-8 cl">
          <ul class="bar">
            <li v-for="item in styles">
              <p v-bind:style="{  borderLeft: item.borderColor+' 4px solid',backgroundColor: item.bgColor,color:item.color,width:item.bar  }">{{item.text}}<span>{{item.bar}}</span></p>
              <ul class="fade">
                <li v-for='context in item.contexts'>{{context}}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-md-4 download">
          <h3 class="head-primary">基本信息</h3>
          <ul>
            <li v-for="(item,key,index) in msg"><strong>{{key}}</strong> : <span v-html='item'></span></li>
          </ul>
          <h3 class="head-primary">个人介绍</h3>
          <p>我是一个对前端由衷热爱、有趣的前端工程师。 我目前正在寻找前端工程师岗位的工作机会，希望借此为 贵公司献上我的一点绵薄之力，快招我到碗里来吧！</p>
          <div class="download-button-container">
            <a class="download-button" href="./penghui-resume.pdf" target="_blank">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
    <div class="project container cl">
      <h3 class="head-primary">项目与DEMO</h3>
      <div class="row cl">
        <div class="col-md-6" v-for="(demo,key,index) in demos">
          <div class="mar">
            <h4>{{key}}</h4>
            <p v-html='demo.context'></p>
            <a :href="demo.a_href" target='_blank'>在线地址</a>
            <div><a :href="demo.a_href" target='_blank'><img :src='demo.imgSrc' alt=""></a></div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>  
  </div>
</template>
<script>
import header from '../../components/header/Header.vue'
import footer from '../../components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
  },
  data() {
    return {
      styles: [{
          text: 'javascript',
          bar: '80%',
          bgColor: '#d6efff',
          borderColor: '#3498db',
          color: '#2a7da9',
          contexts: [
            '熟练原生JavaScript，能脱离jQuery等类库编码；',
            '能运用模块化、面向对象的方式编程；',
            '熟悉正则表达式的使用；'
          ]
        },
        {
          text: 'HTML & CSS',
          bar: '70%',
          bgColor: '#d6efff',
          borderColor: '#3498db',
          color: '#2a7da9',
          contexts: [
            '能使用合理的结构和样式编写兼容主流浏览器的页面；',
            '能适当运用CSS 3使页面在现代浏览器上效果更佳；',
            '熟悉自适应和响应式开发',
            '能熟练使用Chrome开发者工具辅助开发。',
          ]
        },
        {
          text: 'jQuery',
          bar: '70%',
          bgColor: '#eaf6d0',
          borderColor: '#80bd01',
          color: '#6e9c0f',
          contexts: [
            '熟练使用jQuery及插件的使用和编写',
            '能使用jQuery快速开发',

          ],
        },
        {
          text: 'vue',
          bar: '75%',
          bgColor: '#eaf6d0',
          borderColor: '#80bd01',
          color: '#6e9c0f',
          contexts: [
            '熟练使用VUE以及相关插件',
            '了解双向绑定机制',
          ],
        },
        {
          text: 'webpack',
          bar: '80%',
          bgColor: '#eaf6d0',
          borderColor: '#80bd01',
          color: '#6e9c0f',
          contexts: [
            '熟练使用webpack打包工具',
            '熟练调试webpack的相关设置',
          ],
        },
        {
          text: 'Photoshop',
          bar: '70%',
          bgColor: '#fff6dd',
          borderColor: '#fdbc40',
          color: '#ff742a',
          contexts: [
            '熟练使用PS切图',
            '能进行简单的图片处理',
          ],
        },
        {
          text: 'HTTP协议、sass等',
          bar: '50%',
          bgColor: '#fff6dd',
          borderColor: '#fdbc40',
          color: '#ff742a',
          contexts: [
            '了解http协议',
            '熟悉sass等相关css预处理语言',
          ],
        },
      ],
      msg: {
        '个人信息': '彭会 / 男',
        '毕业院校': '许昌职业技术学院',
        'QQ或微信': '1034154496',
        'GitHub': '<a href="http://github.com/naivetothink" target="_blank">http://github.com/naivetothink</a>',
      },
      demos: {
        '企业网站': {
          'context': '用到了',
          'a_href': 'gz-index.html',
          'imgSrc': require('./images/允能01.png'),

        },
        '搜索框demo': {
          'context': '使用了vue和vue-resource和jsonp等技术',
          'a_href': './demos/Vue-lists.html',
          'imgSrc': require('./images/search.png'),
        },
        'Vue 简易留言板': {
          'context': '使用了bootstrap等框架',
          'a_href': './demos/Vue 简易留言板.html',
          'imgSrc': require('./images/留言板.png'),
        },
        'Vue 简易购物车': {
          'context': '用vue做的购物车，能进行金额的计算等',
          'a_href': './demos/Vue 简易购物车.html',
          'imgSrc': require('./images/购物车.png'),
        },
        '商城首页': {
          'context': '锋利的jQuery中的案例',
          'a_href': './demos/jQuery-Ch8-商城/index.html',
          'imgSrc': require('./images/商城首页.png'),
        },
        '商城详情页': {
          'context': 'jiesao',
          'a_href': './demos/jQuery-Ch8-商城/detail.html',
          'imgSrc': require('./images/商城详情页.png'),
        },
        '放大镜特效': {
          'context': '用原生js写的放大镜',
          'a_href': './demos/text 放大镜/text.html',
          'imgSrc': require('./images/放大镜特效.png'),
        },
        '监测鼠标位置': {
          'context': '用到了原生js，浏览器bom等技术',
          'a_href': './demos/text 跟随鼠标位置/text.html',
          'imgSrc': require('./images/mouse-place.png'),
        },
        '轮播图-淡入淡出': {
          'context': 'jiesao',
          'a_href': './demos/text 轮播图/text 轮播图 - 淡入淡出/text.html',
          'imgSrc': require('./images/淡入淡出.png'),
        },
        '轮播图-滚动': {
          'context': 'jiesao',
          'a_href': './demos/text 轮播图/轮播图-滚动/text.html',
          'imgSrc': require('./images/滚动.png'),
        },
        '多环撞击特效': {
          'context': '用了原生js和面向对象编程以及定时器自动删除',
          'a_href': './demos/text 小球碰撞4/index.html',
          'imgSrc': require('./images/小球碰撞.png'),
        },
        '妙味课堂网页': {
          'context': '使用了HTML和CSS以及雪碧图等技术',
          'a_href': './demos/妙味课堂/index.html',
          'imgSrc': require('./images/妙味课堂.png'),
        },
        '打砖块小游戏': {
          'context': 'jiesao',
          'a_href': './demos/试着写游戏V1.9/text.html',
          'imgSrc': require('./images/打砖块.png'),
        },
        '二叉树': {
          'context': '二叉树',
          'a_href': './demos/二叉树/index.html',
          'imgSrc': require('./images/二叉树.png'),
        },
      }
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
    .head-primary {

      font-size: 24px;
      color: #00A1D6;
      line-height: 30px;
      border-bottom: 1px solid #00A1D6;
      margin: 10px 0 15px 0px;
    }
    .progress {
      z-index: 1;
      margin-top: 120px;
      .bar li {
        position: relative;
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
        &:hover {
          ul {
            display: block;
          }
        }
        ;
        ul {
          position: absolute;
          left: 150px;
          top: 12px;
          z-index: 9999;
          color: #333;
          max-width: 400px;
          padding: 10px;
          padding-left: 2em;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          display: none;
          li {
            line-height: 1.7;
            font-size: 14px;
            list-style-type: disc;
          }
        }
      }
      .download {

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
          margin: 10px 0;
          text-indent: 2em;
          background-color: #fff;
          /*word-break:break-all;*/
        }
      }
    }
    .project {
      .row {
        div[class^='col-md'] {
          background: #fff;
          .mar {
            margin:0 10% 5% 10%;           
            border-bottom: 1px solid #00A1D6;
          }
          h4 {
            color: #333;
            font-size: 1.2em;
            font-weight: bold;
          }
          p {
            margin: 10px 0;
            color: #616161;
            span {
              color: #333;
              font-size: 1.1em;
              font-weight: bold;
            }
          }
          img {
            width: 80%;
            height: auto;
            margin: 20px 0;
            border:1px solid #fff;
            &:hover{border:1px solid gray;}
          }
        }
      }
    }
  }
}

</style>
