import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    redirect: () => {
      return '/home'
    }
  },
  // 首页
  {
    path: '/home',
    component: Home
  },
  // 表单
  {
    path: '/form',
    component: resolve => {
      require(['@/views/form/index.vue'], resolve)
    }
  },
  // 地址-列表
  {
    path: '/address/list',
    component: resolve => {
      require(['@/views/address/list.vue'], resolve)
    }
  },
  // 地址-详情
  {
    path: '/address/detail',
    component: resolve => {
      require(['@/views/address/detail.vue'], resolve)
    }
  },
  // 商品
  {
    path: '/goods',
    component: resolve => {
      require(['@/views/goods/index.vue'], resolve)
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
