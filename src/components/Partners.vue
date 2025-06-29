<script setup>
import konecranes from '@/assets/img/partners/konecranes.png';
import akappsteman from '@/assets/img/partners/akappsteman.png';
import teleradio from '@/assets/img/partners/teleradio.png';
import valjaonicaBakra from '@/assets/img/partners/valjaonica-bakra.png';
import uniprometCacak from '@/assets/img/partners/unipromet-cacak.png';
import utva from '@/assets/img/partners/utva.webp';
import tankMont from '@/assets/img/partners/tank-mont.png';
import gama from '@/assets/img/partners/gama.png';
import impol from '@/assets/img/partners/impol.png';
import schwing from '@/assets/img/partners/schwing.jpg';

const partners = [
  { name: 'Partner 1', logo: konecranes },
  { name: 'Partner 1', logo: teleradio },
  { name: 'Partner 3', logo: akappsteman },
  { name: 'Partner 2', logo: valjaonicaBakra },
  { name: 'Partner 1', logo: uniprometCacak },
  { name: 'Partner 3', logo: utva },
  { name: 'Partner 2', logo: tankMont },
  { name: 'Partner 1', logo: gama },
  { name: 'Partner 3', logo: impol },
  { name: 'Partner 2', logo: schwing }
];
</script>

<template>
  <section class="py-12 bg-gray-100">
    <div class="container max-w-7xl mx-auto text-center px-4">
      <h2>Naši Partneri</h2>
      <p class="mb-10 text-lg text-gray-500">
        Ponosno sarađujemo sa vodećim kompanijama iz industrije
      </p>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-16 items-center my-16">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex justify-center"
        >
            <img
            :src="partner.logo"
            :alt="partner.name"
            class="transition-transform transform hover:scale-110 duration-300 w-64 h-20 object-contain"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
