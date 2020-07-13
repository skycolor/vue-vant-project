import Vue from 'vue'
import VConsole from 'vconsole'
import Navigation from 'vue-navigation'
import FastClick from 'fastclick'

import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './components/'
import filters from './filters'
// 公用UI组件
import { Toast, Dialog, Lazyload, Image as VanImage } from 'vant';
// 工具
import myUtils from './utils'

// 全局组件
Vue.use(plugins)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(VanImage)
Vue.use(Lazyload, {
  lazyComponent: true
})

// 引入全局参数
Vue.prototype.toast = Toast
Vue.prototype.dialog = Dialog
Vue.prototype.moment = global.moment
Vue.prototype.addon = myUtils.addon
Vue.prototype.store = myUtils.store
Vue.prototype.api = myUtils.api
Vue.prototype.tool = myUtils.tool

global.toast = Toast
global.api = myUtils.api
global.addon = myUtils.addon
global.localStore = myUtils.store
global.tool = myUtils.tool

// 开发环境下面使用vConsole进行调试，自动的eruda工具
if (process.env.NODE_ENV === 'development') {
  new VConsole()
}
// 用于控制浏览器前进后退缓存
Vue.use(Navigation, {
  router,
  store
})
// 处理点击事件延迟300ms问题
FastClick.attach(document.body)
// 处理过滤器
for(let key in filters){
  key && filters[key] && Vue.filter(key, filters[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
