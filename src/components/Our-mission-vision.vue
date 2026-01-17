<script setup>
import mission from '@/assets/img/mission.png';
import vision from '@/assets/img/vision.png';
</script>

<template>
  <section class="section-dark py-12 sm:py-16 md:py-24">
    <!-- Title Section -->
    <div class="text-center mb-8 sm:mb-12 md:mb-16 container-narrow px-4">
      <h2 class="text-white mb-3 sm:mb-4 animate-fade-in">
        Vođeni svrhom, usmereni ka budućnosti
      </h2>
      <p class="text-slate-300 animate-fade-in delay-150">
        Naša misija i vizija oblikuju naš identitet i usmeravaju nas ka inovacijama i poverenju.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 container-wide lg:max-w-5xl mx-auto px-4">
      <!-- Mission Card -->
      <div class="card-glass animate-slide-up">
        <img :src="mission" alt="Misija" class="w-14 h-14 sm:w-20 sm:h-20 mb-4 sm:mb-6" />
        <h3 class="text-white">Naša Misija</h3>
        <p class="text-slate-300">
          Naš cilj je da klijentima pružimo najefikasnije i najpouzdanije sisteme za dizanje i transport, uz potpunu podršku tokom celog životnog veka opreme.
        </p>
      </div>

      <!-- Vision Card -->
      <div class="card-glass animate-slide-up delay-200">
        <img :src="vision" alt="Vizija" class="w-14 h-14 sm:w-20 sm:h-20 mb-4 sm:mb-6" />
        <h3 class="text-white">Naša Vizija</h3>
        <p class="text-slate-300">
          Težimo da postanemo vodeći regionalni partner u industriji dizalica i kranskih sistema, prepoznat po tehničkoj izvrsnosti i poverenju.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in.delay-150 {
  animation-delay: 0.15s;
}

.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
}

.animate-slide-up.delay-200 {
  animation-delay: 0.2s;
}
</style>
