<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import logo from "@/assets/img/footer-logo.png";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const navLinks = [
  { path: "/", label: "Početna" },
  { path: "/about-us", label: "O Nama" },
  { path: "/products", label: "Proizvodi" },
  { path: "/services", label: "Usluge" },
  { path: "/service-and-support", label: "Servis i Podrška" },
  { path: "/contact-us", label: "Kontakt" },
];
</script>

<template>
  <nav class="bg-slate-800 border-b border-yellow-500">
    <div class="mx-auto w-[90vw] px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex flex-1 items-center justify-between md:items-stretch md:justify-start py-2">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-20 w-auto ml-4" :src="logo" alt="Vue Jobs" />
          </RouterLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="lg:hidden flex items-center">
          <button @click="toggleMobileMenu" class="text-white hover:bg-slate-600 p-2 rounded-md">
            <span v-if="!isMobileMenuOpen" class="text-5xl">&#9776;</span>
            <span v-else class="text-4xl">&#10005;</span>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex">
            <div class="flex lg:space-x-2 xl:space-x-4">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              :class="[
              isActiveLink(link.path) ? 'bg-slate-700' : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'lg:px-5',
              'xl:px-8',
              'py-2',
              'rounded-md',
              ]"
            >{{ link.label }}</RouterLink>
            </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="lg:hidden">
        <div class="flex flex-col items-center space-y-4 py-4">
          <a href="tel:+1234567890" class="text-white px-8 py-2 hover:underline">
            <i class="pi pi-phone font-semibold mr-2"></i> Pozovite nas
          </a>
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            :class="[
              isActiveLink(link.path) ? 'bg-slate-700' : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
          >{{ link.label }}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
