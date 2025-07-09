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
    <section class="bg-gray-100 py-10 px-4 text-center">
        <div class="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="category in categories" :key="category.id" 
            class="relative rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            @click="navigateToGallery(category.id)">
                <div class="absolute top-0 left-0 w-full bg-black/55 text-white text-center py-4 px-2 z-10"> 
                    <h3 class="text-xl font-semibold">{{ category.client }}</h3>
                    <p class="md:hidden group-hover:block">{{ category.description }}</p>
                </div>
                <img :src="category.images[0]" :alt="category.client" class="w-full h-60 object-cover transition-transform group-hover:scale-105" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.group:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
}
</style>
