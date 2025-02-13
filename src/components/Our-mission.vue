<script setup>
import { onMounted } from 'vue';

// Funkcija koja osmatra kad elementi postanu vidljivi
const observeVisibility = () => {
  const options = {
    root: null, // Koristi viewport kao root
    threshold: 0.1, // Kada je 10% elementa u prikazu
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Dodajemo klasu kad je element vidljiv
      } else {
        entry.target.classList.remove('visible'); // Uklanjamo klasu kad element nije vidljiv
      }
    });
  }, options);

  // Ciljamo sve elemente koje želimo da pratimo
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    observer.observe(element);
  });
};

// Osiguravamo da pokrenemo funkciju kada komponenta bude montirana
onMounted(() => {
  observeVisibility();
});
</script>


<template>
    <section class="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 py-24 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center">
      <!-- Title and Description -->
      <div class="text-center text-white max-w-3xl mx-auto mb-16">
        <h2 class="text-5xl font-bold mb-6 leading-tight animate-on-scroll">Naša Misija</h2>
        <p class="text-xl mb-8 leading-relaxed animate-on-scroll">
          Naša misija je da pružimo inovativna rešenja koja unapređuju poslovanje naših
          klijenata. Posvećeni smo kontinuiranom unapređenju kvaliteta i efikasnosti kroz
          timski rad i kreativna rešenja.
        </p>
      </div>
  
      <!-- Grid Section with Animations -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="animate-on-scroll bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
          <h3 class="text-3xl font-semibold text-gray-700 mb-4">Inovacija</h3>
          <p class="text-lg text-gray-600">
            Posvećeni smo stalnom inoviranju naših rešenja kako bismo našim klijentima
            obezbedili konkurentske prednosti u industriji.
          </p>
        </div>
  
        <div class="animate-on-scroll bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
          <h3 class="text-3xl font-semibold text-gray-700 mb-4">Kvalitet</h3>
          <p class="text-lg text-gray-600">
            Uveravamo se da svaki proizvod i usluga koji pružimo zadovoljavaju najviše
            standarde kvaliteta, u skladu sa potrebama naših klijenata.
          </p>
        </div>
  
        <div class="animate-on-scroll bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
          <h3 class="text-3xl font-semibold text-gray-700 mb-4">Održivost</h3>
          <p class="text-lg text-gray-600">
            Zalažemo se za održivo poslovanje, koristeći resurse efikasno i pružajući
            rešenja koja ne štete životnoj sredini.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  
  <style scoped>
  /* Svi elementi su sakriveni pri početnom renderovanju */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(50px); /* Pomeranje sa dole */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* Glatka animacija */
  }
  
  /* Kada je element u prikazu, učini ga vidljivim */
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0); /* Vraća element na originalnu poziciju */
  }
  </style>
  