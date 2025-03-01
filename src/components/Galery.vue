<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import kran1 from '@/assets/img/kran1.jpg';
import kran2 from '@/assets/img/kran2.jpg';
import kran3 from '@/assets/img/kran3.jpg';
import kran4 from '@/assets/img/kran4.jpg';

const router = useRouter();

const categories = ref([
    { id: 1, title: 'Kranovi', image: kran1 },
    { id: 2, title: 'Mostovi', image: kran2 },
    { id: 3, title: 'Zgrade', image: kran3 },
    { id: 4, title: 'Mašine', image: kran4 },
    { id: 5, title: 'Kranovi', image: kran1 },
    { id: 6, title: 'Mostovi', image: kran2 },
    { id: 7, title: 'Zgrade', image: kran3 },
    { id: 8, title: 'Mašine', image: kran4 },
]);

const navigateToGallery = (id) => {
    router.push(`/category-gallery/${id}`);
};
</script>

<template>
    <div class="bg-gray-100 py-10 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="category in categories" :key="category.id" 
            class="relative rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            @click="navigateToGallery(category.id)">
                <div class="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-2 z-10"> 
                    <h3 class="text-xl font-semibold">{{ category.title }}</h3>
                </div>
                <img :src="category.image" :alt="category.title" class="w-full h-60 object-cover transition-transform group-hover:scale-105" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.group:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
}
</style>
