<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";

const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    textColor: { type: String, default: "#1e293b" },
    backgroundColor: { type: String, default: "" },
});

const isTitleVisible = ref(false);
const isSubtitleVisible = ref(false);
const titleRef = ref(null);
const subtitleRef = ref(null);

let observer;

const handleIntersection = (entries) => {
    entries.forEach((entry) => {
        if (entry.target === titleRef.value && entry.isIntersecting) {
            isTitleVisible.value = true;
            observer.unobserve(titleRef.value);
        }
        if (entry.target === subtitleRef.value && entry.isIntersecting) {
            isSubtitleVisible.value = true;
            observer.unobserve(subtitleRef.value);
        }
    });
};

onMounted(() => {
    observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    if (titleRef.value) observer.observe(titleRef.value);
    if (subtitleRef.value) observer.observe(subtitleRef.value);
});

onUnmounted(() => {
    if (observer) {
        if (titleRef.value) observer.unobserve(titleRef.value);
        if (subtitleRef.value) observer.unobserve(subtitleRef.value);
        observer.disconnect();
    }
});

watchEffect(() => {
    if (observer) {
        if (titleRef.value) observer.observe(titleRef.value);
        if (subtitleRef.value) observer.observe(subtitleRef.value);
    }
});
</script>

<template>
    <header class="container-narrow text-center z-10 pt-28 sm:pt-32 md:pt-36 px-4">
        <div class="relative mb-4 sm:mb-6">
            <h1
                ref="titleRef"
                class="relative"
                :style="{ color: props.textColor }"
                :class="{ 'text-focus-in': isTitleVisible }"
            >
                <span
                    class="absolute inset-0 rounded-lg opacity-30 blur-sm pointer-events-none"
                    aria-hidden="true"
                    :style="{ zIndex: 0, backgroundColor: props.backgroundColor }"
                ></span>
                <span class="relative z-10">
                    {{ props.title }}
                </span>
            </h1>
        </div>
        <div v-if="props.subtitle" class="relative">
            <p
                ref="subtitleRef"
                class="mt-2 sm:mt-4 mb-6 sm:mb-8 relative"
                :style="{ color: props.textColor }"
                :class="{ 'text-focus-in': isSubtitleVisible }"
            >
                <span
                    class="absolute inset-0 rounded-lg opacity-30 blur-sm pointer-events-none"
                    aria-hidden="true"
                    :style="{ zIndex: 0, backgroundColor: props.backgroundColor }"
                ></span>
                <span class="relative z-10">
                    {{ props.subtitle }}
                </span>
            </p>
        </div>
    </header>
</template>

<style scoped>
.text-focus-in {
    animation: text-focus-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes text-focus-in {
    0% {
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0);
        opacity: 1;
    }
}
</style>
