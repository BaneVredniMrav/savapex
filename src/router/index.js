import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: ContactUsView,
    },    {
      path: "/service-and-support",
      name: "service-and-support",
      component: ContactUsView,
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
  ],
});

export default router;
