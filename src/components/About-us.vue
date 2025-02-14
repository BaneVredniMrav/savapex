<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reaktivne promenljive
const isTitleVisible = ref(false); // Praćenje vidljivosti <h1> elementa
const isTextVisible = ref(false); // Praćenje vidljivosti <p> elementa
const titleRef = ref(null); // Referenca na <h1> element
const textRef = ref(null); // Referenca na <p> element

// Intersection Observer callback funkcija
const handleIntersection = (entries, observerTarget) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    if (observerTarget === 'title') isTitleVisible.value = true;
    if (observerTarget === 'text') isTextVisible.value = true;
  }
};

let titleObserver, textObserver; // Promenljive za Intersection Observer-e

// Inicijalizacija observer-a
onMounted(() => {
  // Observer za <h1>
  titleObserver = new IntersectionObserver((entries) => handleIntersection(entries, 'title'), {
    threshold: 0.5,
  });
  if (titleRef.value) {
    titleObserver.observe(titleRef.value);
  }

  // Observer za <p>
  textObserver = new IntersectionObserver((entries) => handleIntersection(entries, 'text'), {
    threshold: 0.5,
  });
  if (textRef.value) {
    textObserver.observe(textRef.value);
  }
});

// Čišćenje observer-a
onUnmounted(() => {
  if (titleObserver && titleRef.value) {
    titleObserver.unobserve(titleRef.value);
  }
  if (textObserver && textRef.value) {
    textObserver.unobserve(textRef.value);
  }
});
</script>

<template>
  <section class="bg-slate-600 py-16 h-[91.5vh]">
    <div class="container mx-auto px-4 text-center">
      <!-- Naslov sekcije -->
      <h1
        class="text-5xl font-extrabold text-gray-800 mb-8"
        :class="{ 'text-focus-in': isTitleVisible }"
        ref="titleRef"
      >
        O firmi Savapex
      </h1>

      <!-- Tekst sekcije -->
      <p
        class="text-lg text-gray-700 mx-auto max-w-3xl leading-relaxed"
        :class="{ 'text-focus-in': isTextVisible }"
        ref="textRef"
      >
        Firma Savapex iz Kovačevca bavi se proizvodnjom, prodajom i ugradnjom industrijskih dizalica,
        sa specijalizacijom u rešavanju složenih zahteva industrijskih postrojenja. Naša misija je da pružimo
        visokokvalitetne proizvode koji omogućavaju efikasno i sigurno dizanje tereta u različitim industrijama.
        Sa dugogodišnjim iskustvom i stručnim timom, Savapex je sinonim za pouzdanost i profesionalizam.
      </p>
    </div>
  </section>
</template>


<style scoped>
/* Animacija za text-focus-in */
.text-focus-in {
  animation: text-focus-in .6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
</style>
