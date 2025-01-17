<script setup>
import { ref } from "vue";
import kran from "@/assets/img/kran1.jpg";

const services = ref([
  {
    title: "Popravka kranova",
    description: "Naše stručnjaci brzo i efikasno popravlja sve vrste kranova.",
    icon: "@/assets/img/kran2.jpg",
  },
  {
    title: "Održavanje opreme",
    description:
      "Pružamo preventivno održavanje za produženi vek trajanja vaše opreme.",
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
  <section class="bg-gray-200 py-12 px-5 text-center flex">
    <div class="max-w-screen-2xl mx-auto text-center">
      <h2
        class="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-slate-800 mt-8 mb-16"
      >
        Naše usluge
      </h2>
      <p class="text-xl sm:text-2xl mb-20 text-slate-800">
        Naša stručnost u popravkama kranova svih vrsta osigurava da vaša oprema
        bude uvek u vrhunskom stanju. Pogledajte naše ključne usluge i saznajte
        kako možemo unaprediti vašu produktivnost, smanjiti downtime i produžiti
        životni vek vaše opreme.
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 justify-center"
      >
        <div
          class="bg-[url('@/assets/img/kran2.jpg')] py-20 bg-cover p-8 rounded-lg text-center transform transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-10px] hover:shadow-lg"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="bg-black bg-opacity-55 p-8 rounded-lg">
            <h3 class="text-2xl sm:text-3xl text-white mb-4">
              {{ service.title }}
            </h3>
            <p class="text-base sm:text-xl text-white">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
