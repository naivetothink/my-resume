<template>
  <div id="banner">
    <!-- 		<img class="placeholde" src="./banner1.png" alt="">	 -->
    <div id="banner1">
      <img src="./banner1.png" alt="">
      <ul>
        <li v-for="val in contexts" v-text='val'></li>
      </ul>
    </div>
    <div id="banner2">
      <img src="./banner2.png" alt="">
      <ul>
        <li v-for="val in contexts2" v-html="val"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner',
  data() {
    return {
      msg: '我想这里不需要数据',
      contexts: ['自地球诞生之日，太阳变是这个世界运作的驱动力。',
        '光和热——人类是直观感受到的太阳之力。生长与呼吸——植物运用太阳之力的方式。',
        '而今，科技，让太阳力发挥无限可能。',
        '光能和电能的转换，清洁与节约的全新能源方式。',
        '由允能科技为您启封下一个太阳纪元。'
      ],
      contexts2: ['一千个人眼中不仅有一千个哈姆雷特，还有一千个不同的太阳。',
        '每个人、每个家庭、每个企业，对于太阳能的期望都不一样，', '量身定制，很有必要。<br><br/>',
        '从第一次实地勘察开始，从白纸上落下的第一个示意图开始，',
        '允能科技，为您设计专属太阳能系统解决方案，创造只属于您的绿色未来。'
      ],
    }
  },
  mounted: function() {
    this.show()
  },
  methods: {
    show: function() {
      this.fadeInt = function(obj) {
        var opaci1 = 0;
        setTimeout(function animat1() {
          if (obj.timer) { clearTimeout(obj.timer) }
          if (opaci1 < 100) {
            opaci1 += 10
            obj.style.opacity = opaci1 / 100
            obj.timer = setTimeout(animat1, 200)
          }
        }, 200)
      };
      this.fadeOut = function(obj) {
        var opaci1 = 100;
        if (obj.timer) { clearTimeout(obj.timer) }
        obj.timer = setTimeout(function animat2() {
          if (obj.style.opacity > 0) {
            opaci1 -= 10
            obj.style.opacity = opaci1 / 100
            obj.timer = setTimeout(animat2, 200)
          }
        }, 200)
      };
      var banner1 = document.getElementById('banner1'),
      banner2 = document.getElementById('banner2');
      banner1.style.opacity = 100;
      banner2.style.opacity = 100;
      var _this = this;
      this.ss = function() {
        if (banner1.style.opacity == 0) {
          _this.fadeInt(banner1)
          _this.fadeOut(banner2);

        } else {
          _this.fadeInt(banner2);
          _this.fadeOut(banner1);

        }
      }
      var banner = document.getElementById('banner');

      banner.onmouseout = function() {
        banner.timer = setInterval(this.ss, 3000)

      }.bind(this)
      banner.onmouseover = function() {
        clearInterval(banner.timer)

      }
      banner.timer = setInterval(this.ss, 3000)

    },

  }
}
</script>
<style lang='scss'>
#banner {
  position: relative;
  min-height: 450px;
  img {
    width: 100%;
    display: block;
    height: auto;
  }
  background: #fff;
  /*占位符图片时为了撑开父元素的高度*/
  /*	.placeholde{visibility: hidden;z-index: 0;}*/
  color:#fff*60%;
  font-size: 18px;
  #banner1 {
    position: relative;
    z-index: 2;
    top: 0;
    text-align: center;
    background: #fff;
    ul {
      position: absolute;
      top: 50%;
      width: 100%;
    }
    @media screen and (max-width: 1054px) {
      ul {
        position: relative;
        width: 100%;
        color: #000;
      }
    }
  }
  #banner2 {
    position: absolute;
    z-index: 3;
    top: 0;
    background: #fff;
    ul {
      color: #202020;
      position: absolute;
      top: 50%;
      left: 1144/1920*100%;
      padding-right: 2%;
    }
    @media screen and (max-width: 1054px) {
      ul {
        position: relative;
        width: 100%;
        color: #000;
        top: 2%;
        left: 0;
        text-align: center;
      }
    }
  }
}
</style>