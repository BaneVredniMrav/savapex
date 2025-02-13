<script setup>
import { ref, onMounted } from "vue";

// Tekstovi za naslov, podnaslov i dugme
const title = ref("Vaš partner za industrijske dizalice");
const subtitle = ref(
  "Savapex je lider u proizvodnji, prodaji i ugradnji visokokvalitetnih industrijskih dizalica. Garantujemo sigurnost, pouzdanost i vrhunski kvalitet u svakom projektu."
);
const buttonText = ref("Kontaktirajte nas");

// Reaktivne promenljive za animacije
const isVisible = ref(false); // Animacija pri učitavanju
const isButtonClicked = ref(false); // Animacija na klik dugmeta

const handleClick = () => {
  console.log("Dugme za zahtevanje ponude je kliknuto!");
  
  // Pokreće animaciju na klik
  isButtonClicked.value = true;

  // Uklanja animaciju nakon završetka
  setTimeout(() => {
    isButtonClicked.value = false;
  }, 800); // Trajanje animacije mora odgovarati @keyframes definiciji
};

// Pokreni animacije kad je komponenta montirana
onMounted(() => {
  isVisible.value = true; // Pokreće animacije za sve elemente
});
</script>

<template>
  <section class="hero h-[91.5vh] bg-cover bg-center bg-fixed relative">
    <div class="max-w-4xl mx-auto px-4 py-12 text-center relative z-10">
      <!-- Naslov sa animacijom -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-32 p-6"
        :class="{ 'text-focus-in': isVisible }"
      >
        {{ title }}
      </h1>

      <!-- Podnaslov sa animacijom -->
      <p
        class="text-xl sm:text-2xl lg:text-3xl mt-8 mb-16 text-white p-4"
        :class="{ 'text-focus-in': isVisible }"
      >
        {{ subtitle }}
      </p>

      <!-- Dugme sa animacijom na klik -->
      <button
        @click="handleClick"
        class="bg-slate-800 text-xl text-white px-8 py-4 rounded-3xl hover:bg-slate-600 transform transition-all duration-300 ease-in-out"
        :class="{ 'shake-bottom': isButtonClicked }"
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
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: left; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

/* Animacija za text-focus-in */
.text-focus-in {
  animation: text-focus-in 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

/* Animacija za shake-bottom */
.shake-bottom {
  animation: shake-bottom .8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@keyframes shake-bottom {
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(4px);
  }
  20%,
  40%,
  60% {
    transform: translateY(-4px);
  }
  80% {
    transform: translateY(2px);
  }
  90% {
    transform: translateY(-2px);
  }
}
</style>
