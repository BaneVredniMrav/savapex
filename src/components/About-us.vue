<script setup>
import AnimatedText from '@/components/AnimatedText.vue';
import { 
  HardHat, 
  Wrench, 
  Package, 
  Radio, 
  Zap, 
  Lightbulb,
  Award,
  Users,
  Target,
  ShieldCheck,
  Heart,
  Headphones
} from 'lucide-vue-next';

const services = [
  { icon: HardHat, text: 'Mosne, portalne, konzolne i specijalne dizalice' },
  { icon: Wrench, text: 'Proizvodnja i montaža kranskih staza' },
  { icon: Package, text: 'Isporuka opreme i rezervnih delova' },
  { icon: Radio, text: 'Ugradnja radijskog upravljanja' },
  { icon: Zap, text: 'Klizni napojni vodovi za napajanje' },
  { icon: Lightbulb, text: 'Tehnička rešenja po meri' },
];

const advantages = [
  { icon: Award, title: 'Specijalizacija', text: 'Fokusirani isključivo na industrijske dizalice' },
  { icon: Target, title: 'Kvalitet', text: 'Komponente zapadno-evropskih proizvođača' },
  { icon: Users, title: 'Iskustvo', text: 'Stručni tim za kompleksne projekte' },
  { icon: Heart, title: 'Pristup', text: 'Savetujemo najbolje rešenje za vas' },
  { icon: ShieldCheck, title: 'Reference', text: 'Dokazani rezultati širom Srbije' },
  { icon: Headphones, title: 'Servis', text: 'Pouzdana podrška nakon prodaje' },
];

const stats = [
  { value: '20+', label: 'Godina iskustva' },
  { value: '100+', label: 'Realizovanih projekata' },
  { value: '50+', label: 'Zadovoljnih klijenata' },
  { value: '24/7', label: 'Servisna podrška' },
];
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero h-[70vh] bg-fixed relative flex items-center justify-center">
      <div class="max-w-4xl px-4 text-center relative z-10">
        <AnimatedText
          title="O firmi Savapex"
          subtitle="Vaš pouzdan partner za industrijske dizalice i kranske sisteme"
          text-color="white"
          background-color="gray"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" aria-hidden="true"></div>
    </section>

    <!-- Stats Section -->
    <section class="bg-brandOrange py-8">
      <div class="container-wide">
        <div class="grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/30">
          <div 
            v-for="stat in stats" 
            :key="stat.label" 
            class="text-white px-4 py-3 md:px-8"
          >
            <p class="text-3xl md:text-5xl font-bold mb-1">{{ stat.value }}</p>
            <p class="text-xs md:text-base opacity-90 mb-0">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-white">
      <div class="container-narrow text-center">
        <h2>Ko smo mi?</h2>
        <p class="mb-8">
          Firma Savapex iz Kovačevca bavi se proizvodnjom, prodajom i ugradnjom industrijskih dizalica, 
          sa specijalizacijom u rešavanju složenih zahteva industrijskih postrojenja.
        </p>
        <p class="max-w-3xl">
          Sa dugogodišnjim iskustvom i stručnim timom, Savapex je sinonim za pouzdanost i profesionalizam. 
          Naša misija je da pružimo visokokvalitetne proizvode koji omogućavaju efikasno i sigurno dizanje 
          tereta u različitim industrijama.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-light">
      <div class="container-wide">
        <h2 class="mb-12">Šta radimo?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="service in services" 
            :key="service.text"
            class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4"
          >
            <div class="bg-brandOrange/10 p-3 rounded-xl">
              <component :is="service.icon" class="w-6 h-6 text-brandOrange" />
            </div>
            <p class="text-gray-700 text-left mb-0 flex-1">{{ service.text }}</p>
          </div>
        </div>
        <p class="text-center mt-8 text-gray-600">
          <strong>Kod naše opreme primenjujemo kvalitetne komponente poznatih zapadno-evropskih proizvođača.</strong>
        </p>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="section-dark">
      <div class="container-wide">
        <h2 class="text-white mb-12">Zašto Savapex?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="adv in advantages" 
            :key="adv.title"
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
          >
            <div class="bg-brandOrange/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
              <component :is="adv.icon" class="w-7 h-7 text-brandOrange" />
            </div>
            <h4 class="text-white mb-2">{{ adv.title }}</h4>
            <p class="text-gray-300 text-sm mb-0">{{ adv.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/kran10.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50vh;
  position: relative;
}

@media (max-width: 768px) {
  .hero {
    background-position: top center; 
    background-attachment: scroll;
  }
}
</style>
