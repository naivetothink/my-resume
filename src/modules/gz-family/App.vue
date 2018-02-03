<template>
  <div id="app">
    <v-header :isActive="isActive"></v-header>
    <content>
      <div class="bgImg"><a href="#"><img src="./未标题-1.png" alt=""></a></div>
      <div class="system container">
        <div class="inner">
          <h1 class="comment">家用太阳能系统示意</h1>
          <p class="mar">装载在屋顶的太阳能电池板收集太阳的能量，将之转化为电能。并网逆变器将电池板发出的直流电转换为可以为我们所用的交流电。再通过电表将系统和电网连接。这样，你就可以开始使用来自太阳的清洁电力了！</p>
          <button class="primary cur">立即报价</button>
          <button class="primary">联系我们</button>
        </div>
        <!-- 不加model这个div 子元素选择器会出错 -->
        <div class="model">
        <!-- <button>呵呵，点我</button> -->
        <!-- 函数不能用 -->
        <!-- 函数能用，是@click不是:click... -->
          <a @click="toggle('one')"></a>
          <a @click="toggle('two')"></a>
          <a @click="toggle('three')"></a>
          <a @click="toggle('four')"></a>
          <a @click="toggle('five')"></a>
          <a @click="toggle('six')"></a>
          <ul>
            <li v-show="lis.one">
              <h3>太阳能电池板</h3>
              <p>装载在屋顶的太阳能电池板收集太阳的能量，将之直接转化为电能。</p>
            </li>
            <li v-show="lis.two">
              <h3>逆变器</h3>
              <p>并网逆变器将电池板发出的直流电转换为可以为我们所用的交流电。</p>
            </li>
            <li v-show="lis.three">
              <h3>电表</h3>
              <p>电表统计你从电网中购买的电，也监测了来自太阳能电池板产生的电力，它甚至还知道有多少电卖给了电网公司。</p>
            </li>
            <li v-show="lis.four">
              <h3>家用电器</h3>
              <p>屋顶太阳能系统发出的电首先为家里的电器所使用。</p>
            </li>
            <li v-show="lis.five">
              <h3>电网</h3>
              <p>电网会在太阳能电力不足时提供补充，也会在太阳能电力多余是收购它。</p>
            </li>
            <li v-show="lis.six">
              <h3>电动车</h3>
              <p>如果你的电动车使用的是来自太阳的清洁能源，这可以将你的碳足迹降到最低，这太酷了！</p>
            </li>
          </ul>
        </div>
        
        <!-- <img src="./house.png" alt="" class="house"> -->
      </div>
      <div class="creative center">
        <h1 class="comment">创造你的太阳能系统</h1>
        <p class="mar">从前期方案，到施工现场，以及未来质保<br>
允能为您做的更多，想的更远</p>
      </div>
      <div class="icon container cl">
        <div class="row" v-for="(data,key, index1) in urls">
          <div v-for="(url,index2) in data" :class="url.class" @mouseenter="enter(key,index2)" @mouseleave="leave(key,index2)">
            <img :src="url.src" alt="">
            <p>{{url.msg}}</p>
          </div>        
        </div>
      </div>
      <div class="home center">
        <h1 class="comment">家是唯一</h1>
        <p class="mar">这个世界上每一个家都是独一无二的存在<br>
