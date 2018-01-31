<template>
  <div id="app">
    <v-header></v-header>
    <div class="progress container">
      <div class="row">
        <div class="col-md-8">
          <ul class="bar" v-for="item in styles">
            <li>
              <p v-bind:style="{  borderLeft: item.borderColor+' 4px solid',backgroundColor: item.bgColor,color:item.color,width:item.bar  }">{{item.text}}<span>{{item.bar}}</span></p>
            </li>
          </ul>
        </div>
        <div class="col-md-4 download">
          <p>
            HTTP
          </p>
          
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
      ]
    }
  },
}

</script>
<style lang='scss'>
body {
  #app {
    .v-header{z-index: 2;}
    .progress {
      z-index: 1;
      margin-top: 120px;
      .bar li {
        margin-bottom: 20px;
        p {
          font-size: 20px;
          height: 40px;
          line-height: 40px;

          padding-left: 10px;
          span{float: right;padding-right: 10px;}
        }
      }
    }
    .download{
      p{background-color: #aef;/*word-break:break-all;*/}
    }
  }
}

</style>
