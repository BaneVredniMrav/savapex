<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { references } from '@/constants/references';

const router = useRouter();

const categories = ref(references);

const navigateToGallery = (id) => {
    router.push(`/references-gallery/${id}`);
};
</script>

<template>
    <section class="section-light pb-16">
        <div class="container-wide">
            <!-- Header galerije -->
            <div class="text-center mb-8 sm:mb-10 container-narrow mx-auto px-4">
                <h2 class="text-slate-800 mb-2">
                    Galerija
                </h2>
                <p class="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Pogledajte fotografije realizovanih projekata montaže dizalica i kranskih sistema.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
                v-for="category in categories" 
                :key="category.id" 
                class="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                @click="navigateToGallery(category.id)"
            >
                <!-- Image -->
                <img 
                    :src="category.images[0]" 
                    :alt="category.client" 
                    class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                    <h4 class="text-white text-left mb-1">{{ category.client }}</h4>
                    <p class="text-gray-300 text-sm sm:text-base text-left line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {{ category.description }}
                    </p>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
