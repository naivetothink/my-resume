gz-components/<template>
  <div id="app">
    <v-header :isActive='isActive'></v-header>
    <content>
      <v-banner></v-banner>
      <v-sever></v-sever>
      <v-design></v-design>
      <v-news></v-news>
    </content>
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from '../../components/gz-components/header/header.vue'
import footer from '../../components/gz-components/footer/Footer.vue'
import banner from './banner/Banner.vue'
import sever from './sever/Sever.vue'
import design from './design/Design.vue'
import news from './news/News.vue'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: 'index',

    }
  },
  components:{
     'v-header':header,
     'v-footer':footer,
     'v-banner':banner,
     'v-sever':sever,
     'v-design':design,
     'v-news':news,
  }
}
</script>
<style>


</style>