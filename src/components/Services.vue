<template>
    <section class="bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 py-12 px-4 md:px-8 flex justify-center overflow-hidden">
        <div :class="slideSectionClasses" ref="slideSection">
            <RouterLink :to="detailsLink" 
                class="flex flex-col md:flex-row items-center gap-6 p-8 bg-slate-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-2xl hover:shadow-brandOrange h-[50vh] transform transition duration-500 hover:scale-105 w-full"
                @mouseenter="startImageSwap" @mouseleave="stopImageSwap">
                
                <img v-if="slideDirection === 'left'" :src="currentImage" alt="Image" 
                    class="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover transition-transform duration-1000" :class="imageAnimation" />
                
                <div class="w-full md:w-1/2 text-white text-center">
                    <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
                    <p class="text-lg leading-relaxed mb-6">{{ description }}</p>
                    <a href="/about-us/indenas-sustainability/nature/" target="_self" 
                        class="inline-block bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brandOrange hover:text-slate-800 transition">{{ buttonName }}</a>
                </div>
                
                <img v-if="slideDirection !== 'left'" :src="currentImage" alt="Image" 
                    class="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover transition-transform duration-1000" :class="imageAnimation" />
            </RouterLink>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    images: Array, // Očekuje niz slika
    title: String,
    description: String,
    detailsLink: String,
    slideDirection: {
        type: String,
        default: 'left',
        validator: value => ['left', 'right'].includes(value)
    },
    buttonName: String
});

const slideSection = ref(null);
const isInView = ref(false);
const currentImageIndex = ref(0);
const imageAnimation = ref('');
let swapInterval = null;

const currentImage = computed(() => props.images[currentImageIndex.value] || '');

const slideSectionClasses = computed(() => [
    'w-full max-w-6xl',
    'transition-transform duration-1000 will-change-transform',
    !isInView.value ? 'opacity-0' : '',
    isInView.value ? (props.slideDirection === 'left' ? 'animate-slideInLeft' : 'animate-slideInRight') : ''
]);

const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
        isInView.value = true;
    }
};

const startImageSwap = () => {
    if (swapInterval) return;
    swapInterval = setInterval(() => {
        imageAnimation.value = 'swirl-out';
        setTimeout(() => {
            currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
            imageAnimation.value = 'swirl-in';
        }, 500);
    }, 2500);
};

const stopImageSwap = () => {
    clearInterval(swapInterval);
    swapInterval = null;
    imageAnimation.value = '';
};

onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (slideSection.value) observer.observe(slideSection.value);
});

onUnmounted(() => {
    if (slideSection.value) observer.unobserve(slideSection.value);
    stopImageSwap();
});
</script>

<style scoped>
@keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

@keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

@keyframes swirlIn {
    from { transform: rotate(-360deg) scale(0); opacity: 0; }
    to { transform: rotate(0) scale(1); opacity: 1; }
}

@keyframes swirlOut {
    from { transform: rotate(0) scale(1); opacity: 1; }
    to { transform: rotate(360deg) scale(0); opacity: 0; }
}

.animate-slideInLeft { animation: slideInLeft 1s ease-out; }
.animate-slideInRight { animation: slideInRight 1s ease-out; }
.opacity-0 { opacity: 0; }

.swirl-in { animation: swirlIn 0.5s ease-out forwards; }
.swirl-out { animation: swirlOut 0.5s ease-in forwards; }
</style>
