import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ServiceAndSupportView from "@/views/ServiceAndSupportView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import CategoryGallery from '../components/CategoryGallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // BASE_URL mora biti podešen u vite.config.js
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    } else {
        return { top: 0 }; 
    }
},
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUsView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },    {
      path: "/service-and-support",
      name: "service-and-support",
      component: ServiceAndSupportView,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
    {
      path: '/category-gallery/:id',
      name: 'category-galery',
      component: CategoryGallery
    }
  ],
});

export default router;
