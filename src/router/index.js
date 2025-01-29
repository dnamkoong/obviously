import { createRouter, createWebHistory } from "vue-router";
import SignInView from '../views/SignInView.vue';
import LibraryView from '../views/LibraryView.vue';

const routes = [
  {
    path: '/',
    component: SignInView
  },
  {
    path: '/library',
    component: LibraryView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.fullPath}`);
  next();
})

export default router;