import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Unity from 'vue-unity-webgl'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  components: { Unity },
  router,
  render: h => h(App)
}).$mount('#app')
