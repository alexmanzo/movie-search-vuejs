import Vue from 'vue'
import App from '@/App.vue'
import dotenv from 'dotenv'
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import router from '@/router'


// Global Compoonents
Vue.component('app-header', header)
Vue.component('app-footer', footer)

// Dependency Configs
dotenv.config()
Vue.use(require('vue-moment'))


// Vue Config
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app") 
