  <script setup>
  import { ref,  onMounted, onUnmounted } from "vue";
  import { useRouter } from "vue-router";
  import AnimatedText from "@/components/AnimatedText.vue";
  import { products } from "@/constants/products";

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
    <div class="bg-gray-100 pb-8 px-4">
      <div class="max-w-7xl mx-auto pt-2">
        <!-- Filteri -->


        <!-- Lista proizvoda -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in productsList"
            :key="product.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
    <div class="bg-white p-4 flex justify-center items-center">
      <img
        :src="product.image"
        :alt="product.name"
        class="max-h-48 w-auto object-contain"
      />
    </div>            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm">{{ product.category }}</p>
              <p class="mt-2 text-brandOrange font-bold">{{ product.capacity }}</p>
              <button @click="goToProduct(product.id)" class="mt-4 btn-primary">
                Detaljnije
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <style>
  /* Animacija za dropdown */
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
