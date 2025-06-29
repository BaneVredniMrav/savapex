<script setup>
import mission from '@/assets/img/mission.png';
import vision from '@/assets/img/vision.png';
</script>

<template>
  <section class="cool-gradient min-h-screen flex flex-col items-center justify-center py-16 px-4">
    <!-- Title & Description -->
    <div class="w-full flex flex-col items-center mb-20">
      <h2
        class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight text-center"
      >
        Naš Put i Pravac
      </h2>
      <p
        class="text-lg md:text-2xl text-white/90 leading-relaxed font-medium text-center max-w-2xl"
      >
        Vođeni svrhom, usmereni ka budućnosti.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
      <!-- Mission Card -->
      <div
        class="group bg-white/90 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl border border-slate-200 hover:scale-105 hover:shadow-3xl transition-all duration-300 md:-translate-y-6 h-full"
      >
        <div class="bg-gradient-to-tr from-sky-400 to-slate-700 rounded-full p-2 mb-6 shadow-lg">
          <img :src="mission" alt="Mission icon" class="w-20 h-20 object-contain" />
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2 tracking-wide">Naša Misija</h3>
        <div class="w-16 h-1 bg-gradient-to-r from-sky-400 to-slate-700 mb-4 rounded-full"></div>
        <p class="text-slate-700 text-base leading-relaxed font-medium">
          Cilj nam je da našim klijentima pružimo najefikasnije i najpouzdanije sisteme za dizanje i transport, uz punu podršku kroz ceo životni vek opreme.
          Verujemo u inovacije, izvrsnost i poverenje kao temeljne vrednosti koje oblikuju našu kompaniju i odnose sa klijentima.
        </p>
      </div>

      <!-- Vision Card -->
      <div
        class="group bg-white/90 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl border border-slate-200 hover:scale-105 hover:shadow-3xl transition-all duration-300 md:translate-y-6 h-full"
      >
        <div class="bg-gradient-to-tr from-yellow-400 to-slate-700 rounded-full p-2 mb-6 shadow-lg">
          <img :src="vision" alt="Vision icon" class="w-20 h-20 object-contain" />
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-2 tracking-wide">Naša Vizija</h3>
        <div class="w-16 h-1 bg-gradient-to-r from-yellow-400 to-slate-700 mb-4 rounded-full"></div>
        <p class="text-slate-700 text-base leading-relaxed font-medium">
          Naša vizija je da postanemo vodeći regionalni partner u industriji dizalica i kranskih sistema, prepoznat po tehničkoj izvrsnosti, inovacijama i poverenju koje gradimo sa našim klijentima kroz transparentnost, kvalitet i inovacije koje unapređuju industrijski transport.
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
