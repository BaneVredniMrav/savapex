<script setup>
import { ref, onMounted } from 'vue'
import {
  Briefcase,
  Truck,
  Wrench,
  Building2,
  ShieldCheck,
  UserCog,
  PackagePlus
} from 'lucide-vue-next'

const services = [
  { icon: Briefcase, title: 'Projektovanje i proizvodnja', description: 'Industrijske dizalice po meri uz vrhunski inženjering.' },
  { icon: Truck, title: 'Isporuka i montaža', description: 'Efikasna dostava i montaža širom regiona.' },
  { icon: Wrench, title: 'Servis i održavanje', description: 'Redovan i vanredni servis uz dostupne rezervne delove.' },
  { icon: Building2, title: 'Kranske staze', description: 'Izrada i montaža kranskih staza za sve tipove objekata.' },
  { icon: ShieldCheck, title: 'Bezbednosne provere', description: 'Tehnički pregledi i bezbednosne provere po standardima.' },
  { icon: UserCog, title: 'Obuka i konsalting', description: 'Stručno savetovanje i edukacija osoblja za rad sa opremom.' },
  { icon: PackagePlus, title: 'Custom rešenja', description: 'Rešenja po narudžbini za specifične industrijske potrebe.' },
]

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) isVisible.value = true
  }, { threshold: 0.2 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-white py-12 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-in-out"
  >
      <div class="max-w-7xl mx-auto text-center mb-16">
      <h2>
        Šta nudimo?
      </h2>
      <p>
        SAVAPEX nudi kompletna rešenja za industrijsku dizalnu tehniku – od ideje do realizacije.
      </p>
    </div>
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white border border-slate-200 rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <component :is="service.icon" class="w-12 h-12 mx-auto text-brandOrange mb-4" />
        <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-gray-600 text-sm">{{ service.description }}</p>
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
