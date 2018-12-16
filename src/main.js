import Vue from "vue";
import App from "@/App.vue";
import router from '@/router'
import dotenv from 'dotenv'
import header from '@/components/header.vue'

Vue.component('app-header', header)

dotenv.config()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app") 
