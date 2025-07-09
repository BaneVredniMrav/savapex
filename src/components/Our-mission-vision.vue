<script setup>
import mission from '@/assets/img/mission.png';
import vision from '@/assets/img/vision.png';
</script>

<template>
  <section class="cool-gradient min-h-screen flex flex-col items-center justify-center py-16 px-4">
    <!-- Title & Description -->
    <div class="w-full flex flex-col items-center mb-16">
      <h2 class="text-white">
        Vođeni svrhom, usmereni ka budućnosti
      </h2>
      <p class="max-w-2xl text-lg md:text-xl text-slate-200 text-center font-medium">
        Naša misija i vizija predstavljaju temelj našeg poslovanja i putokaz za budućnost.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
      <!-- Mission Card -->
      <div
        class="group bg-white/90 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl border border-slate-200 hover:scale-105 hover:shadow-3xl transition-all duration-300 md:-translate-y-6 h-full"
      >
        <div class="bg-gradient-to-tr from-sky-400 to-slate-700 rounded-full p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img :src="mission" alt="Mission icon" class="w-20 h-20 object-contain" loading="lazy" />
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2 tracking-wide">Naša Misija</h3>
        <div class="w-16 h-1 bg-gradient-to-r from-sky-400 to-slate-700 mb-4 rounded-full"></div>
        <p class="text-slate-700 text-base leading-relaxed font-medium">
          Naš cilj je da klijentima pružimo najefikasnije i najpouzdanije sisteme za dizanje i transport, uz potpunu podršku tokom celog životnog veka opreme.
          Inovacije, izvrsnost i poverenje su vrednosti koje oblikuju našu kompaniju i odnose sa klijentima.
        </p>
      </div>

      <!-- Vision Card -->
      <div
        class="group bg-white/90 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl border border-slate-200 hover:scale-105 hover:shadow-3xl transition-all duration-300 md:translate-y-6 h-full"
      >
        <div class="bg-gradient-to-tr from-yellow-400 to-slate-700 rounded-full p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img :src="vision" alt="Vision icon" class="w-20 h-20 object-contain" loading="lazy" />
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2 tracking-wide">Naša Vizija</h3>
        <div class="w-16 h-1 bg-gradient-to-r from-yellow-400 to-slate-700 mb-4 rounded-full"></div>
        <p class="text-slate-700 text-base leading-relaxed font-medium">
          Težimo da postanemo vodeći regionalni partner u industriji dizalica i kranskih sistema, prepoznat po tehničkoj izvrsnosti, inovacijama i poverenju koje gradimo sa klijentima kroz transparentnost, kvalitet i stalno unapređenje industrijskog transporta.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.cool-gradient {
  background: linear-gradient(
    45deg,
    #94a3b8 0%,
    #1e293b 25%,
    #94a3b8 50%,
    #1e293b 75%,
    #94a3b8 100%
  );
  background-size: 300% 300%;
  animation: gradient-flow 12s linear infinite;
}
</style>
