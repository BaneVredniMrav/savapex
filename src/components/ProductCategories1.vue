<script setup>
import { ref, onMounted, reactive } from 'vue';
import kran1 from '@/assets/img/kran1.jpg';
import kran2 from '@/assets/img/kran2.jpg';
import kran3 from '@/assets/img/kran3.jpg';


const sectionId = 'vodovodni-materijal';
const sections = reactive([
  {
    title: 'Kablovske dizalice',
    images: [
      kran1,
      kran2,
      kran3
    ],
    description: 'Opis kablovskih dizalica.',
    currentImageIndex: 0
  },
  {
    title: 'Lančane dizalice',
    images: [
    kran1,
      kran2,
      kran3
    ],
    description: 'Opis lančanih dizalica.',
    currentImageIndex: 0
  },
  {
    title: 'Mobilne dizalice',
    images: [
    kran1,
      kran2,
      kran3
    ],
    description: 'Opis mobilnih dizalica.',
    currentImageIndex: 0
  },
  {
    title: 'Dizalice za specijalizovane namene',
    images: [
    kran1,
      kran2,
      kran3
    ],
    description: 'Opis dizalica za specijalizovane namene.',
    currentImageIndex: 0
  },
  {
    title: 'Dizalice za industrijske hale i postrojenja',
    images: [
    kran1,
      kran2,
      kran3
    ],
    description: 'Opis dizalica za industrijske hale i postrojenja.',
    currentImageIndex: 0
  }
]);

const currentSectionIndex = ref(0);

const updateImages = () => {
  const section = sections[currentSectionIndex.value];
  section.currentImageIndex = (section.currentImageIndex + 1) % section.images.length;

  // Prelazak na sledeću sekciju nakon 3 sekunde
  currentSectionIndex.value = (currentSectionIndex.value + 1) % sections.length;
};

onMounted(() => {
  setInterval(updateImages,1500);
});
</script>

<template>
    <section :id="sectionId" class="bg-gray-100 p-8 rounded-lg shadow-md">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div
          v-for="(section, index) in sections"
          :key="index"
          :class="[
            'flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          ]"
        >
          <!-- Slika -->
          <div class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              :src="section.images[section.currentImageIndex]"
              :alt="section.title"
              class="rounded-lg shadow-lg w-full max-w-md transition-opacity duration-1000"
            />
          </div>
  
          <!-- Tekst -->
          <div class="w-full md:w-1/2 text-center md:text-left md:pl-8">
            <h2 class="text-2xl font-bold text-gray-800">{{ section.title }}</h2>
            <div class="border-t-4 border-orange-500 w-20 my-4"></div>
            <p class="text-gray-700 text-lg">{{ section.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  