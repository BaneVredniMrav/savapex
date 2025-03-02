<script setup>
import AnimatedText from "./AnimatedText.vue";

</script>

<template>
<section class="hero h-screen bg-cover bg-center bg-fixed relative justify-center md:items-center">
  <div class="max-w-4xl px-4 py-12 text-center relative z-10">
      <!-- Title with animation -->
      <AnimatedText 
        title="Visokokvalitetne industrijske dizalice za vašu efikasnost i sigurnost"
        subtitle="Savapex donosi pouzdana i inovativna rešenja – od proizvodnje do ugradnje, sa fokusom na dugoročnu pouzdanost i sigurnost vaših operacija"
        text-color="white"
      /> 
      <!-- Button with click animation -->
      <RouterLink
      to="/contact-us"
        class="bg-slate-800 text-xl text-white px-12 py-4 rounded-lg hover:bg-brandOrange hover:text-slate-800 transform transition-all duration-300 ease-in-out font-semibold"
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
  background-image: url("@/assets/img/kran4.jpg"); /* Replace with your own image URL */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  display: flex;
  justify-content: center;
}

.hero .max-w-4xl {
  width: 100%;
  max-width: 800px; /* Limiting the width of content */
  padding: 0 16px; /* Adds some padding on smaller screens */
}

/* Responsive adjustment for smaller screens */
@media (max-width: 768px) {
  .hero button {
    width: 100%; /* Make button full-width on mobile */
    padding: 16px; /* Add padding for better touch target */
  }
}
</style>
