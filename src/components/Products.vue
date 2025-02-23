<script setup>
import { ref, nextTick } from "vue";
import AnimatedText from "./AnimatedText.vue";
import kran1 from "@/assets/img/kran1.jpg";
import kran2 from "@/assets/img/kran2.jpg";
import kran3 from "@/assets/img/kran3.jpg";

// Podaci za glavne i sub-kartice
const items = [
  {
    name: "Kablovske dizalice",
    subText: "U svetu tehnologije, inovacije se stalno menjaju, a preduzetnici moraju da se prilagode brzom tempu napretka. Novi trendovi, kao što su veštačka inteligencija, automatizacija i održivost, oblikuju budućnost tržišta. Prilagodljivost, kreativnost i sposobnost učenja ključne su veštine za uspeh u ovom dinamičnom okruženju. Prepoznavanje prilika, kao i spremnost na inovacije, omogućava preduzetnicima da ostanu konkurentni i postignu dugoročni uspeh.",
    link: "https://example.com/1",
    subItems: [
      {
        title: "Dizalica za kablovske dizalice",
        description: "Veoma kvalitetna dizalica za kablovske dizalice",
        link: "https://example.com/sub1",
        image: kran1,
      },
      {
        title: "Sub 1.2",
        description: "Opis Sub 1.2",
        link: "https://example.com/sub2",
        image: kran2,
      },
    ],
  },
  {
    name: "Lančane dizalice",
    subText: "Opis za karticu 2",
    link: "https://example.com/2",
    subItems: [
      {
        title: "Sub 2.1",
        description: "Opis Sub 2.1",
        link: "https://example.com/sub3",
        image: kran1,
      },
      {
        title: "Sub 2.2",
        description: "Opis Sub 2.2",
        link: "https://example.com/sub4",
        image: kran3,
      },
    ],
  },
  {
    name: "Mobilne dizalice",
    subText: "Opis za karticu 3",
    link: "https://example.com/3",
    subItems: [
      {
        title: "Sub 3.1",
        description: "Opis Sub 3.1",
        link: "https://example.com/sub5",
        image: kran2,
      },
    ],
  },
];

// Praćenje otvorenih elemenata
const openIndex = ref(null);
const cardRefs = ref([]); // Ref lista za čuvanje kartica

// Funkcija za otvaranje/zatvaranje kartica
const toggle = async (index) => {
  if (openIndex.value === index) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
    await nextTick(); // Osigurava da DOM bude ažuriran pre skrolovanja
    if (cardRefs.value[index]) {
      cardRefs.value[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Pozicionira element u centar ekrana
      });
    }
  }
};

// Funkcija za upravljanje klikom na sub karticu
const handleSubItemClick = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div class="flex flex-col gap-8 max-w-full mx-auto text-center pb-16">
    <!-- Glavne kartice -->
    <AnimatedText
      title="Naša ponuda dizalica"
      subtitle="Pronađite dizalicu koja odgovara vašim potrebama"
    />
    <div
      v-for="(item, index) in items"
      :key="index"
      ref="cardRefs"
      :class="[
        'relative rounded-2xl p-6 py-8 bg-white shadow-xl mx-auto w-[90vw] transition-all duration-800 ease-in cursor-pointer break-words ring-1 ring-offset-2 ring-offset-gray-50',
        openIndex === index
          ? 'ring-slate-500/70 shadow-slate-800/20 scale-105'
          : 'ring-slate-400/50 hover:ring-slate-500/60 hover:shadow-slate-500/20 hover:scale-105',
      ]"
      @click="toggle(index)"
    >
      <div class="flex items-center justify-between">
        <div class="text-left">
          <h3 class="text-xl md:text-2xl font-semibold text-gray-800">{{ item.name }}</h3>
          <p class="text-sm md:text-base text-gray-600 mt-2 px-2">{{ item.subText }}</p>
        </div>

        <!-- Strelica koja pokazuje otvaranje koristeći PrimeIcons -->
        <i
          :class="{
            'pi pi-chevron-up md:text-xl rotate-0': openIndex === index,
            'pi pi-chevron-up md:text-xl rotate-180': openIndex !== index,
            'text-slate-800 transition-transform duration-300 ease-in-out': true,
          }"
        ></i>
      </div>

      <div v-show="openIndex === index" class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(subItem, subIndex) in item.subItems"
          :key="subIndex"
          class="relative border rounded-lg bg-gray-50 hover:bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-md flex flex-col overflow-hidden"
          @click="handleSubItemClick(subItem.link)"
        >
          <!-- Slika kao pozadina sa formatom 4:3 -->
          <div class="relative w-full" style="padding-top: 50%;">
            <img
              :src="subItem.image"
              :alt="subItem.title"
              class="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

          <!-- Tamni overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-50 z-10 p-8 flex flex-col justify-center items-center text-center">
            <div>
              <h4 class="text-lg md:text-xl font-medium text-white">{{ subItem.title }}</h4>
              <p class="text-sm md:text-base text-white mt-2">{{ subItem.description }}</p>
              <a
                :href="subItem.link"
                target="_blank"
                class="text-slate-200 hover:underline text-sm md:text-base mt-3 inline-block transition-transform transform hover:scale-105"
              >
                Detaljnije
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
