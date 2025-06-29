  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import kran1 from '@/assets/img/kran1.jpg';
  import kran2 from '@/assets/img/kran2.jpg';
  import kran3 from '@/assets/img/kran3.jpg';
  import kran4 from '@/assets/img/kran4.jpg';
  import kran5 from '@/assets/img/kran5.jpg';
  
  const route = useRoute();
  const router = useRouter();
  const product = ref(null);
  
  const products = [
    { id: 1, name: "Dizalica 5000", category: "Kablovske dizalice", capacity: 5, image: kran1, description: "Ova dizalica je pogodna za velike građevinske projekte." },
    { id: 2, name: "Lančana dizalica X100", category: "Lančane dizalice", capacity: 10, image: kran2, description: "Izdržljiva lančana dizalica za teške terete." },
    { id: 3, name: "Mobilna dizalica Pro", category: "Mobilne dizalice", capacity: 20, image: kran3, description: "Savršena za mobilne operacije i brze prenose." },
    { id: 4, name: "Industrijska hala 200T", category: "Dizalice za industrijske hale i postrojenja", capacity: 50, image: kran4, description: "Industrijska dizalica za velike terete." },
    { id: 5, name: "Specijalizovana dizalica S-500", category: "Dizalice za specijalizovane namene", capacity: 2, image: kran5, description: "Idealna za specijalizovane operacije i precizne radove." }
  ];
  
  onMounted(() => {
    const productId = parseInt(route.params.id);
    product.value = products.find(p => p.id === productId) || null;
  });

  const goBack = () => {
    router.back();
};
  </script>

<template>
    <div class="max-w-4xl mx-auto px-6 py-12 pt-32">
      <div class="flex justify-end mb-4">
            <button @click="goBack" class="btn-primary">
                ← Nazad
            </button>
        </div>
      <div v-if="product" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover" />
        <div class="p-6">
          <h1 class="text-2xl font-bold text-gray-800">{{ product.name }}</h1>
          <p class="text-gray-600 mt-2">Kategorija: {{ product.category }}</p>
          <p class="text-gray-600 mt-2">Kapacitet: {{ product.capacity }} tona</p>
          <p class="mt-4 text-gray-700">{{ product.description }}</p>
            <button
              @click="$router.push({ path: '/contact-us' })"
              class="mt-6 btn-primary"
            >
            Zatraži ponudu
            </button>
        </div>
      </div>
      <div v-else class="text-center text-gray-500 text-lg mt-6">Proizvod nije pronađen.</div>
    </div>
  </template>

  