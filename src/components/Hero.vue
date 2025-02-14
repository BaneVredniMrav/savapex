<script setup>
import { ref, onMounted } from "vue";
import AnimatedText from "./AnimatedText.vue";

// Reactive variables for animations
const isVisible = ref(false); // Animation on load
const isButtonClicked = ref(false); // Animation on button click

const handleClick = () => {
  console.log("Request quote button clicked!");

  // Trigger animation on click
  isButtonClicked.value = true;

  // Remove animation after it finishes
  setTimeout(() => {
    isButtonClicked.value = false;
  }, 800); // Duration must match @keyframes definition
};

// Trigger animations when the component is mounted
onMounted(() => {
  isVisible.value = true; // Trigger animations for all elements
});
</script>

<template>
<section class="hero h-[91.5vh] bg-cover bg-center bg-fixed relative justify-center items-center">
  <div class="max-w-4xl px-4 py-12 text-center relative z-10">
      <!-- Title with animation -->
      <AnimatedText 
        title="Visokokvalitetne industrijske dizalice za vašu efikasnost i sigurnost"
        subtitle="Savapex donosi pouzdana i inovativna rešenja – od proizvodnje do ugradnje, sa fokusom na dugoročnu pouzdanost i sigurnost vaših operacija"
        text-color="white"
      /> 
      <!-- Button with click animation -->
      <button
        @click="handleClick"
        class="bg-slate-800 text-xl text-white px-24 py-4 rounded-3xl hover:bg-slate-600 transform transition-all duration-300 ease-in-out"
        :class="{ 'shake-bottom': isButtonClicked }"
        aria-label="Contact us"
      >
        Contact us
      </button>
    </div>

    <!-- Optional: Add an overlay for better contrast with the background image -->
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/kran.jpg"); /* Replace with your own image URL */
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

/* Animation for shake-bottom */
.shake-bottom {
  animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
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
