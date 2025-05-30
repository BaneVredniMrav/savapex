<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

// Reaktivne promenljive
const isTitleVisible = ref(false); // Praćenje vidljivosti <h1> elementa
const isTextVisible = ref(false); // Praćenje vidljivosti <h2> elementa
const titleRef = ref(null); // Referenca na <h1> element
const textRef = ref(null); // Referenca na <h2> element

// Primanje title, subtitle i textColor kao props
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    textColor: {
        type: String,
        required: false,
        default: "#1e293b", // Podrazumevana boja (slate-800)
    },
    backgroundColor: {
        type: String,
        required: false,
        default: "", 
    },
});

// Intersection Observer callback funkcija
const handleIntersection = (entries, observerTarget) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
        if (observerTarget === "title") isTitleVisible.value = true;
        if (observerTarget === "text") isTextVisible.value = true;
    }
};

let titleObserver, textObserver; // Promenljive za Intersection Observer-e

// Inicijalizacija observer-a
const initObservers = () => {
    // Observer za <h1>
    titleObserver = new IntersectionObserver(
        (entries) => handleIntersection(entries, "title"),
        {
            threshold: 0.5,
        }
    );
    if (titleRef.value) {
        titleObserver.observe(titleRef.value);
    }

    // Observer za <h2>
    textObserver = new IntersectionObserver(
        (entries) => handleIntersection(entries, "text"),
        {
            threshold: 0.5,
        }
    );
    if (textRef.value) {
        textObserver.observe(textRef.value);
    }
};

// Čišćenje observer-a
const cleanupObservers = () => {
    if (titleObserver && titleRef.value) {
        titleObserver.unobserve(titleRef.value);
    }
    if (textObserver && textRef.value) {
        textObserver.unobserve(textRef.value);
    }
};

onMounted(() => {
    initObservers();
});

onUnmounted(() => {
    cleanupObservers();
});

watch([titleRef, textRef], () => {
    cleanupObservers();
    initObservers();
});
</script>

<template>
    <div class="max-w-5xl mx-auto text-center z-10 pt-32 sm:pt-32 px-2">
        <!-- Naslov sa animacijom -->
        <div class="relative ">
            <h1
            ref="titleRef"
            class="relative text-3xl md:text-4xl lg:text-5xl font-bold"
            :style="{ color: props.textColor }"
            :class="{ 'text-focus-in': isTitleVisible }"
            aria-hidden="true"
            >
            <span
                class="absolute inset-0 left-0 right-0 top-0 bottom-0 rounded-lg opacity-30 blur-sm pointer-events-none"
                aria-hidden="true"
                :style="{ zIndex: 0, backgroundColor: props.backgroundColor }"
            ></span>
            <span style="position:relative; z-index:1;">
                {{ props.title }}
            </span>
            </h1>
        </div>

        <div class="relative">
            <h2
            ref="textRef"
            class="text-xl md:text-2xl lg:text-3xl mt-4 mb-8 relative"
            :style="{ color: props.textColor }"
            :class="{ 'text-focus-in': isTextVisible }"
            aria-hidden="true"
            >
            <span
                class="absolute inset-0 left-0 right-0 top-0 bottom-0 rounded-lg opacity-30 blur-sm pointer-events-none"
                aria-hidden="true"
                :style="{ zindex: 0, backgroundColor: props.backgroundColor }"
            ></span>
            <span style="position:relative; z-index:1;">
                {{ props.subtitle }}
            </span>
            </h2>
        </div>
    </div>
</template>

<style scoped>
/* Animacija za text-focus-in */
.text-focus-in {
    animation: text-focus-in 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
