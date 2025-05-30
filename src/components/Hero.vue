<script setup>
import AnimatedText from "./AnimatedText.vue";

</script>

<template>
<section class="hero h-[70vh] bg-cover bg-center bg-fixed relative justify-center md:items-center">
  <div class="max-w-4xl px-4 py-12 text-center relative z-10">
      <!-- Title with animation -->
      <AnimatedText 
        title="Visokokvalitetne industrijske dizalice za vašu efikasnost i sigurnost"
        subtitle="Savapex donosi pouzdana i inovativna rešenja – od proizvodnje do ugradnje, sa fokusom na dugoročnu pouzdanost i sigurnost vaših operacija"
        text-color="white"
        background-color="black"
      /> 
      <!-- Button with click animation -->
      <RouterLink
        to="/contact-us"
        class="text-xl px-12 py-4 btn-primary"
        aria-label="Contact-us"
      >
        Kontaktirajte nas
      </RouterLink>
    </div>

    <!-- Optional: Add an overlay for better contrast with the background image -->
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/krane13.jpg"); /* Replace with your own image URL */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  display: flex;
  justify-content: center;
}

/* Responsive adjustment for smaller screens */
@media (max-width: 768px) {
  .hero button {
    width: 100%; /* Make button full-width on mobile */
    padding: 16px; /* Add padding for better touch target */
  }
}
</style>
