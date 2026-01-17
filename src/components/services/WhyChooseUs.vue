<script setup>
import { Truck, Award, Settings, Wrench, Building2, ShieldCheck } from 'lucide-vue-next'

const features = [
  { icon: Truck, title: 'Brza i tačna isporuka', description: 'Uvek poštujemo rokove, sa efikasnom logistikom i sigurnim transportom.' },
  { icon: Award, title: 'Sertifikovan i obučen tim', description: 'Naši inženjeri i tehničari poseduju sve potrebne sertifikate i licencu.' },
  { icon: Settings, title: 'Prilagođena rešenja', description: 'Svaki projekat je jedinstven – izrađujemo opremu po vašoj meri i potrebi.' },
  { icon: Wrench, title: 'Servis i podrška', description: 'Nudimo brzu intervenciju, rezervne delove i redovno održavanje opreme.' },
  { icon: Building2, title: 'Izrada kranskih staza', description: 'Projektovanje i montaža kranskih staza za sve tipove industrijskih dizalica.' },
  { icon: ShieldCheck, title: 'Bezbednost na prvom mestu', description: 'Poštujemo sve domaće i EU standarde kako bi rad bio maksimalno bezbedan.' },
]
</script>

<template>
  <section class="section-light">
    <div class="container-wide text-center mb-8 sm:mb-10 md:mb-12">
      <h2>Zašto izabrati baš nas?</h2>
      <p>
        Više od <strong>20 godina iskustva</strong>, stotine uspešnih projekata i tim koji garantuje vrhunski kvalitet.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 container-wide">
      <div v-for="feature in features" :key="feature.title" class="card group">
        <div class="card-body">
          <div class="icon-circle">
            <component :is="feature.icon" class="w-6 h-6 sm:w-7 sm:h-7 text-brandOrange" />
          </div>
          <h4 class="card-title text-center group-hover:text-brandOrange transition">{{ feature.title }}</h4>
          <p class="card-text text-center">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
