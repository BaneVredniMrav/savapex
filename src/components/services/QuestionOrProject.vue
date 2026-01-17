<script setup>
import { RouterLink } from 'vue-router'
import { CheckCircle, Phone, FileText } from 'lucide-vue-next'

const benefits = [
  'Besplatne konsultacije i procene',
  'Brz odgovor u roku od 24h',
  'Tehnička podrška i saveti iz prakse'
]
</script>

<template>
  <section class="section-dark relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 bg-[url('@/assets/img/kran10.png')] bg-no-repeat bg-cover pointer-events-none"></div>

    <div class="container-narrow text-center relative z-10 px-4">
      <h2 class="text-white">Imate pitanje ili projekat?</h2>
      <p class="text-slate-300">
        Naš stručni tim vam stoji na raspolaganju za sva pitanja.
      </p>

      <ul class="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 md:gap-6 my-6 sm:my-8 md:my-10">
        <li v-for="benefit in benefits" :key="benefit" class="flex items-center justify-center gap-2 text-white text-sm sm:text-base">
          <CheckCircle class="w-4 h-4 sm:w-5 sm:h-5 text-brandOrange flex-shrink-0" />
          <span>{{ benefit }}</span>
        </li>
      </ul>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <RouterLink to="/contact-us" class="btn-primary flex items-center justify-center gap-2">
          <Phone class="w-5 h-5" />
          Kontaktirajte nas
        </RouterLink>
        <RouterLink to="/products" class="btn-outline-light flex items-center justify-center gap-2">
          <FileText class="w-5 h-5" />
          Pogledaj proizvode
        </RouterLink>
      </div>
    </div>
  </section>
</template>
