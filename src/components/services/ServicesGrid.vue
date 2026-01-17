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
    class="section-white transition-all duration-1000 ease-in-out"
  >
    <div class="container-wide text-center mb-8 sm:mb-12 md:mb-16">
      <h2>Šta nudimo?</h2>
      <p>
        SAVAPEX nudi kompletna rešenja za industrijsku dizalnu tehniku – od ideje do realizacije.
      </p>
    </div>
    <div
      class="container-wide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <div
        v-for="(service, index) in services"
        :key="index"
        class="card text-center"
      >
        <div class="card-body">
          <component :is="service.icon" class="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-brandOrange mb-3 sm:mb-4" />
          <h4 class="card-title text-center">{{ service.title }}</h4>
          <p class="card-text text-center">{{ service.description }}</p>
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
