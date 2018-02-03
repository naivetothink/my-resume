import Vue from 'vue'
import App from './App.vue'

import '../../styles/reset.css'
import '../../styles/comment.css'
// 　require('./styles/reset.css');也可以
new Vue({
  el: '#app',
  render: h => h(App)
})
