import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/books',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue'),
  },
  {
    path: '/books/:bookId/requests',
    name: 'BookRequests',
    component: () => import('../views/BookRequests.vue'),
  },
  {
    path: '/books/my',
    name: 'MyBooks',
    component: () => import('../views/MyBooks.vue'),
  },
  {
    path: '/requests',
    name: 'Requests',
    component: () => import('../views/Requests.vue'),
  },
  {
    path: '/requests/new',
    name: 'NewRequest',
    component: () => import('../views/NewRequest.vue'),
  },
  {
    path: '/requests/incoming',
    name: 'IncomingRequests',
    component: () => import('../views/IncomingRequests.vue'),
  },
  {
    path: '/requests/:requestId/select',
    name: 'RequestSelect',
    component: () => import('../views/RequestSelect.vue'),
  },
  {
    path: '/trades',
    name: 'Trades',
    component: () => import('../views/Trades.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/users/edit',
    name: 'EditProfile',
    component: () => import('../views/EditProfile.vue'),
  },
  {
    path: '/users/:userId/books',
    name: 'UsersBooks',
    component: () => import('../views/UsersBooks.vue'),
  },
  {
    path: '/users/:userId',
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
