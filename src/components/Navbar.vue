<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";
import logo from "@/assets/img/footer-logo.png";

const route = useRoute();
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

const isActiveLink = (routePath) => computed(() => route.path === routePath);
</script>

<template>
  <nav class="bg-slate-800 border-b border-brandRose shadow-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-3">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img class="h-12 w-auto sm:h-16" :src="logo" alt="Vue Jobs" />
        </RouterLink>

        <!-- Mobile Hamburger Button -->
        <button @click="toggleMobileMenu" class="lg:hidden text-white hover:bg-slate-700 p-2 rounded-md">
          <span v-if="!isMobileMenuOpen" class="text-3xl sm:text-4xl">&#9776;</span>
          <span v-else class="text-3xl sm:text-4xl">&#10005;</span>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:space-x-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[ 
              isActiveLink(link.path).value 
                ? 'bg-brandOrange text-black shadow-lg-brandOrange' 
                : 'text-white hover:bg-brandOrange hover:text-black',
              'px-4 py-2 rounded-lg transition-all duration-300 sm:px-6 xl:px-10 2xl:px-12'
            ]"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="lg:hidden shadow-md">
        <div class="flex flex-col items-center py-4 space-y-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            :class="[
              isActiveLink(link.path).value 
                ? 'bg-brandOrange text-black' 
                : 'text-white hover:bg-brandOrange hover:text-black',
              'px-4 py-2 rounded-lg transition-all duration-300 w-full text-center'
            ]"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
