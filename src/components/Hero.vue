<script setup>
import { ref } from "vue";

const title = ref("Pouzdane usluge popravke kranova");
const subtitle = ref(
  "Održavamo vašu opremu za teški lifting u vrhunskom stanju, osiguravajući da vaše operacije teku glatko."
);
const buttonText = ref("Zatražite ponudu");

const handleClick = () => {
  console.log("Dugme za zahtevanje ponude je kliknuto!");
};
</script>

<template>
  <section class="hero h-[91.5vh] bg-cover bg-center bg-fixed relative flexr">
    <div class="max-w-4xl mx-auto px-4 py-12 text-center relative z-10">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-32 p-6"
      >
        {{ title }}
      </h1>
      <p class="text-xl sm:text-2xl lg:text-3xl mt-8 mb-16 text-white p-4">
        {{ subtitle }}
      </p>
      <button
        @click="handleClick"
        class="bg-slate-800 text-xl text-white px-8 py-4 rounded-3xl hover:bg-slate-900 hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        {{ buttonText }}
      </button>
    </div>
    <!-- Optional: Add an overlay for better contrast with the background image -->
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/kran.jpg"); /* Replace with your own image URL */
}
</style>
