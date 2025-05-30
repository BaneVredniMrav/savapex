<script setup>
import { ref, onMounted } from 'vue';

const elements = ref([]);

const items = [
  {
    title: 'Inovacija',
    description: 'Mi smo posvećeni kontinuiranoj inovaciji kako bismo pružili rešenja koja unapređuju efikasnost i produktivnost u svim industrijama.'
  },
  {
    title: 'Stručnost',
    description: 'Naš tim stručnjaka je posvećen pružanju vrhunskih usluga i rešenja koja su temeljena na dugogodišnjem iskustvu i temeljnom znanju industrije.'
  },
  {
    title: 'Održivost',
    description: 'Fokusiramo se na održive prakse koje pomažu u očuvanju resursa i smanjenju negativnog uticaja na životnu sredinu, stvarajući dugoročnu vrednost.'
  }
];

const observeVisibility = () => {
  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  elements.value.forEach(element => {
    observer.observe(element);
  });
};

onMounted(() => {
  observeVisibility();
});
</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
    <div class="text-center text-black max-w-3xl mx-auto mb-12">
      <h2 class="text-4xl font-bold mb-6 animate-on-scroll" ref="elements">Naša Vizija</h2>
      <p class="text-lg mb-8 " ref="elements">
        Naša vizija je da postanemo lider na tržištu industrijskih dizalica, poznati po kvalitetu, inovacijama i odličnom korisničkom servisu.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div v-for="(item, index) in items" :key="index" class="card " ref="elements">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4 text-slate-800">{{ item.title }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

section {
  background-color: #f7fafc;
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
