import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Cryptography.vue';
import Simmetrical from '../components/Simmetrical.vue'
import Asimmetrical from '../components/Asimmetrical.vue';
import Authors from '../components/Authors.vue';


export default createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/simmetrical',
      name: 'Simmetrical',
      component: Simmetrical
    },
    {
      path: '/asimmetrical',
      name: 'Asimmetrical',
      component: Asimmetrical
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    },
  ],
  history: createWebHistory(process.env.BASE_URL)
})


// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/simmetrical',
//     name: 'Simmetrical',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Simmetrical.vue')
//   },
//   {
//     path: '/asimmetrical',
//     name: 'Asimmetrical',
//     component: Asimmetrical
//   },
//   {
//     path: '/authors',
//     name: 'Authors',
//     component: Authors
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
