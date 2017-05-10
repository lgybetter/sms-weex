import Router from 'vue-router'
import App from './index.vue'
import router from './router'

Vue.use(Router)
new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/auth')