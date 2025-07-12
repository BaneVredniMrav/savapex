<script setup>
import mission from '@/assets/img/mission.png';
import vision from '@/assets/img/vision.png';
</script>

<template>
  <section class="bg-slate-700 py-24 px-6 md:px-12">
    <!-- Title Section -->
    <div class="text-center mb-20 max-w-3xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
        Vođeni svrhom, usmereni ka budućnosti
      </h2>
      <p class="text-lg md:text-xl text-slate-300 animate-fade-in delay-150">
        Naša misija i vizija oblikuju naš identitet i usmeravaju nas ka inovacijama i poverenju.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 max-w-6xl mx-auto">
      <!-- Mission Card -->
      <div
      class="bg-white/5 border border-brandRose backdrop-blur-md rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.025] hover:shadow-[0_0_60px_0_rgba(255,255,255,0.05)] shadow-lg animate-slide-up"
      >
      <img :src="mission" alt="Misija" class="w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110" />
      <h3 class="text-white">Naša Misija</h3>
      <p class="text-slate-300">
        Naš cilj je da klijentima pružimo najefikasnije i najpouzdanije sisteme za dizanje i transport, uz potpunu podršku tokom celog životnog veka opreme.
        Inovacije, izvrsnost i poverenje su vrednosti koje oblikuju našu kompaniju.
      </p>
      </div>

      <!-- Vision Card -->
      <div
      class=" border border-brandRose backdrop-blur-md rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.025] hover:shadow-[0_0_60px_0_rgba(255,255,255,0.05)] shadow-lg animate-slide-up delay-200"
      >
      <img :src="vision" alt="Vizija" class="w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110" />
      <h3 class="text-white">Naša Vizija</h3>
      <p class="text-slate-300">
        Težimo da postanemo vodeći regionalni partner u industriji dizalica i kranskih sistema, prepoznat po tehničkoj izvrsnosti, inovacijama i poverenju koje gradimo sa klijentima kroz transparentnost i kvalitet.
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
