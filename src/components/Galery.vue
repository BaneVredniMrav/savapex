<script setup>
import { ref, computed } from 'vue';
import kran1 from '@/assets/img/kran1.jpg';
import kran2 from '@/assets/img/kran2.jpg';
import kran6 from '@/assets/img/kran6.mp4';
import kran4 from '@/assets/img/kran4.jpg';

const mediaItems = ref([
    { type: 'image', src: kran1, alt: 'Description of image 1' },
    { type: 'image', src: kran2, alt: 'Description of image 2' },
    { type: 'video', src: kran6, alt: 'Description of video 1' },
    { type: 'image', src: kran4, alt: 'Description of image 3' },
]);

const currentIndex = ref(0);
const currentItem = computed(() => mediaItems.value[currentIndex.value]);

const videoElement = ref(null);

const handleNext = () => {
    // Pauziranje videa kada se prelazi na sledeći medij
    if (videoElement.value) {
        videoElement.value.pause();
    }
    currentIndex.value = (currentIndex.value + 1) % mediaItems.value.length;
};

const handlePrev = () => {
    // Pauziranje videa kada se prelazi na prethodni medij
    if (videoElement.value) {
        videoElement.value.pause();
    }
    currentIndex.value = (currentIndex.value - 1 + mediaItems.value.length) % mediaItems.value.length;
};
</script>

<template>
    <div class="max-w-4xl mx-auto p-6">
        <div class="rounded-2xl shadow-lg bg-gray-50 relative overflow-hidden">
            <!-- Media Viewer -->
            <div class="relative flex items-center justify-center h-[500px] w-full">
                <div v-if="currentItem.type === 'image'" :key="currentItem.src" class="h-full w-full flex justify-center items-center">
                    <img :src="currentItem.src" :alt="currentItem.alt" class="h-full w-full object-cover rounded-lg" />
                </div>
                <div v-else-if="currentItem.type === 'video'" class="h-full w-full flex justify-center items-center">
                    <video ref="videoElement" controls autoplay muted loop class="h-full w-full object-cover rounded-lg">
                        <source :src="currentItem.src" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <!-- Controls -->
            <div class="absolute inset-0 flex justify-between items-center px-4">
                <button @click="handlePrev" class="p-2 bg-gray-800/70 text-white rounded-full hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button @click="handleNext" class="p-2 bg-gray-800/70 text-white rounded-full hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Indicator -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <span
                    v-for="(item, index) in mediaItems"
                    :key="index"
                    @click="currentIndex.value = index"
                    class="h-2 w-2 rounded-full cursor-pointer"
                    :class="{
                        'bg-gray-800': currentIndex.value === index,
                        'bg-gray-400': currentIndex.value !== index
                    }"
                ></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
