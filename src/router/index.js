import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from '@/views/layout/index';

export const constantRoutes = [{
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/icons/index'),
      name: 'Icons',
      meta: {
        title: 'icons',
        icon: 'icon',
        noCache: true
      }
    }]
  }
];

export const asyncRoutes = [{
  path: '/error',
  component: Layout,
  name: 'ErrorPages',
  meta: {
    title: 'errorPages',
    icon: '404'
  },
  children: [{
      path: '401',
      name: 'Page401',
      component: () => import('@/views/error-page/401'),
      meta: {
        title: 'page401',
        noCache: true
      }
    },
    {
      path: '404',
      name: 'Page404',
      component: () => import('@/views/error-page/404'),
      meta: {
        title: 'page404',
        noCache: true
      }
    }
  ]
}]

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes
});

export default router;