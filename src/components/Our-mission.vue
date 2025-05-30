<template>
  <section class="bg-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-6 animate-fade-up">NAŠA MISIJA</h2>
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 animate-fade-up delay-100">
        Težimo da pružimo inovativna i pouzdana rešenja koja unapređuju operativnu izvrsnost,
        podržavaju održivi rast i grade trajna partnerstva u različitim industrijama.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="bg-slate-100 p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300 animate-fade-up">
        <div class="w-16 h-16 mx-auto mb-4 bg-brandOrange text-white rounded-full flex items-center justify-center text-2xl">
          🚀
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Inovacija</h3>
        <p class="text-gray-600 text-base leading-relaxed">
          Neprestano pomeramo granice sa naprednim tehnologijama koje oblikuju budućnost.
        </p>
      </div>

      <div class="bg-slate-100 p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300 animate-fade-up delay-100">
        <div class="w-16 h-16 mx-auto mb-4 bg-brandOrange text-white rounded-full flex items-center justify-center text-2xl">
          💎
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Izvrsnost</h3>
        <p class="text-gray-600 text-base leading-relaxed">
          Isporučujemo beskompromisan kvalitet, prilagođena rešenja i merljive rezultate.
        </p>
      </div>

      <div class="bg-slate-100 p-8 rounded-xl text-center shadow-md hover:shadow-xl transition duration-300 animate-fade-up delay-200">
        <div class="w-16 h-16 mx-auto mb-4 bg-brandOrange text-white rounded-full flex items-center justify-center text-2xl">
          🤝
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Poverenje</h3>
        <p class="text-gray-600 text-base leading-relaxed">
          Gradimo trajne odnose zasnovane na integritetu, transparentnosti i posvećenosti.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Simple scroll-in animation */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s ease-out forwards;
}
.animate-fade-up.delay-100 {
  animation-delay: 0.1s;
}
.animate-fade-up.delay-200 {
  animation-delay: 0.2s;
}
</style>
