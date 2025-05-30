<script setup>
import AnimatedText from '@/components/AnimatedText.vue';
</script>

<template>
<section class="hero h-[70vh] bg-cover bg-center bg-fixed relative justify-center md:items-center">
  <div class="max-w-4xl px-4 text-center relative z-10">
    <AnimatedText
      title="O firmi Savapex"
      subtitle="Firma Savapex iz Kovačevca bavi se proizvodnjom, prodajom i ugradnjom industrijskih dizalica,
        sa specijalizacijom u rešavanju složenih zahteva industrijskih postrojenja. Naša misija je da pružimo
        visokokvalitetne proizvode koji omogućavaju efikasno i sigurno dizanje tereta u različitim industrijama.
        Sa dugogodišnjim iskustvom i stručnim timom, Savapex je sinonim za pouzdanost i profesionalizam."
        text-color="white"
      />
</div>
<div class="absolute inset-0 bg-black bg-opacity-40"></div>

  </section>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/kran10.jpg"); /* Replace with your own image URL */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  display: flex;
  justify-content: center;
}</style>
