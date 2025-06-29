<script setup>
import AnimatedText from "./AnimatedText.vue";
</script>

<template>
<section class="hero h-[100vh] bg-fixed relative md:items-center">
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
        class="text-xl px-10 py-4 btn-primary dark:bg-white dark:text-black"
        aria-label="Contact-us"
      >
        Kontaktirajte nas
      </RouterLink>
    </div>

    <!-- Overlay for better contrast, adapts to dark mode -->
    <div class="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/krane13.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  position: relative;
}

/* Responsive adjustment for smaller screens */
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
