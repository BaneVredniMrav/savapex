<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    images: Array, 
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
const isMobile = ref(window.innerWidth < 768);

const currentImage = computed(() => props.images[0] || '');

const slideSectionClasses = computed(() => [
    'w-full max-w-7xl',
    'transition-transform duration-1000 will-change-transform',
    !isInView.value ? 'opacity-0' : '',
    isInView.value ? (props.slideDirection === 'left' ? 'animate-slideInLeft' : 'animate-slideInRight') : ''
]);

const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
};

const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
        isInView.value = true;
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (slideSection.value) observer.observe(slideSection.value);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <section
        class="bg-slate-100 py-6 px-4 md:px-8 flex justify-center overflow-hidden"
    >
        <div :class="slideSectionClasses" ref="slideSection">
            <div
                class="group relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 bg-slate-700 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out w-full max-w-7xl overflow-hidden md:h-[50vh]"
            >
                <!-- Image always first in mobile view -->
                <img
                    v-if="isMobile || slideDirection === 'left'"
                    :src="currentImage"
                    alt="Image"
                    class="w-full md:w-1/2 h-64 md:h-full rounded-xl object-cover shadow-sm transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105"
                />

                <div class="w-full md:w-1/2 text-white text-center">
                    <h2>{{ title }}</h2>
                    <p class="text-base md:text-lg leading-relaxed mb-6">{{ description }}</p>
                    
                    <RouterLink :to="detailsLink" class="btn-primary">
                        {{ buttonName }}
                    </RouterLink>
                </div>

                <img
                    v-if="!isMobile && slideDirection !== 'left'"
                    :src="currentImage"
                    alt="Image"
                    class="w-full md:w-1/2 h-64 md:h-full rounded-xl object-cover shadow-sm transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

@keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

.animate-slideInLeft { animation: slideInLeft 1s ease-out; }
.animate-slideInRight { animation: slideInRight 1s ease-out; }
.opacity-0 { opacity: 0; }
</style>