<script setup>
import konecranes from '@/assets/img/partners/konecranes.png';
import akappsteman from '@/assets/img/partners/akappsteman.png';
import teleradio from '@/assets/img/partners/teleradio.png';
// import valjaonicaBakra from '@/assets/img/partners/valjaonica-bakra.png';
// import uniprometCacak from '@/assets/img/partners/unipromet-cacak.png';
// import utva from '@/assets/img/partners/utva.webp';
// import tankMont from '@/assets/img/partners/tank-mont.png';
// import gama from '@/assets/img/partners/gama.png';
// import impol from '@/assets/img/partners/impol.png';
// import schwing from '@/assets/img/partners/schwing.jpg';
// import inobacka from '@/assets/img/partners/inobacka.png';
// import metaling from '@/assets/img/partners/metaling.png';

const partners = [
  { name: 'Konecranes', logo: konecranes },
  { name: 'Teleradio', logo: teleradio },
  { name: 'Akapp Steman', logo: akappsteman },
  // { name: 'Valjaonica Bakra', logo: valjaonicaBakra },
  // { name: 'Tank Mont', logo: tankMont },
  // { name: 'Unipromet Čačak', logo: uniprometCacak },
  // { name: 'Gama', logo: gama },
  // { name: 'Utva', logo: utva },
  // { name: 'Impol', logo: impol },
  // { name: 'Schwing', logo: schwing },
  // { name: 'Inobacka', logo: inobacka },
  // { name: 'Metaling', logo: metaling },
];
</script>

<template>
  <section class="py-12 bg-gray-100">
    <div class="container max-w-7xl mx-auto text-center px-4">
      <h2>Ponosno sarađujemo sa vodećim kompanijama iz industrije</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center my-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
