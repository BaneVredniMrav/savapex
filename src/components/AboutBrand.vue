<script setup>
import { RouterLink } from 'vue-router';
import { Phone, FileText } from 'lucide-vue-next';
import konecranes from '@/assets/img/partners/konecranes.png';
import akappsteman from '@/assets/img/partners/akappsteman.png';
import teleradio from '@/assets/img/partners/teleradio.png';

const partners = [
  { name: 'Konecranes', logo: konecranes, description: 'Finska' },
  { name: 'Teleradio', logo: teleradio, description: 'Italija' },
  { name: 'Akapp Steman', logo: akappsteman, description: 'Holandija' },
];
</script>

<template>
  <section class="bg-white text-gray-800">
    <!-- Partners Section -->
    <div class="section-light">
      <div class="container-wide text-center">
        <h2 class="mb-4">Naši partneri</h2>
        <p class="mb-10">Sarađujemo sa vodećim svetskim proizvođačima opreme</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div 
            v-for="partner in partners" 
            :key="partner.name"
            class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div class="h-20 flex items-center justify-center mb-4">
              <img 
                :src="partner.logo" 
                :alt="partner.name"
                class="max-h-16 w-auto object-contain"
              />
            </div>
            <h4 class="text-gray-800 mb-1">{{ partner.name }}</h4>
            <p class="text-gray-500 text-sm mb-0">{{ partner.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="section relative bg-slate-800 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-5 bg-[url('@/assets/img/kran10.png')] bg-no-repeat bg-cover pointer-events-none"></div>
      <div class="container-narrow text-center relative z-10">
        <h2 class="text-white mb-4">Spremni za saradnju?</h2>
        <p class="text-gray-300 mb-10">Kontaktirajte nas za besplatnu konsultaciju ili istražite našu ponudu.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink to="/contact-us" class="btn-primary flex items-center justify-center gap-2">
            <Phone class="w-5 h-5" />
            Kontaktirajte nas
          </RouterLink>
          <RouterLink to="/products" class="btn-outline-light flex items-center justify-center gap-2">
            <FileText class="w-5 h-5" />
            Pogledaj proizvode
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
