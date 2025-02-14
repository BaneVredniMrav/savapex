<script setup>
import { onMounted } from 'vue';

// Funkcija za osmatranje vidljivosti elemenata
const observeVisibility = () => {
  const options = {
    root: null, // Koristi viewport kao root
    threshold: 0.30, // Kada je 30% elementa u prikazu
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Dodajemo klasu kad je element vidljiv
        observer.unobserve(entry.target); // Prestanemo da posmatramo element nakon što je animacija primenjena
      }
    });
  }, options);

  // Ciljamo sve elemente koji imaju animacije
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    observer.observe(element);
  });
};

// Pokrećemo osmatranje kada se komponenta montira
onMounted(() => {
  observeVisibility();
});
</script>

<template>
  <section class="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 py-16 px-6 sm:px-12 lg:px-24 min-h-screen flex flex-col justify-center">
    <!-- Naslov i opis -->
    <div class="text-center text-white max-w-4xl mx-auto mb-12 sm:mb-16">
      <h2 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight animate-on-scroll slide-in-left">
        Naša Misija
      </h2>
      <p class="text-lg sm:text-xl mb-8 leading-relaxed animate-on-scroll slide-in-right">
        Naša misija je da pružimo inovativna rešenja koja unapređuju poslovanje naših
        klijenata. Posvećeni smo kontinuiranom unapređenju kvaliteta i efikasnosti kroz
        timski rad i kreativna rešenja.
      </p>
    </div>

    <!-- Sekcija sa gridom -->
    <div class="grid grid-cols-1 gap-8 sm:gap-12">
      <div class="animate-on-scroll slide-in-left bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
        <h3 class="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">Inovacija</h3>
        <p class="text-base sm:text-lg text-gray-600">
          Posvećeni smo stalnom inoviranju naših rešenja kako bismo našim klijentima
          obezbedili konkurentske prednosti u industriji.
        </p>
      </div>

      <div class="animate-on-scroll slide-in-right bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
        <h3 class="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">Kvalitet</h3>
        <p class="text-base sm:text-lg text-gray-600">
          Uveravamo se da svaki proizvod i usluga koji pružimo zadovoljavaju najviše
          standarde kvaliteta, u skladu sa potrebama naših klijenata.
        </p>
      </div>

      <div class="animate-on-scroll slide-in-left bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
        <h3 class="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">Inovacija</h3>
        <p class="text-base sm:text-lg text-gray-600">
          Posvećeni smo stalnom inoviranju naših rešenja kako bismo našim klijentima
          obezbedili konkurentske prednosti u industriji.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box; /* Osigurava da padding i border ne utiču na širinu elementa */
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Sprečava horizontalno pomeranje */
  width: 100%; /* Osigurava da širina uvek bude 100% */
}

section, .animate-on-scroll {
  max-width: 100%; /* Obezbeđuje da širina sekcija nikada ne bude veća od 100% */
  overflow: hidden; /* Sprečava izlazak sadržaja sa strane */
}

body {
  width: 100vw; /* Osigurava da body zauzima 100% širine ekrana */
}

.grid {
  max-width: 100%;
}
/* Svi elementi su sakriveni pri početnom renderovanju */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px); /* Pomeranje sa dole kao podrazumevano */
  transition: opacity 1s ease-out, transform 1s ease-out; /* Glatka animacija */
}

/* Kada je element u prikazu, učini ga vidljivim */
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0); /* Vraća element na originalnu poziciju */
}

/* Animacija za slide-in-left za web view */
.slide-in-left {
  transform: translateX(calc(-50vw)); /* Pomeranje ulevo na 50% širine ekrana */
}

/* Animacija za slide-in-right za web view */
.slide-in-right {
  transform: translateX(calc(50vw)); /* Pomeranje udesno na 50% širine ekrana */
}

/* Kada su elementi vidljivi, resetuj poziciju */
.slide-in-left.visible,
.slide-in-right.visible {
  transform: translateX(0) translateY(0);
}

</style>
