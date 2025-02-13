<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import logo from "@/assets/img/footer-logo.png";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const isMobileMenuOpen = ref(false);

// Otvaranje/zatvaranje mobilnog menija
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Zatvaranje mobilnog menija na klik opcije
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav class="bg-slate-800 border-b border-yellow-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <div
          class="flex flex-1 items-center justify-between md:items-stretch md:justify-start"
        >
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-16 w-auto ml-4" :src="logo" alt="Vue Jobs" />
          </RouterLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="lg:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="text-white hover:bg-slate-600 p-2 rounded-md"
          >
            <span v-if="!isMobileMenuOpen" class="text-5xl">&#9776;</span>
            <!-- Hamburger icon -->
            <span v-else class="text-4xl">&#10005;</span>
            <!-- Close icon -->
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:ml-auto">
          <div class="flex lg:space-x-2 xl:space-x-12">
            <RouterLink
              to="/"
              :class="[
                isActiveLink('/')
                  ? 'bg-slate-700'
                  : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
              >Početna</RouterLink
            >
            <RouterLink
              to="/about-us"
              :class="[
                isActiveLink('/about-us')
                  ? 'bg-slate-700'
                  : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
              >O Nama</RouterLink
            >
            <RouterLink
              to="/products"
              :class="[
                isActiveLink('/products')
                  ? 'bg-slate-700'
                  : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
              >Proizvodi</RouterLink
            >
            <RouterLink
              to="/services"
              :class="[
                isActiveLink('/services')
                  ? 'bg-slate-700'
                  : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
              >Usluge</RouterLink
            >
            <RouterLink
              to="/service-and-support"
              :class="[
                isActiveLink('/service-and-support')
                  ? 'bg-slate-700'
                  : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
              >Servis i Podrška</RouterLink
            >
            <RouterLink
              to="/contact-us"
              :class="[
                isActiveLink('/contact-us')
                  ? 'bg-slate-700'
                  : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
              >Kontakt</RouterLink
            >
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="lg:hidden">
        <div class="flex flex-col items-center space-y-4 py-4">
          <a
            href="tel:+1234567890"
            class="text-white px-8 py-2 hover:underline"
          >
            <i class="pi pi-phone font-semibold mr-2"></i> Pozovite nas
          </a>
          <RouterLink
            to="/"
            @click="closeMobileMenu"
            :class="[
              isActiveLink('/')
                ? 'bg-slate-700'
                : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
            >Početna</RouterLink
          >
          <RouterLink
            to="/about-us"
            @click="closeMobileMenu"
            :class="[
              isActiveLink('/about-us')
                ? 'bg-slate-700'
                : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
            >O Nama</RouterLink
          >
          <RouterLink
            to="/products"
            @click="closeMobileMenu"
            :class="[
              isActiveLink('/products')
                ? 'bg-slate-700'
                : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
            >Proizvodi</RouterLink
          >
          <RouterLink
            to="/services"
            @click="closeMobileMenu"
            :class="[
              isActiveLink('/services')
                ? 'bg-slate-700'
                : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
            >Usluge</RouterLink
          >
          <RouterLink
            to="/service-and-support"
            @click="closeMobileMenu"
            :class="[
              isActiveLink('/service-and-support')
                ? 'bg-slate-700'
                : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
            >Servis i Podrška</RouterLink
          >
          <RouterLink
            to="/contact-us"
            @click="closeMobileMenu"
            :class="[
              isActiveLink('/contact-us')
                ? 'bg-slate-700'
                : 'hover:bg-slate-600 hover:text-white',
              'text-white',
              'px-8',
              'py-2',
              'rounded-md',
            ]"
            >Kontakt</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
