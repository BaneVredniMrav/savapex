<script setup>
import { ref } from "vue";
import AnimatedText from "./AnimatedText.vue";
import kran1 from "@/assets/img/kran1.jpg";
import kran2 from "@/assets/img/kran2.jpg";
import kran3 from "@/assets/img/kran3.jpg";

// Podaci za glavne i sub-kartice
const items = [
  {
    name: "Kablovske dizalice",
    subText: "Opis za karticu 1",
    link: "https://example.com/1",
    subItems: [
      { 
        title: "Sub 1.1", 
        description: "Opis Sub 1.1", 
        link: "https://example.com/sub1", 
        image: kran1
      },
      { 
        title: "Sub 1.2", 
        description: "Opis Sub 1.2", 
        link: "https://example.com/sub2", 
        image: kran2
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
        image: kran1
      },
      { 
        title: "Sub 2.2", 
        description: "Opis Sub 2.2", 
        link: "https://example.com/sub4", 
        image: kran3
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
        image: kran2
      },
    ],
  },
  {
    name: "Dizalice za specijalizovane namene",
    subText: "Opis za karticu 4",
    link: "https://example.com/2",
    subItems: [
      { 
        title: "Sub 4.1", 
        description: "Opis Sub 4.1", 
        link: "https://example.com/sub3", 
        image: kran1
      },
      { 
        title: "Sub 4.2", 
        description: "Opis Sub 4.2", 
        link: "https://example.com/sub4", 
        image: kran3
      },
    ],
  },
  {
    name: "Dizalice za industrijske hale i postrojenja",
    subText: "Opis za karticu 5",
    link: "https://example.com/2",
    subItems: [
      { 
        title: "Sub 5.1", 
        description: "Opis Sub 5.1", 
        link: "https://example.com/sub3", 
        image: kran1
      },
      { 
        title: "Sub 5.2", 
        description: "Opis Sub 5.2", 
        link: "https://example.com/sub4", 
        image: kran3
      },
      { 
        title: "Sub 5.1", 
        description: "Opis Sub 5.1", 
        link: "https://example.com/sub3", 
        image: kran1
      },
      { 
        title: "Sub 5.2", 
        description: "Opis Sub 5.2", 
        link: "https://example.com/sub4", 
        image: kran3
      },
      { 
        title: "Sub 5.1", 
        description: "Opis Sub 5.1", 
        link: "https://example.com/sub3", 
        image: kran1
      },
      { 
        title: "Sub 5.2", 
        description: "Opis Sub 5.2", 
        link: "https://example.com/sub4", 
        image: kran3
      },
    ],
  },
];

// Praćenje otvorenih elemenata
const openIndex = ref(null);

// Funkcija za otvaranje/zatvaranje kartica
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

// Funkcija za upravljanje klikom na sub karticu
const handleSubItemClick = (link) => {
  window.open(link, "_blank"); // Otvara link u novom tabu
};
</script>

<template>
  <div class="flex flex-col gap-8 max-w-full mx-auto text-center pt-16 pb-16">
    <!-- Glavne kartice -->
    <AnimatedText
      title="Naša ponuda dizalica"
      subtitle="Pronađite dizalicu koja odgovara vašim potrebama" 
    />
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'border border-slate-700 rounded-xl p-6 bg-white shadow-lg mx-auto w-[90vw] hover:shadow-2xl transition-shadow hover:shadow-slate-800/50 cursor-pointer break-words',
        openIndex === index ? 'transform scale-105 swing-in-top-fwd' : 'border-slate-600',
        'max-w-full overflow-hidden'
      ]"
      @click="toggle(index)"
    >
      <div class="flex items-center justify-between">
        <div class="text-left">
          <h3 class="text-2xl font-semibold text-gray-800">{{ item.name }}</h3>
          <p class="text-sm text-gray-600 mt-2">{{ item.subText }}</p>
        </div>
        
        <!-- Strelica koja pokazuje otvaranje koristeći PrimeIcons -->
        <i
          :class="{
            'pi pi-chevron-up': openIndex === index,
            'pi pi-chevron-down': openIndex !== index,
            'text-slate-800': true,
            'transition-transform': true
          }"
        ></i>
      </div>

      <!-- Sub-kartice sa pozadinskom slikom -->
      <div v-show="openIndex === index" class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(subItem, subIndex) in item.subItems"
          :key="subIndex"
          class="border rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors transform hover:scale-105 hover:shadow-md flex flex-col h-full"
          :style="{ backgroundImage: 'url(' + subItem.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
          @click="handleSubItemClick(subItem.link)" 
        >
          <div class="flex flex-col justify-between h-full bg-black bg-opacity-50 p-6">
            <div>
              <h4 class="text-xl font-medium text-white">{{ subItem.title }}</h4>
              <p class="text-sm text-white mt-1">{{ subItem.description }}</p>
              <a
                :href="subItem.link"
                target="_blank"
                class="text-slate-800 hover:underline text-sm mt-2 inline-block"
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

<style scoped>
@keyframes swing-in-top-fwd {
  0% {
    transform: rotateX(-60deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}

.swing-in-top-fwd {
  animation: swing-in-top-fwd 0.5s ease-out forwards;
}
</style>
