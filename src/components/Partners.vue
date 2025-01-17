<script setup>
import { ref } from "vue";

// Lista partnera sa njihovim logotipima
const partners = ref([
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
]);

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-50");
      entry.target.classList.add("opacity-100");
    } else {
      entry.target.classList.remove("opacity-100");
      entry.target.classList.add("opacity-50");
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5,
});

onMounted(() => {
  const logos = document.querySelectorAll(".partner-logo");
  logos.forEach((logo) => observer.observe(logo));
});
</script>

<template>
  <section class="bg-gray-50 py-16">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-slate-800 mb-4">Naši Partneri</h2>
      <p class="text-xl text-slate-600">
        Ponosni smo što sarađujemo sa vodećim brendovima u industriji.
      </p>
    </div>

    <div class="overflow-hidden relative">
      <div class="partners-track flex space-x-16 animate-marquee">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="partner-logo w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg opacity-50 transition-opacity duration-500 ease-in-out"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.partners-track {
  animation: marquee 30s linear infinite;
}

.partner-logo {
  transition: opacity 0.5s ease-in-out;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-100 {
  opacity: 1;
}

@media (max-width: 768px) {
  .partners-track {
    animation: marquee 20s linear infinite;
  }
}
</style>
