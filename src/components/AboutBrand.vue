<script setup>
const testimonials = [
  {
    name: 'Ana Petrović',
    text: 'Sjajna saradnja! Tim je izuzetno profesionalan i pouzdan.',
  },
  {
    name: 'Marko Jovanović',
    text: 'Kvalitet usluge je prevazišao naša očekivanja. Topla preporuka!',
  },
]

const team = [
  { name: 'Jelena Simić', role: 'CEO', image: '/team/jelena.jpg' },
  { name: 'Ivan Kovač', role: 'CTO', image: '/team/ivan.jpg' },
  { name: 'Milica Ristić', role: 'Marketing', image: '/team/milica.jpg' },
]
</script>

<template>
  <section class="bg-white text-gray-800">

    <!-- Brand Story -->
    <div class="max-w-4xl mx-auto text-center py-12">
      <h2>Naša Priča</h2>
      <p>
        Naša firma je osnovana iz želje da promenimo industriju kroz inovacije i posvećenost korisnicima.
        Sve je počelo sa malim timom i velikom idejom — danas gradimo rešenja koja prave razliku.
      </p>
    </div>

    <!-- Mission and Values -->
  

    <!-- Team and Faces -->
    <!-- <div
      v-motion="{
        initial: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }
      }"
      class="text-center"
    >
      <h2 class="text-3xl font-bold mb-10">Upoznajte Naš Tim</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="member in team" :key="member.name" class="w-48 text-center">
          <img :src="member.image" :alt="member.name" class="rounded-full w-32 h-32 mx-auto object-cover shadow-md" />
          <h3 class="mt-4 font-semibold">{{ member.name }}</h3>
          <p class="text-sm text-gray-500">{{ member.role }}</p>
        </div>
      </div>
    </div> -->

    <!-- Social Proof -->
    <div class="bg-slate-700 py-12">
      <h2 class="text-white mb-16">Šta Kažu Naši Klijenti</h2>
    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-center justify-items-center">
        <div v-for="t in testimonials" :key="t.name" class="bg-gray-100 p-6 rounded-xl shadow-sm">
          <p>"{{ t.text }}"</p>
          <p class="mt-4 font-semibold text-gray-900">{{ t.name }}</p>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="relative bg-slate-200 text-black py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div class="absolute inset-0 opacity-10 bg-[url('@/assets/img/kran10.png')] bg-no-repeat bg-cover bg-contain pointer-events-none"></div>

      <h2 >Spremni za saradnju?</h2>
      <p class="mb-16">Kontaktirajte nas ili istražite naše proizvode.</p>
      <div class="flex justify-center gap-4">
        <RouterLink to="/contact-us" class="btn-primary">Kontakt</RouterLink>
        <RouterLink to="/products" class="btn-primary">Pogledaj Proizvode</RouterLink>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* dodatni stilovi po potrebi */
</style>
