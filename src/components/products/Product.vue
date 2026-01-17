<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { products } from '@/constants/products'
import ContactModal from '@/components/contact/ContactModal.vue'
import { ArrowLeft, Weight, FileText, Phone } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const product = ref(null)
const showModal = ref(false)

onMounted(() => {
  const productId = parseInt(route.params.id)
  product.value = products.find(p => p.id === productId) || null
})

// Get other products for "See also" section
const otherProducts = computed(() => {
  if (!product.value) return []
  return products.filter(p => p.id !== product.value.id).slice(0, 3)
})

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const goToProduct = (id) => {
  router.push(`/product/${id}`)
  // Reload product data
  product.value = products.find(p => p.id === id) || null
}
</script>

<template>
  <div class="pt-28 sm:pt-32 min-h-[70vh]">
    <!-- Back Button -->
    <div class="section-light py-4">
      <div class="container-wide flex justify-end">
        <button @click="router.push('/products')" class="btn-back">
          <ArrowLeft class="w-4 h-4" />
          <span>Nazad na proizvode</span>
        </button>
      </div>
    </div>

    <div v-if="product">
      <!-- Product Hero -->
      <section class="section-white">
        <div class="container-wide">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image -->
            <div class="card p-8 flex justify-center items-center hover:translate-y-0">
              <img 
                :src="product.image" 
                :alt="product.name" 
                class="max-h-80 w-auto object-contain"
              />
            </div>
            
            <!-- Info -->
            <div>
              <h1 class="text-left mb-4">{{ product.name }}</h1>
              
              <!-- Capacity Badge -->
              <div class="badge badge-outline mb-6">
                <Weight class="w-5 h-5" />
                <span>Nosivost: {{ product.capacity }}</span>
              </div>
              
              <p class="card-text text-lg mb-8 max-w-none">
                {{ product.description }}
              </p>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink to="/contact-us" class="btn-primary flex items-center justify-center gap-2">
                  <Phone class="w-5 h-5" />
                  Kontaktirajte nas
                </RouterLink>
                <button @click="openModal" class="btn-secondary flex items-center justify-center gap-2">
                  <FileText class="w-5 h-5" />
                  Zatraži ponudu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="section-light">
        <div class="container-wide">
          <h2 class="mb-8">Karakteristike</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="feature-card">
              <div class="icon-circle">
                <Weight class="w-7 h-7 text-brandOrange" />
              </div>
              <h4 class="mb-2">Nosivost</h4>
              <p class="card-text text-center text-lg mb-0">{{ product.capacity }}</p>
            </div>
            <div class="feature-card">
              <div class="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-brandOrange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8"/><path d="m5 12 7-4 7 4"/><path d="M12 2v6"/></svg>
              </div>
              <h4 class="mb-2">Kvalitet</h4>
              <p class="card-text text-center text-lg mb-0">EU standard</p>
            </div>
            <div class="feature-card">
              <div class="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-brandOrange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h4 class="mb-2">Garancija</h4>
              <p class="card-text text-center text-lg mb-0">Servisna podrška</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Products -->
      <section class="section-white" v-if="otherProducts.length">
        <div class="container-wide">
          <h2 class="mb-8">Pogledajte i ostale proizvode</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div 
              v-for="p in otherProducts" 
              :key="p.id"
              class="group card p-6 cursor-pointer"
              @click="goToProduct(p.id)"
            >
              <img 
                :src="p.image" 
                :alt="p.name" 
                class="h-32 w-auto object-contain mx-auto mb-4"
              />
              <h4 class="group-hover:text-brandOrange transition-colors mb-1">{{ p.name }}</h4>
              <p class="text-brandOrange font-semibold text-sm text-center mb-0">{{ p.capacity }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Not Found -->
    <div v-else class="section-light text-center py-20">
      <p class="text-gray-500 text-xl">Proizvod nije pronađen.</p>
      <button @click="router.push('/products')" class="btn-primary mt-6">
        Pogledaj sve proizvode
      </button>
    </div>

    <!-- Modal -->
    <ContactModal :show="showModal" :subject="product?.name" @close="closeModal" />
  </div>
</template>
