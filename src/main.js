import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css'
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import Profile from './components/Profile.vue';
import Login from './components/Login.vue';

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/profile',
      component: Profile,
      meta: { requiresAuth: true }
    }
  ]
});

// Глобальный навигационный хук
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

// Создаем и монтируем приложение
const app = createApp(App);
app.use(router); // Используем роутер
app.mount('#app');