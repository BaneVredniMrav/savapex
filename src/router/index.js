import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about-us" */ '@/views/AboutUsView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "products" */ '@/components/Product.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '@/views/ServicesView.vue')
  },
  {
    path: '/references',
    name: 'References',
    component: () => import(/* webpackChunkName: "references" */ '@/views/ReferencesView.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact-us" */ '@/views/ContactUsView.vue')
  },
  {
    path: '/category-gallery/:id',
    name: 'CategoryGallery',
    component: () => import(/* webpackChunkName: "category-gallery" */ '@/components/CategoryGallery.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes
});

export default router;
