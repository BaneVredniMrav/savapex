<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AnimatedText from "./AnimatedText.vue";
import { RouterLink } from 'vue-router'
import kran13 from '@/assets/img/krane13.jpg'
import kran10 from '@/assets/img/kran10.png'
import new1 from '@/assets/img/new/1.jpg'

const images = [
  kran13,
  kran10,
  new1
]

const currentIndex = ref(0)

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000) // menja sliku na svakih 5 sekundi
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <section
    class="hero h-[100vh] bg-fixed relative md:items-center transition-bg"
    :style="{ backgroundImage: `url(${images[currentIndex]})` }"
  >
    <div class="max-w-4xl px-4 text-center relative z-10">
      <!-- Title with animation -->
      <AnimatedText 
        title="Visokokvalitetne industrijske dizalice za vašu efikasnost i sigurnost"
        subtitle="Savapex donosi pouzdana i inovativna rešenja – od proizvodnje do ugradnje, sa fokusom na dugoročnu pouzdanost i sigurnost vaših operacija"
        text-color="white"
        background-color="gray"
      /> 
      <!-- Button with click animation -->
      <RouterLink
        to="/contact-us"
        class="text-xl btn-primary"
        aria-label="Contact-us"
      >
        Kontaktirajte nas
      </RouterLink>
    </div>

    <!-- Overlay for better contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  </section>
</template>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  position: relative;
  transition: background-image 1s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    background-position: top center; 
    min-height: 80vh; 
    background-attachment: scroll;
  }

  .hero button {
    width: 100%;
    padding: 16px;
  }
}
</style>
