<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AnimatedText from "@/components/AnimatedText.vue";
import { products } from "@/constants/products";
import { Weight, ArrowRight } from "lucide-vue-next";

const router = useRouter();
const productsList = ref(products);

const goToProduct = (id) => {
  router.push(`/product/${id}`);
};
</script>

<template>
  <AnimatedText
    title="Naša ponuda dizalica"
    subtitle="Pronađite dizalicu koja odgovara vašim potrebama"
  />
  
  <section class="section-light pb-16">
    <div class="container-wide">
      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in productsList"
          :key="product.id"
          class="group product-card"
          @click="goToProduct(product.id)"
        >
          <!-- Image Container -->
          <div class="product-card-image">
            <img
              :src="product.image"
              :alt="product.name"
              class="max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <!-- Capacity Badge -->
            <div class="absolute top-4 right-4 badge badge-primary">
              <Weight class="w-4 h-4" />
              {{ product.capacity }}
            </div>
          </div>
          
          <!-- Content -->
          <div class="card-body">
            <h3 class="card-title group-hover:text-brandOrange transition-colors">
              {{ product.name }}
            </h3>
            <p class="card-text line-clamp-2 mb-4">
              {{ product.description }}
            </p>
            <div class="flex items-center text-brandOrange font-semibold text-sm group-hover:gap-2 transition-all">
              <span>Detaljnije</span>
              <ArrowRight class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
