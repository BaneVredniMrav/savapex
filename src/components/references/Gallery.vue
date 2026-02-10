<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { references } from '@/constants/references';

const galleryImages = references.flatMap((ref) => ref.images);

const lightboxOpen = ref(false);
const selectedIndex = ref(0);

function openLightbox(index) {
  selectedIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
}

function prevImage() {
  selectedIndex.value = selectedIndex.value === 0
    ? galleryImages.length - 1
    : selectedIndex.value - 1;
}

function nextImage() {
  selectedIndex.value = selectedIndex.value === galleryImages.length - 1
    ? 0
    : selectedIndex.value + 1;
}

function onKeydown(e) {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <section class="section-light pb-16">
    <div class="container-wide">
      <div class="text-center mb-8 sm:mb-10 container-narrow mx-auto px-4">
        <h2 class="text-slate-800 mb-2">Galerija</h2>
        <p class="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Pogledajte fotografije realizovanih projekata montaže dizalica i kranskih sistema.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        <button
          v-for="(img, index) in galleryImages"
          :key="index"
          type="button"
          class="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brandOrange focus-visible:ring-offset-2"
          @click="openLightbox(index)"
        >
          <img
            :src="img"
            :alt="`Projekat ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Uvećana slika"
          @click.self="closeLightbox"
        >
          <!-- Zatvori (X) -->
          <button
            type="button"
            class="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Zatvori"
            @click="closeLightbox"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Levo -->
          <button
            type="button"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Prethodna slika"
            @click.stop="prevImage"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Slika -->
          <img
            :src="galleryImages[selectedIndex]"
            :alt="`Projekat ${selectedIndex + 1}`"
            class="max-w-full max-h-[85vh] w-auto h-auto object-contain select-none"
            @click.stop
          />

          <!-- Desno -->
          <button
            type="button"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Sledeća slika"
            @click.stop="nextImage"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Broj slike -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
            {{ selectedIndex + 1 }} / {{ galleryImages.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