即便住在同样的房型里，不同的家庭会有不同的需求
<br>
为了您的唯一，允能全力以赴</p>
      </div>
      <div class="botImg"><img src="./botImg.png" alt=""></div>
    </content>
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from '../../components/gz-components/header/header.vue'
import footer from '../../components/gz-components/footer/Footer.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: 'family',
      lis:{
        one:true,
        two:false,
        three:false,
        four:false,
        five:false,
        six:false,
      },
      urls:{        
        one:[
          {
            class:'col-md-3',
            src:require('./images/icon_03.png'),
            msg:'现场勘查'
          },
          {
            class:'col-md-3',
            src:require('./images/icon_05.png'),
            msg:'能源顾问'
          },
          {
            class:'col-md-3',
            src:require('./images/icon_07.png'),
            msg:'方案设计'
          },
          {
            class:'col-md-3',
            src:require('./images/icon_09.png'),
            msg:'相关备案'
          },     
        ],
        two:[
          {
            class:'col-md-3',
            src:require('./images/icon_15.png'),
            msg:'材料选用'
          },
          {
            class:'col-md-3',
            src:require('./images/icon_16.png'),
            msg:'现场施工'
          },
          {
            class:'col-md-3',
            src:require('./images/icon_17.png'),
            msg:'全程品控'
          },
          {
            class:'col-md-3',
            src:require('./images/icon_19.png'),
            msg:'十年质保'
          },     
        ],
        three:[
          {
            class:'col-md-6',
            src:require('./images/icon_25.png'),
            msg:'全天候监控'
          },
          {
            class:'col-md-6',
            src:require('./images/icon_28.png'),
            msg:'24小时快速响应'
          },     
        ],
      },
      copyUrls:{},
      changeUrls:{        
        one:[
          {
            src:require('./imagestwo/icon_14.png'),
            msg:'我们见过各种各样的屋顶，但是我们还没有见过您家的——这就是为什么我们得先见见Ta！'
          },
          {
            src:require('./imagestwo/icon_16.png'),
            msg:'允能的能源顾问并不只针对您的家庭环境！我们的专业顾问致力于为您寻找经济与环保最佳平衡点！'
          },
          {
            src:require('./imagestwo/icon_18.png'),
            msg:'所见即所得，这才是您的方案！用每一个独一无二的方案去构建您的专属太阳能系统。'
          },
          {
            src:require('./imagestwo/icon_20.png'),
            msg:'您唯一要做的事情是致电允能。复杂的报备流程和书面文件，允能为您全程代理。'
          },     
        ],
        two:[
          {
            src:require('./imagestwo/icon_36.png'),
            msg:'搭建每个独一无二的屋顶时，在最合适的材料中选择最好的，在最好的材料中选择最合适的。'
          },
          {
            src:require('./imagestwo/icon_38.png'),
            msg:'一支专业的施工团队会为您做到快速、精准、不留后患。我们连走线的位置都经过精密测算，将对您影响降到最低。'
          },
          {
            src:require('./imagestwo/icon_40.png'),
            msg:'第三方专业监理团队，为您把控施工过程中的每个细节。您拥有的是允能和泰瑞双重保障。'
          },
          {
            src:require('./imagestwo/icon_42.png'),
            msg:'担心您的屋顶？担心您的太阳能板？担心天外来客？停下您的担心！允能十年质保承诺，只为杜绝您的一切后顾之忧。'
          },     
        ],
        three:[
          {
            class:'col-md-6',
            src:require('./imagestwo/icon_03.png'),
            msg:'想知道您今天通过太阳能获取了多少经济利益？实时监控系统可以为您展现！当然，Ta还能及时通知您系统运行情况。'
          },
          {
            class:'col-md-6',
            src:require('./imagestwo/icon_05.png'),
            msg:'每位用户的系统运行情况我们都有后台为您保驾护航。任何状况，您都将在24小时内收到来自允能的及时反馈和处理！'
          },     
        ],
      }

    }
  },
  mounted:function () {
    
    this.copyData()
    // this.say()
  },
  methods:{
      toggle:function(which){
        // alert(which)
        this.lis[which]=!this.lis[which]
      },
      copyData: function () {  
         var obj={};  
         obj=JSON.parse(JSON.stringify(this.urls)); 
         this.copyUrls=obj;  
         // return obj  
      },
      enter:function (key,index2) {
        // alert(key+'weizhi'+index2)
        this.urls[key][index2].src= this.changeUrls[key][index2].src
        this.urls[key][index2].msg= this.changeUrls[key][index2].msg
        // console.log(this.urls[key])
      },
      leave:function (key,index2) {
        this.urls[key][index2].src= this.copyUrls[key][index2].src
        this.urls[key][index2].msg= this.copyUrls[key][index2].msg
      }
  },
 //  computed: {  
 //     nowUrls: function () {  
 //         var obj={};  
 //         obj=JSON.parse(JSON.stringify(this.urls)); //this.templateData是父组件传递的对象  
 //         return obj  
 //    }  
 // },
  components:{
     'v-header':header,
     'v-footer':footer,
  }
}
</script>
<!-- 这里的lang= 不能用双引号 -->
<style lang='scss'>
.bgImg{
  img{width:100%;height:auto;}
}
.system{
  position: relative;
  padding: 180px 0;
  background-image: url("./house.png");
  background-repeat: no-repeat;
  background-position: right 90px;
  .model a{position: absolute;display: block;width: 30px;height: 30px;
    &:nth-child(1){left: 677px;
    top: 120px;}
    &:nth-child(2){left: 1070px;
    top: 290px;}
    &:nth-child(3){    left: 1077px;
    top: 410px; }
    &:nth-child(4){        left: 710px;
    top: 390px; }
    &:nth-child(5){    left: 1160px;
    top: 316px; }
    &:nth-child(6){    left: 586px;
    top: 393px; }
  }
  .model ul li{
    position: absolute;
    background: #fff;
    width: 200px;
    padding:14px;
    border: 2px solid #dedddd;
    border-radius: 8px;
    h3{font-size: 18px;color:#0eb493;padding-top: 14px;padding-bottom: 14px;}
    p{padding:14px 0;color: #5a5a5a;font-size: 16px;border-top: 1px #dedddd dashed;line-height: 2;}
        &:nth-child(1){left: 677+48px;
    top: 120-12px; }
    &:nth-child(2){left: 1070-220px;
    top: 290-18px;}
    &:nth-child(3){    left: 1077-214px;
    top: 410-70px; }
    &:nth-child(4){        left: 710+48px;
    top: 390-16px; }
    &:nth-child(5){    left: 1160-214px;
    top: 316+30px; }
    &:nth-child(6){    left: 586+50px;
    top: 393-38px; }
  }
  .inner{
    
    width: 490px;
  }
}
.icon {
  border: 1px solid #dcdcdc;
  margin-top: 64px;
  .row div{
    height: 260px;
    text-align: center;
    border: 1px solid #dcdcdc;
    img{margin-top: 56px;margin-bottom: 28px;}
    &:hover{
     background-color: #0eb493;
      img{margin-top: 26px;margin-bottom: 20px;}
      p{margin:0 36px;color: #fff}
    }
    &.col-md-6{padding:0 160px;}
  }
}
.home{
  h1{margin-top: 90px;}
}
.botImg{
  img{width: 100%;}
}
</style>