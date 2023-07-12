import { createRouter, createWebHistory } from 'vue-router'
import httpRequest from '../utils/httpRequest'
import HomeView from '../views/Home.vue'
import {EL_MAP, WHITE_LIST} from '../constants/auth/LoginConstant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const toPath = to.path;
  if (EL_MAP.has(toPath)) {
    const url = EL_MAP.get(toPath);
    httpRequest.get(url + '?code=' + to.query.code)
    .then(res => {
      const data = res.data;

      if (data.code == 200) {
        localStorage.setItem("access_token", "1");
        router.push({name: 'home'});
      } else {
        router.push({name: 'login'});
      }
    });
  }

  if (!WHITE_LIST.includes(toPath)) {
    if (!localStorage.getItem('access_token')) {
      router.push({name: 'login'});
    }
  }
  next();
})

export default router
