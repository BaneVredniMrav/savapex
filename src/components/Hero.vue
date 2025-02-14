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
  <section class="hero h-[91.5vh] bg-cover bg-center bg-fixed relative">
    <div class="max-w-4xl mx-auto px-4 py-12 text-center relative z-10">
      <!-- Title with animation -->
      <AnimatedText 
        title="Your partner for industrial cranes"
        subtitle="Savapex is a leader in the production, sale, and installation of high-quality industrial cranes. We guarantee safety, reliability, and top quality in every project."
        text-color="white"
      /> 
      <!-- Button with click animation -->
      <button
        @click="handleClick"
        class="bg-slate-800 text-xl text-white px-8 py-4 rounded-3xl hover:bg-slate-600 transform transition-all duration-300 ease-in-out"
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
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

/* Animation for text-focus-in */
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
