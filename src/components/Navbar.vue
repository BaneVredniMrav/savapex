<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import logo from "@/assets/img/footer-logo.png";

const route = useRoute();
const isMobileMenuOpen = ref(false);
const showToaster = ref(false);
const phoneNumber = "+381641234567";
const isMobile = ref(false);

const navLinks = [
  { path: "/", label: "Početna" },
  { path: "/about-us", label: "O Nama" },
  { path: "/products", label: "Proizvodi" },
  { path: "/services", label: "Usluge" },
  { path: "/references", label: "Reference" },
  { path: "/contact-us", label: "Kontakt" },
];

const copyPhoneNumber = async () => {
  try {
    await navigator.clipboard.writeText(phoneNumber);
    showToaster.value = true;
    setTimeout(() => (showToaster.value = false), 3000);
  } catch (err) {
    console.error("Kopiranje nije uspelo", err);
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
});
</script>

<template>
  <!-- Top bar -->
  <div class="fixed top-0 left-0 w-full bg-slate-700 text-sm py-2 z-50">
    <div class="container mx-auto flex justify-end px-4 sm:px-6 lg:px-8">
      <span class="mr-4">
        <a v-if="isMobile" :href="`tel:${phoneNumber}`" class="link">
          <i class="pi pi-phone mr-2"></i> {{ phoneNumber }}
        </a>
        <button v-else @click="copyPhoneNumber" class="link focus:outline-none">
          <i class="pi pi-phone mr-2"></i> {{ phoneNumber }}
        </button>
      </span>
      <span>
        <a href="mailto:info@savapex.rs" class="link">
          <i class="pi pi-envelope mr-2"></i> info@savapex.rs
        </a>
      </span>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="fixed top-8 left-0 w-full z-50 bg-slate-800 border-t border-b border-brandRose shadow-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img class="h-12 w-auto sm:h-14" :src="logo" alt="Savapex logo" />
        </RouterLink>

        <!-- Mobile Hamburger -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden text-white hover:bg-slate-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg v-if="!isMobileMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:space-x-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 sm:px-6 xl:px-10 2xl:px-12 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandOrange focus-visible:ring-offset-2"
            :class="route.path === link.path
              ? 'bg-brandOrange text-slate-900 shadow-lg border border-transparent'
              : 'text-white border border-transparent hover:text-brandOrange hover:border-brandOrange hover:shadow-md active:bg-brandOrange active:text-slate-900 active:border-transparent'"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="absolute top-16 left-0 w-full bg-slate-800 shadow-md">
        <div class="flex flex-col items-center py-4 space-y-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="px-4 py-2 rounded-lg w-full text-center"
            :class="route.path === link.path
              ? 'bg-brandOrange text-black border border-transparent'
              : 'text-white border border-transparent hover:border-brandOrange active:bg-brandOrange active:border-transparent active:text-slate-800'"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </transition>

    <!-- Toast notification -->
    <div
      v-if="showToaster"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brandOrange text-black px-8 py-4 rounded-lg shadow-xl text-lg font-semibold"
    >
      Broj je kopiran!
    </div>
  </nav>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
