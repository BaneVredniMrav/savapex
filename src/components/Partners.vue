<script setup>
import konecranes from '@/assets/img/partners/konecranes.png';
import akappsteman from '@/assets/img/partners/akappsteman.png';
import teleradio from '@/assets/img/partners/teleradio.png';

const partners = [
  { name: 'Konecranes', logo: konecranes, country: 'Finska' },
  { name: 'Teleradio', logo: teleradio, country: 'Švedska' },
  { name: 'Akapp Steman', logo: akappsteman, country: 'Holandija' },
];
</script>

<template>
  <section class="section-white">
    <div class="container-wide text-center">
      <h2>Naši partneri</h2>
      <p class="mb-6 sm:mb-8 md:mb-10">Sarađujemo sa vodećim svetskim proizvođačima opreme</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="card p-4 sm:p-6 text-center"
        >
          <div class="h-16 sm:h-20 flex items-center justify-center mb-3 sm:mb-4">
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-12 sm:max-h-16 w-auto object-contain"
            />
          </div>
          <h4 class="mb-1">{{ partner.name }}</h4>
          <p class="text-gray-500 text-xs sm:text-sm mb-0">{{ partner.country }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
