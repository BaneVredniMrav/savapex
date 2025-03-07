<script setup>
import konecranes from '@/assets/img/partners/konecranes.png';
import chesscom from '@/assets/img/partners/chesscom.png';
import kawasaki from '@/assets/img/partners/kawasaki.png';
const partners = [
    { name: 'Partner 2', logo: chesscom },
    { name: 'Partner 1', logo: konecranes },
    { name: 'Partner 3', logo: kawasaki },
];
</script>

<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto text-center pt-16 px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">Naši Partneri</h2>
      <div class="grid grid-cols-1 md:grid-cols-3  gap-6 items-center my-16">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex justify-center"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="h-24 md:h-32 transition-transform transform hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
