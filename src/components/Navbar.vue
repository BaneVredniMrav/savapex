<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";
import logo from "@/assets/img/footer-logo.png";

const route = useRoute();

const isActiveLink = (routePath) => {
  return computed(() => route.path === routePath);
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

const copyPhoneNumber = () => {
  const phoneNumber = "+1234567890"; // Replace with actual number
  navigator.clipboard.writeText(phoneNumber)
    .then(() => {
      alert("Broj telefona je sačuvan u memoriji!"); // Optional notification
    })
    .catch((err) => {
      console.error("Greška pri kopiranju broja:", err);
    });
};
</script>

<template>
  <nav class="bg-slate-800 border-b border-yellow-500">
    <div class="mx-auto w-[95.5vw] px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
          <img class="h-24 w-auto ml-4" :src="logo" alt="Vue Jobs" />
        </RouterLink>

        <!-- Mobile Hamburger Button -->
        <button @click="toggleMobileMenu" class="text-white hover:bg-slate-600 p-2 rounded-md lg:hidden" aria-label="Toggle mobile menu">
          <span v-if="!isMobileMenuOpen" class="text-5xl">&#9776;</span>
          <span v-else class="text-4xl">&#10005;</span>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex flex-col items-center justify-center text-center w-full">
            <div class="border-b max-w-xl ml-auto">
            <div class="flex lg:space-x-6 xl:px-8 pt-2">
              <button @click="copyPhoneNumber" class="text-white flex items-center justify-center transition-transform transform hover:scale-105">
              <i class="pi pi-phone font-semibold mr-2"></i> 011/ 2-111-333
              </button>
              <a href="mailto:info@savapex.com" class="text-white text-center flex items-center justify-center transition-transform transform hover:scale-105">
              <i class="pi pi-envelope font-semibold mr-2"></i> info@savapex.com
              </a>
            </div>
            </div>
          <div class="py-4 ">
            <div class="flex items-center">
              <RouterLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                :class="[
                  isActiveLink(link.path).value ? 'bg-slate-700' : 'hover:bg-slate-600 hover:text-white',
                  'text-white',
                  'xl:px-10',
                  'lg:px-6',
                  'py-2',
                  'mx-1',
                  'rounded-md',
                  'text-center',
                  'lg:text-base',
                  'xl:text-lg',
                  'flex',
                  'items-center',
                  'justify-center',
                ]"
              >{{ link.label }}</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
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
                isActiveLink(link.path).value ? 'bg-slate-700' : 'hover:bg-slate-600 hover:text-white',
                'text-white',
                'px-8',
                'py-2',
                'rounded-md',
              ]"
            >{{ link.label }}</RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
