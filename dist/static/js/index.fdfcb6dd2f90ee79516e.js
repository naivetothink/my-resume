webpackJsonp([0],{"/jVV":function(t,s,e){t.exports=e.p+"static/img/phone.8382283.jpg"},TLER:function(t,s){},URam:function(t,s,e){t.exports=e.p+"static/img/email.e3e6411.jpg"},c7R2:function(t,s){},"nfU/":function(t,s){},pyoj:function(t,s){},sSkr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),r={name:"v-header",data:function(){return{}},methods:{toggle:function(t,s){var e;e=s||0;var a=document.getElementsByClassName(t)[e];"block"==a.style.display?a.style.display="none":a.style.display="block"}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"v-header"},[e("div",{staticClass:"wrap container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"fr messages"},[t._m(1),t._v(" "),e("span",{on:{click:function(s){t.toggle("showUl","0")}}},[t._v("占位"),e("div",{staticClass:"menu-icon"})])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"fl name"},[s("h1",{staticClass:"fl"},[s("a",{attrs:{href:"/index.html"}},[this._v("彭会")])]),this._v(" "),s("p",{staticClass:"fl"},[this._v("一秒钟记住"),s("span",[this._v("彭")]),this._v("德怀去开"),s("span",[this._v("会")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"showUl"},[s("li",{staticClass:"email",attrs:{href:"project.html"}},[s("img",{attrs:{src:e("URam"),alt:""}}),this._v(" 1034154496@qq.com")]),this._v(" "),s("li",{attrs:{href:"home.html"}},[s("img",{attrs:{src:e("/jVV"),alt:""}}),this._v("13271236931")]),this._v(" "),s("li",{staticClass:"blog"},[s("a",{attrs:{href:"https://naivetothink.github.io/jekyll-simple-blog/",target:"_blank"}},[this._v("个人博客")])])])}]};var n={name:"App",components:{"v-header":e("VU/8")(r,o,!1,function(t){e("c7R2")},null,null).exports},data:function(){return{styles:[{text:"javascript",bar:"80%",bgColor:"#d6efff",borderColor:"#3498db",color:"#2a7da9",contexts:["熟练原生JavaScript，能脱离jQuery等类库编码；","能运用模块化、面向对象的方式编程；","熟悉正则表达式的使用；"]},{text:"HTML & CSS",bar:"70%",bgColor:"#d6efff",borderColor:"#3498db",color:"#2a7da9",contexts:["能使用合理的结构和样式编写兼容主流浏览器的页面；","能适当运用CSS 3使页面在现代浏览器上效果更佳；","熟悉自适应和响应式开发","能熟练使用Chrome开发者工具辅助开发。"]},{text:"jQuery",bar:"70%",bgColor:"#eaf6d0",borderColor:"#80bd01",color:"#6e9c0f",contexts:["熟练使用jQuery及插件的使用和编写","能使用jQuery快速开发"]},{text:"vue",bar:"75%",bgColor:"#eaf6d0",borderColor:"#80bd01",color:"#6e9c0f",contexts:["熟练使用VUE以及相关插件","了解双向绑定机制"]},{text:"webpack",bar:"80%",bgColor:"#eaf6d0",borderColor:"#80bd01",color:"#6e9c0f",contexts:["熟练使用webpack打包工具","熟练调试webpack的相关设置"]},{text:"Photoshop",bar:"70%",bgColor:"#fff6dd",borderColor:"#fdbc40",color:"#ff742a",contexts:["熟练使用PS切图","能进行简单的图片处理"]},{text:"HTTP协议、sass等",bar:"50%",bgColor:"#fff6dd",borderColor:"#fdbc40",color:"#ff742a",contexts:["了解http协议","熟悉sass等相关css预处理语言"]}],msg:{"个人信息":"彭会 / 男","毕业院校":"许昌职业技术学院","QQ或微信":"1034154496",GitHub:'<a href="http://github.com/naivetothink" target="_blank">http://github.com/naivetothink</a>'}}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header"),t._v(" "),e("div",{staticClass:"progress container cl"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 cl"},[e("ul",{staticClass:"bar"},t._l(t.styles,function(s){return e("li",[e("p",{style:{borderLeft:s.borderColor+" 4px solid",backgroundColor:s.bgColor,color:s.color,width:s.bar}},[t._v(t._s(s.text)),e("span",[t._v(t._s(s.bar))])]),t._v(" "),e("ul",{staticClass:"fade"},t._l(s.contexts,function(s){return e("li",[t._v(t._s(s))])}))])}))]),t._v(" "),e("div",{staticClass:"col-md-4 download"},[e("h3",{staticClass:"head-primary"},[t._v("基本信息")]),t._v(" "),e("ul",t._l(t.msg,function(s,a,r){return e("li",[e("strong",[t._v(t._s(a))]),t._v(" : "),e("span",{domProps:{innerHTML:t._s(s)}})])})),t._v(" "),e("h3",{staticClass:"head-primary"},[t._v("个人介绍")]),t._v(" "),e("p",[t._v("我是一个对前端由衷热爱、有趣的前端工程师。 我目前正在寻找前端工程师岗位的工作机会，希望借此为 贵公司献上我的一点绵薄之力，快招我到碗里来吧！")]),t._v(" "),t._m(0)])])]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"download-button-container"},[s("a",{staticClass:"download-button",attrs:{href:"./penghui-resume.pdf",target:"_blank"}},[this._v("Download PDF")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"project container cl"},[s("h3",{staticClass:"head-primary"},[this._v("项目与DEMO")])])}]};var l=e("VU/8")(n,i,!1,function(t){e("nfU/")},null,null).exports;e("pyoj"),e("TLER");a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:l},template:"<App/>"})}},["sSkr"]);
//# sourceMappingURL=index.fdfcb6dd2f90ee79516e.js.map