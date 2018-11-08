import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VuePreview from 'vue-preview'
// Vue.use(VuePreview)

Vue.use(VuePreview, {
  // mainClass: 'pswp--minimal--dark',
  // barsSize: { top: 0, bottom: 0 },
  // captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.95
  // tapToClose: true,
  // tapToToggleControls: false
})

import VueImageSwipe from 'vue-image-swipe'
import 'vue-image-swipe/dist/vue-image-swipe.css'
Vue.use(VueImageSwipe)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
