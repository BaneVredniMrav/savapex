<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Briefcase, Truck, Wrench, Building2 } from 'lucide-vue-next';

const services = [
  {
    icon: Briefcase,
    title: 'Projektovanje i proizvodnja',
    description: 'Razvijamo i izrađujemo industrijske dizalice po meri vaših potreba.',
  },
  {
    icon: Truck,
    title: 'Isporuka i montaža',
    description: 'Bezbedna dostava i profesionalna ugradnja opreme širom regiona.',
  },
  {
    icon: Wrench,
    title: 'Servis i održavanje',
    description: 'Brz i efikasan servis sa obezbeđenim rezervnim delovima.',
  },
  {
    icon: Building2,
    title: 'Izrada kranskih staza',
    description: 'Konstrukcija i instalacija kranskih staza za sve vrste dizalica.',
  },
];

const sectionRef = ref(null);
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) visible.value = true;
    },
    { threshold: 0.2 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  // clean observer if needed
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-white py-24 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-in-out"
  >
    <div class="max-w-7xl mx-auto">
      <div
        :class="[
          'text-center transition-all duration-1000',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Naše usluge</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          SAVAPEX nudi kompletna rešenja za industrijsku dizalnu tehniku – od ideje do realizacije.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-1000"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-slate-50 border border-slate-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
        >
          <component :is="service.icon" class="w-12 h-12 mx-auto text-brandOrange mb-4" />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ service.title }}</h3>
          <p class="text-gray-600 text-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.opacity-0 {
  opacity: 0;
  transform: translateY(20px);
}
.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>
