<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted, nextTick } from "vue";
import logo from "@/assets/img/footer-logo.png";

const route = useRoute();
const isMobileMenuOpen = ref(false);
const phoneNumber = "+381641234567";
const showToaster = ref(false);
const isMobile = ref(false);

const copyPhoneNumber = async () => {
  try {
    await navigator.clipboard.writeText(phoneNumber);
    showToaster.value = true;
    setTimeout(() => {
      showToaster.value = false;
    }, 3000);
  } catch (err) {
    console.error("Kopiranje nije uspelo", err);
  }
};

const toggleMobileMenu = async () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  await nextTick();
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

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
    const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>

<template>
  <!-- Gornja traka sa kontakt informacijama -->
  <div class="flex fixed top-0 left-0 w-full bg-slate-100 dark:bg-slate-700 text-sm py-2 z-50 ">
        <div class="container mx-auto flex justify-start px-4 sm:px-6 lg:px-8">
            <button @click="toggleDarkMode" class="px-2 rounded text-slate-800 dark:text-white">
    {{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}
  </button>
        </div>
    <div class="container mx-auto flex justify-end px-4 sm:px-6 lg:px-8">
      <span class="mr-4">
        <a
          v-if="isMobile"
          :href="`tel:${phoneNumber}`"
          class="link text-slate-800 dark:text-white"
        >
          <i class="pi pi-phone mr-2"></i> {{ phoneNumber }}
        </a>
        <button
          v-else
          @click="copyPhoneNumber"
          class="link focus:outline-none text-slate-800 dark:text-white"
        >
          <i class="pi pi-phone mr-2"></i> {{ phoneNumber }}
        </button>
      </span>
      <span>
        <a href="mailto:info@savapex.rs" class="link text-slate-800 dark:text-white">
          <i class="pi pi-envelope mr-2"></i> info@savapex.rs
        </a>
      </span>
    </div>
  </div>

  <!-- Navigacija -->
  <nav class="fixed top-8 left-0 w-full z-50 bg-slate-200 dark:bg-slate-800 border-t border-b border-brandRose shadow-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img class="h-12 w-auto sm:h-14" :src="logo" alt="Vue Jobs" />
        </RouterLink>

        <!-- Mobile Hamburger Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden text-slate-800 dark:text-white hover:bg-slate-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg v-if="!isMobileMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:space-x-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 rounded-lg "
            :class="[
              'px-4 py-2 sm:px-6 xl:px-10 2xl:px-12 rounded-lg font-semibold transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandOrange focus-visible:ring-offset-2',
              route.path === link.path
                ? 'bg-brandOrange text-slate-800 dark:text-white shadow-lg border border-transparent'
                : 'text-slate-800 dark:text-white border border-transparent hover:text-brandOrange dark:hover:text-brandOrange hover:border-brandOrange hover:shadow-md active:bg-brandOrange active:text-slate-800 dark:active:text-white active:border-transparent'
            ]"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="absolute top-16 left-0 w-full bg-slate-200 dark:bg-slate-800 shadow-md">
        <div class="flex flex-col items-center py-4 space-y-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="px-4 py-2 rounded-lg w-full text-center"
            :class="route.path === link.path ? 'bg-brandOrange dark:text-white text-black border border-transparent' : 'text-slate-800 dark:text-white border border-transparent hover:border-brandOrange active:bg-brandOrange active:border-transparent active:text-slate-800 dark:active:text-white'"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </transition>
    <div v-if="showToaster" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brandOrange dark:text-white text-slate-800 px-8 py-4 rounded-lg shadow-xl text-lg font-semibold">
      Broj je kopiran!
    </div>
  </nav>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
