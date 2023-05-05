import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { weatherRoutes } from '@/weather/weather.routes';
import authRouter from '@/router/auth';
import isAuthGuard from './auth/authGuard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/',
    beforeEnter: [ isAuthGuard ],
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
  ...weatherRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
