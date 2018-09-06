import Vue from 'vue'
import Router from 'vue-router'
import square from '@/components/square/square.vue'
import drag from '@/components/drag/drag.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/square',
      name: 'square',
      component: square
    },
    {
      path: '/',
      redirect: '/drag'
    }
  ]
})
