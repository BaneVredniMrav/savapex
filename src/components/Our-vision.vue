<script setup>
import { onMounted } from 'vue';

// Funkcija koja osmatra kad su elementi vidljivi na ekranu
const observeVisibility = () => {
  const options = {
    root: null, // Koristi viewport kao root
    threshold: 0.1, // Kada je 10% elementa u prikazu
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Ako je element u vidokrugu, dodajemo klasu 'visible'
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Uklanjamo klasu kad element nije vidljiv
      }
    });
  }, options);

  // Ciljamo sve elemente koje želimo da pratimo
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    observer.observe(element); // Pratimo svaki element
  });
};

// Osiguravamo da pokrenemo funkciju kada komponenta bude montirana
onMounted(() => {
  observeVisibility();
});
</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-24">
    <!-- Title and Description -->
    <div class="text-center text-black max-w-3xl mx-auto mb-12">
      <h2 class="text-4xl font-bold mb-6 animate-on-scroll">Naša Vizija</h2>
      <p class="text-lg mb-8 animate-on-scroll">
        Naša vizija je da postanemo lider na tržištu industrijskih dizalica, poznati po kvalitetu, inovacijama i odličnom korisničkom servisu.
      </p>
    </div>

    <!-- Grid Section with Animations -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div class="card animate-on-scroll">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Inovacija</h3>
        <p class="text-gray-600">
          Mi smo posvećeni kontinuiranoj inovaciji kako bismo pružili rešenja koja
          unapređuju efikasnost i produktivnost u svim industrijama.
        </p>
      </div>

      <div class="card animate-on-scroll">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Stručnost</h3>
        <p class="text-gray-600">
          Naš tim stručnjaka je posvećen pružanju vrhunskih usluga i rešenja koja
          su temeljena na dugogodišnjem iskustvu i temeljnom znanju industrije.
        </p>
      </div>

      <div class="card animate-on-scroll">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Održivost</h3>
        <p class="text-gray-600">
          Fokusiramo se na održive prakse koje pomažu u očuvanju resursa i smanjenju
          negativnog uticaja na životnu sredinu, stvarajući dugoročnu vrednost.
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

/* Povećavamo razmake i menjamo boje za lepši dizajn */
section {
  background-color: #f7fafc; /* Svetla pozadina */
  padding-top: 5rem;
  padding-bottom: 5rem;
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #2d3748;
  text-transform: uppercase;
  letter-spacing: 1px;
}

p {
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.75rem;
  margin-bottom: 2rem;
}

/* Stilovi za kartice */
.bg-white {
  background-color: #ffffff;
}

.card {
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1.75rem;
  color: #2b6cb0;
  font-weight: 600;
}

.card p {
  color: #4a5568;
  font-size: 1rem;
}

.card:hover {
  background-color: #f0f4f8;
  box-shadow: 0 10px 20px rgba(28, 36, 47, 0.1);
}
</style>
