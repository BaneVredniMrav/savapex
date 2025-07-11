<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '@/constants/products'
import ContactModal from '@/components/contact/ContactModal.vue'

const route = useRoute()
const router = useRouter()
const product = ref(null)

const showModal = ref(false)

onMounted(() => {
  const productId = parseInt(route.params.id)
  product.value = products.find(p => p.id === productId) || null
})

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-12 pt-32">
    <div class="flex justify-end mb-4">
      <button @click="router.back()" class="btn-primary">← Nazad</button>
    </div>

    <div v-if="product" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-white p-4 flex justify-center items-center">
        <img :src="product.image" :alt="product.name" class="max-h-48 w-auto object-contain" />
      </div>
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800">{{ product.name }}</h1>
        <p class="text-gray-600 mt-2">Kategorija: {{ product.category }}</p>
        <p class="text-gray-600 mt-2">Kapacitet: {{ product.capacity }}</p>
        <p class="mt-4 text-gray-700">{{ product.description }}</p>
        <button @click="openModal" class="mt-6 btn-primary">Zatraži ponudu</button>
      </div>
    </div>
    <div v-else class="text-center text-gray-500 text-lg mt-6">Proizvod nije pronađen.</div>

    <!-- Modal komponenta -->
    <ContactModal :show="showModal" :subject="product?.name" @close="closeModal" />
  </div>
</template>
