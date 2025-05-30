<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import logo from "@/assets/img/footer-logo.png";

const navLinks = [
  { path: "/", label: "Početna" },
  { path: "/about-us", label: "O Nama" },
  { path: "/products", label: "Proizvodi" },
  { path: "/services", label: "Usluge" },
  { path: "/service-and-support", label: "Servis i Podrška" },
  { path: "/contact-us", label: "Kontakt" },
];

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

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
});
</script>

<template>
  <footer class="bg-slate-800 text-white border-t border-brandRose shadow-lg">
    <div class="mx-auto w-[90vw] px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
      <!-- O nama -->
      <div class="bg-slate-700 p-6 rounded-lg">
        <h3 class="text-xl font-bold border-b border-brandRose pb-2 mb-4 tracking-wide">
        O nama
        </h3>
        <RouterLink to="/">
        <img class="h-28 mx-auto" :src="logo" alt="Savapex" />
        </RouterLink>
        <p class="text-md text-gray-300 leading-relaxed mt-4">
        Savapex se bavi održavanjem, servisiranjem i popravkom kranova širom Srbije.
        Posvećeni smo kvalitetu, sigurnosti i pouzdanosti vaše opreme.
        </p>
      </div>

      <!-- Korisni linkovi -->
      <div class="bg-slate-700 p-6 rounded-lg">
        <h3 class="text-xl font-bold border-b border-brandRose pb-2 mb-4 tracking-wide">
        Korisni linkovi
        </h3>
        <ul class="space-y-3 text-gray-300">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink :to="link.path" class="link">
          {{ link.label }}
          </RouterLink>
        </li>
        </ul>
      </div>

      <!-- Kontakt -->
      <div class="bg-slate-700 p-6 rounded-lg">
        <h3 class="text-xl font-bold border-b border-brandRose pb-2 mb-4 tracking-wide">
        Kontakt
        </h3>
        <ul class="space-y-3 text-gray-300">
        <li>
          <a
          v-if="isMobile"
          :href="`tel:${phoneNumber}`"
          class="link"
          >
          <i class="pi pi-phone mr-2"></i> {{ phoneNumber }}
          </a>
          <button
          v-else
          @click="copyPhoneNumber"
          class="link focus:outline-none"
          >
          <i class="pi pi-phone mr-2"></i> {{ phoneNumber }}
          </button>
        </li>
        <li>
          <a href="mailto:info@savapex.rs" class="link">
          <i class="pi pi-envelope mr-2"></i> info@savapex.rs
          </a>
        </li>
        <li>
          <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener"
          class="link"
          >
          <i class="pi pi-map-marker mr-2"></i> Beograd, Srbija
          </a>
        </li>
        </ul>
      </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-slate-700 py-5">
      <div class="text-center text-sm text-gray-400">
        <p>
          2025 ©
          <a href="/" class="link">Savapex d.o.o.</a>
          | <RouterLink to="/politika-privatnosti" class="link">Politika privatnosti</RouterLink>
          | Web izrada:
          <a
            href="https://github.com/BaneVredniMrav"
            target="_blank"
            class="link"
          >
            BaneVredniMrav
          </a>
        </p>
      </div>
    </div>

    <!-- Custom Toaster Notification -->
    <div v-if="showToaster" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brandOrange text-black px-8 py-4 rounded-lg shadow-xl text-lg font-semibold">
      Broj je kopiran!
    </div>
  </footer>
</template>
