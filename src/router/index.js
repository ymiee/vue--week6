import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomeView',
        component: () => import('../views/Front/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'AboutView',
        component: () => import('../views/Front/AboutView.vue'),
      },
      {
        path: 'products',
        name: 'ProductsView',
        component: () => import('../views/Front/ProductsView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'productsadmin',
        name: 'ProductsAdmin',
        component: () => import('../views/Dashboard/ProductsAdmin.vue'),
      },
      {
        path: 'ordersadmin',
        name: 'OrdersAdmin',
        component: () => import('../views/Dashboard/OrdersAdmin.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
