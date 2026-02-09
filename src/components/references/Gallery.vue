<script setup>
import { references } from '@/constants/references';

// Svi unikatni slikovni izvori za galeriju (prva slika iz svake reference + ostale)
const galleryImages = references.flatMap((ref) => ref.images);
</script>

<template>
  <section class="section-light pb-16">
    <div class="container-wide">
      <div class="text-center mb-8 sm:mb-10 container-narrow mx-auto px-4">
        <h2 class="text-slate-800 mb-2">Galerija radova</h2>
        <p class="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Pogledajte fotografije realizovanih projekata montaže dizalica i kranskih sistema.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <div
          v-for="(img, index) in galleryImages"
          :key="index"
          class="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            :src="img"
            :alt="`Projekat ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
