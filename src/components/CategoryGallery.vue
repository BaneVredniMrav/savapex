<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, nextTick } from 'vue';
import AnimatedText from './AnimatedText.vue';

import kran1 from '@/assets/img/kran1.jpg';
import kran2 from '@/assets/img/kran2.jpg';
import kran3 from '@/assets/img/kran3.jpg';
import kran4 from '@/assets/img/kran4.jpg';

// Vue Router instance
const route = useRoute();
const router = useRouter();

// Definiši slike za svaku kategoriju
const categories = ref([
    { id: 1, title: 'Kranovi', images: [kran1, kran2, kran3, kran4, kran1, kran2, kran3, kran4, kran1, kran2] },
    { id: 2, title: 'Mostovi', images: [kran2, kran3, kran4, kran1, kran2, kran3, kran4, kran1, kran2, kran3] },
    { id: 3, title: 'Zgrade', images: [kran3, kran4, kran1, kran2, kran3, kran4, kran1, kran2, kran3, kran4] },
    { id: 4, title: 'Mašine', images: [kran4, kran1, kran2, kran3, kran4, kran1, kran2, kran3, kran4, kran1] },
    { id: 5, title: 'Kranovi', images: [kran1, kran2, kran3, kran4, kran1, kran2, kran3, kran4, kran1, kran2] },
    { id: 6, title: 'Mostovi', images: [kran2, kran3, kran4, kran1, kran2, kran3, kran4, kran1, kran2, kran3] },
    { id: 7, title: 'Zgrade', images: [kran3, kran4, kran1, kran2, kran3, kran4, kran1, kran2, kran3, kran4] },
    { id: 8, title: 'Mašine', images: [kran4, kran1, kran2, kran3, kran4, kran1, kran2, kran3, kran4, kran1] },
]);

const categoryId = computed(() => route.params.id);
const selectedCategory = computed(() => categories.value.find(category => category.id == categoryId.value));

// Za modal preview slike
const isModalOpen = ref(false);
const currentImageIndex = ref(0);

// Otvaranje modala i prikaz odabrane slike
const openModal = (index) => {
    currentImageIndex.value = index;
    isModalOpen.value = true;
    nextTick(() => {
        document.body.style.overflow = 'hidden'; // Onemogući scroll kad je modal otvoren
    });
};

// Zatvaranje modala
const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = ''; // Vrati normalan scroll
};

// Navigacija kroz slike
const prevImage = () => {
    if (selectedCategory.value) {
        currentImageIndex.value =
            (currentImageIndex.value - 1 + selectedCategory.value.images.length) % selectedCategory.value.images.length;
    }
};

const nextImage = () => {
    if (selectedCategory.value) {
        currentImageIndex.value = (currentImageIndex.value + 1) % selectedCategory.value.images.length;
    }
};

// Vraćanje nazad na prethodnu stranicu
const goBack = () => {
    router.back();
};
</script>

<template>
    <AnimatedText
        :title="selectedCategory.title"
        subtitle="Osiguranje da vaša oprema uvek bude u optimalnom stanju"
    />
    <div class="max-w-6xl mx-auto p-6 ">
        <!-- Back dugme -->
        <div class="flex justify-end mb-4">
            <button @click="goBack" class="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
                ← Nazad
            </button>
        </div>

        <div v-if="selectedCategory">
            <!-- Galerija -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <img 
                    v-for="(image, index) in selectedCategory.images" 
                    :key="index" 
                    :src="image" 
                    :alt="selectedCategory.title" 
                    class="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                    @click="openModal(index)"
                />
            </div>
        </div>
        <div v-else>
            <p class="text-red-500 text-center text-xl mt-10">Kategorija nije pronađena!</p>
        </div>
    </div>

    <!-- Modal za pregled slike -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <!-- Dugme za zatvaranje -->
        <button @click="closeModal" class="absolute top-5 right-5 text-white text-5xl font-bold z-10">&times;</button>

        <div class="relative flex items-center w-full max-w-6xl px-4">
            <!-- Dugme za prethodnu sliku -->
            <button @click="prevImage" class="text-white text-5xl px-4 absolute left-2 hover:opacity-80 transition">❮</button>
            
            <!-- Veća slika -->
            <img :src="selectedCategory.images[currentImageIndex]" class="max-w-full max-h-screen object-contain rounded-lg shadow-lg mx-auto">
            
            <!-- Dugme za sledeću sliku -->
            <button @click="nextImage" class="text-white text-5xl px-4 absolute right-2 hover:opacity-80 transition">❯</button>
        </div>
    </div>
</template>


<style scoped>

</style>
