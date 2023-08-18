import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '../view/index.vue';
import Main from '../view/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/main',
    children: [
        {
            path: '/main',
            name: 'main',
            component: Main,
        },
        {
            path: '/hardware',
            name: 'hardware',
            component: () => import('../view/hardware/Main.vue'),
        },
        {
          path: '/software',
          name: 'software',
          component: () => import('../view/software/Main.vue'),
        },
        {
            path: '/down',
            name: 'Down',
            component: () => import('../view/down/Down.vue'),
        },
        {
          path: '/linkMe',
          name: 'linkMe',
          component: () => import('../view/linkMe.vue'),
        }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
