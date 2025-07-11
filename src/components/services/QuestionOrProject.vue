<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative bg-slate-200 text-black py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[url('@/assets/img/kran10.png')] bg-no-repeat bg-cover bg-contain pointer-events-none"></div>

    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2>Imate pitanje ili projekat?</h2>
      <p>
        Naš stručni tim vam stoji na raspolaganju za sva tehnička i komercijalna pitanja.  
      </p>

      <ul class="text-base md:text-lg my-10 space-y-2">
        <li>✔️ Besplatne konsultacije i procene</li>
        <li>✔️ Brz odgovor u roku od 24h</li>
        <li>✔️ Tehnička podrška i saveti iz prakse</li>
      </ul>

      <RouterLink
        to="/contact-us"
        class="btn-primary"
      >
        Kontaktirajte nas
      </RouterLink>
    </div>
  </section>
</template>
