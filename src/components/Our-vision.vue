<script setup>
import { ref } from 'vue'

const items = [
  {
    title: 'Inovacija',
    description: 'Mi smo posvećeni kontinuiranoj inovaciji kako bismo pružili rešenja koja unapređuju efikasnost i produktivnost u svim industrijama.',
    icon: '🚀'
  },
  {
    title: 'Stručnost',
    description: 'Naš tim stručnjaka je posvećen pružanju vrhunskih usluga i rešenja koja su temeljena na dugogodišnjem iskustvu i znanju industrije.',
    icon: '🎓'
  },
  {
    title: 'Održivost',
    description: 'Fokusiramo se na održive prakse koje pomažu u očuvanju resursa i smanjenju negativnog uticaja na životnu sredinu.',
    icon: '🌱'
  }
]

const inView = ref(new Set())

function onEnter(index) {
  inView.value.add(index)
}
</script>

<template>
  <section class="py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-slate-900 text-center">
    <h2 class="text-4xl font-bold uppercase tracking-wide text-slate-800 dark:text-white mb-10">
      Naša Vizija
    </h2>

    <p class="max-w-4xl mx-auto text-lg text-slate-700 dark:text-slate-300 mb-16 leading-relaxed">
      Naša vizija je da postanemo prepoznatljiv lider na tržištu industrijskih dizalica, pružajući vrhunska rešenja koja spajaju pouzdanost, inovaciju i tehnološku izvrsnost. Težimo tome da budemo sinonim za kvalitet, bezbednost i dugoročno partnerstvo, uz besprekornu podršku korisnicima u svakom segmentu naše usluge.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        v-intersect.once="() => onEnter(index)"
        :class="['transition-all duration-700 transform', inView.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition hover:bg-gray-50 dark:hover:bg-slate-700"
      >
        <div class="text-5xl mb-4">{{ item.icon }}</div>
        <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-3">{{ item.title }}</h3>
        <p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  directives: {
    intersect: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            binding.value()
            observer.unobserve(el)
          }
        }, { threshold: 0.1 })

        observer.observe(el)
      }
    }
  }
}
</script>
