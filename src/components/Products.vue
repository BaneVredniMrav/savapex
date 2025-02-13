<script setup>
import { ref } from "vue";
import kran from "@/assets/img/kran1.jpg";

const services = ref([
  {
    title: "Popravka kranova",
    description: "Naši stručnjaci brzo i efikasno popravljaju sve vrste kranova.",
    icon: "@/assets/img/kran2.jpg",
  },
  {
    title: "Održavanje opreme",
    description: "Pružamo preventivno održavanje za produženi vek trajanja vaše opreme.",
    icon: "@/assets/img/kran3.jpg",
  },
  {
    title: "Instalacija novih sistema",
    description: "Instaliramo nove sisteme i tehnologije za vaše kranove.",
    icon: "@/assets/img/kran4.jpg",
  },
]);
</script>

<template>
  <section class="bg-gray-100 py-16 px-6 md:px-12">
    <!-- Header Section -->
    <div class="max-w-screen-lg mx-auto text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Naša ponuda dizalica</h2>
      <p class="text-lg md:text-xl text-slate-600 leading-relaxed">
        Pronađite dizalicu koja odgovara vašim potrebama
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="relative bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300"
      >
        <!-- Service Image -->
        <div
          class="h-64 bg-cover bg-center"
          :style="{ backgroundImage: `url(${service.icon})` }"
        ></div>

        <!-- Content Section -->
        <div class="p-6 text-center">
          <h3 class="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-indigo-600 transition duration-300">
            {{ service.title }}
          </h3>
          <p class="text-slate-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-slate-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <button class="text-white font-semibold px-6 py-3 bg-slate-700 hover:bg-slate-800 rounded-lg shadow-lg">
            Saznaj Više
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animacije i prilagođeni hover efekti */
.group:hover .group-hover\:text-indigo-600 {
  color: gray; /* Indigo 600 */
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* Unapređenje pozadinskih slika */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

/* Prilagodbe za kartice */
.shadow-lg {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.shadow-2xl {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Dugme na hover */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
</style>
