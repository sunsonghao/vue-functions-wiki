// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import autoRegisterComponent from './libs/autoRegisterComponents'

Vue.use(autoRegisterComponent);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    // 预渲染插件中配置
    document.dispatchEvent(new Event('render-event'))
  }
})
