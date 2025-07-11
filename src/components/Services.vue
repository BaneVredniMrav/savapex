<script setup>
import { ref, onMounted } from 'vue';
import {
  Briefcase,
  Truck,
  Wrench,
  Building2,
  ShieldCheck,
  UserCog,
  PackagePlus
} from 'lucide-vue-next';

const services = [
  {
    icon: Briefcase,
    title: 'Projektovanje i proizvodnja',
    description: 'Industrijske dizalice po meri uz vrhunski inženjering.',
  },
  {
    icon: Truck,
    title: 'Isporuka i montaža',
    description: 'Efikasna dostava i montaža širom regiona.',
  },
  {
    icon: Wrench,
    title: 'Servis i održavanje',
    description: 'Redovan i vanredni servis uz dostupne rezervne delove.',
  },
  {
    icon: Building2,
    title: 'Kranske staze',
    description: 'Izrada i montaža kranskih staza za sve tipove objekata.',
  },
  {
    icon: ShieldCheck,
    title: 'Bezbednosne provere',
    description: 'Tehnički pregledi i bezbednosne provere po standardima.',
  },
  {
    icon: UserCog,
    title: 'Obuka i konsalting',
    description: 'Stručno savetovanje i edukacija osoblja za rad sa opremom.',
  },
  {
    icon: PackagePlus,
    title: 'Custom rešenja',
    description: 'Rešenja po narudžbini za specifične industrijske potrebe.',
  },
];

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) isVisible.value = true;
  }, { threshold: 0.2 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-white py-20 px-6 md:px-12 lg:px-20 transition-all duration-1000 ease-in-out"
  >

    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
    >
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white border border-slate-200 rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Usluga"
      >
        <component :is="service.icon" class="w-12 h-12 mx-auto text-brandOrange mb-4" />
        <h3 class="">{{ service.title }}</h3>
        <p class="text-gray-600 text-sm">{{ service.description }}</p>
      </div>
    </div>
  </section>
<section class="bg-slate-50 py-24 px-6 md:px-12 lg:px-20">
  <div class="max-w-7xl mx-auto text-center mb-16">
    <h2>
      Zašto izabrati baš nas?
    </h2>
    <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
      Više od <strong>20 godina iskustva</strong>, stotine uspešnih projekata i tim koji garantuje vrhunski kvalitet i sigurnost u industrijskoj montaži i proizvodnji.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition group">
      <div class="text-brandOrange text-4xl mb-4">
        🚚
      </div>
      <h3 class="group-hover:text-brandOrange transition">
        Brza i tačna isporuka
      </h3>
      <p class="text-gray-600 text-sm">
        Uvek poštujemo rokove, sa efikasnom logistikom i sigurnim transportom.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition group">
      <div class="text-brandOrange text-4xl mb-4">
        🧰
      </div>
      <h3 class="group-hover:text-brandOrange transition">
        Sertifikovan i obučen tim
      </h3>
      <p class="text-gray-600 text-sm">
        Naši inženjeri i tehničari poseduju sve potrebne sertifikate i licencu.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition group">
      <div class="text-brandOrange text-4xl mb-4">
        ⚙️
      </div>
      <h3 class="group-hover:text-brandOrange transition">
        Prilagođena rešenja
      </h3>
      <p class="text-gray-600 text-sm">
        Svaki projekat je jedinstven – izrađujemo opremu po vašoj meri i potrebi.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition group">
      <div class="text-brandOrange text-4xl mb-4">
        🛠️
      </div>
      <h3 class="group-hover:text-brandOrange transition">
        Servis i podrška
      </h3>
      <p class="text-gray-600 text-sm">
        Nudimo brzu intervenciju, rezervne delove i redovno održavanje opreme.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition group">
      <div class="text-brandOrange text-4xl mb-4">
        🧱
      </div>
      <h3 class="group-hover:text-brandOrange transition">
        Izrada kranskih staza
      </h3>
      <p class="text-gray-600 text-sm">
        Projektovanje i montaža kranskih staza za sve tipove industrijskih dizalica.
      </p>
    </div>

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition group">
      <div class="text-brandOrange text-4xl mb-4">
        🏗️
      </div>
      <h3 class="group-hover:text-brandOrange transition">
        Bezbednost na prvom mestu
      </h3>
      <p class="text-gray-600 text-sm">
        Poštujemo sve domaće i EU standarde kako bi rad bio maksimalno bezbedan.
      </p>
    </div>
  </div>
</section>


<section class="relative bg-slate-200 text-black py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
  <!-- Dekoracija u pozadini -->
  <div class="absolute inset-0 opacity-10 bg-[url('@/assets/img/kran10.png')] bg-no-repeat bg-cover bg-contain pointer-events-none"></div>

  <div class="max-w-4xl mx-auto text-center relative z-10">
    <h2>
      Imate pitanje ili projekat?
    </h2>

    <p class="text-lg md:text-xl text-slate-700 mb-8">
      Naš stručni tim vam stoji na raspolaganju za sva tehnička i komercijalna pitanja.  
    </p>

    <ul class="text-base md:text-lg text-slate-600 mb-10 space-y-2">
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
