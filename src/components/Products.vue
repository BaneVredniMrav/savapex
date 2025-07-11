  <script setup>
  import { ref, computed, onMounted, onUnmounted } from "vue";
  import { useRouter } from "vue-router";
  import AnimatedText from "@/components/AnimatedText.vue";
  import { products } from "@/constants/products";

  const router = useRouter();

const categories = computed(() => {
  return [...new Set(productsList.value.map(p => p.category))].sort()
})

const capacities = computed(() => {
  return [...new Set(productsList.value.map(p => p.capacity))].sort((a, b) => a - b)
})

  const productsList = ref(products);

  const selectedCategory = ref("");
  const selectedCapacity = ref("");
  const openDropdown = ref(null); // Prati koji dropdown je otvoren

  const toggleDropdown = (type) => {
    openDropdown.value = openDropdown.value === type ? null : type;
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      openDropdown.value = null;
    }
  };

  const selectCategory = (category) => {
    selectedCategory.value = category;
    openDropdown.value = null;
  };

  const selectCapacity = (capacity) => {
    selectedCapacity.value = capacity;
    openDropdown.value = null;
  };

  const filteredProducts = computed(() => {
    return productsList.value.filter((product) => {
      return (
        (selectedCategory.value === "" || product.category === selectedCategory.value) &&
        (selectedCapacity.value === "" || product.capacity === parseInt(selectedCapacity.value))
      );
    });
  });

  const goToProduct = (id) => {
    router.push(`/product/${id}`);
  };

  onMounted(() => {
    document.addEventListener("click", closeDropdown);
  });

  onUnmounted(() => {
    document.removeEventListener("click", closeDropdown);
  });
  </script>

  <template>
    <AnimatedText
      title="Naša ponuda dizalica"
      subtitle="Pronađite dizalicu koja odgovara vašim potrebama"
    />
    <div class="bg-gray-100 pb-8 px-4">
      <div class="max-w-7xl mx-auto pt-2">
        <!-- Filteri -->
        <div class="mt-8 flex gap-6 justify-center flex-wrap sm:flex-nowrap">
          <!-- Filter: Kategorija -->
          <div class="relative w-full dropdown-container">
            <button
              @click="toggleDropdown('category')"
              class="w-full flex justify-between items-center border px-4 py-3 rounded-lg bg-white shadow-md hover:bg-gray-100 transition"
            >
              <span>{{ selectedCategory || "Sve kategorije" }}</span>
              <span
                :class="{
                  'pi pi-chevron-up md:text-xl rotate-0': openDropdown === 'category',
                  'pi pi-chevron-up md:text-xl rotate-180': openDropdown !== 'category',
                  'text-slate-800 transition-transform duration-300 ease-in-out': true,
                }"
              ></span>
            </button>
            <transition name="dropdown">
              <div
                v-if="openDropdown === 'category'"
                class="absolute w-full bg-white shadow-lg rounded-lg mt-2 z-10 overflow-hidden"
              >
                <ul class="py-2">
                  <li
                    @click="selectCategory('')"
                    class="px-4 py-3 hover:bg-brandOrange hover:text-slate-800 cursor-pointer"
                  >
                    Sve kategorije
                  </li>
                  <li
                    v-for="category in categories"
                    :key="category"
                    @click="selectCategory(category)"
                    class="px-4 py-3 hover:bg-brandOrange hover:text-slate-800 cursor-pointer"
                  >
                    {{ category }}
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <!-- Filter: Kapacitet -->
          <div class="relative w-full dropdown-container">
            <button
              @click="toggleDropdown('capacity')"
              class="w-full flex justify-between items-center border px-4 py-3 rounded-lg bg-white shadow-md hover:bg-gray-100 transition"
            >
              <span>{{ selectedCapacity || "Svi kapaciteti" }}</span>
              <span
                :class="{
                  'pi pi-chevron-up md:text-xl rotate-0': openDropdown === 'capacity',
                  'pi pi-chevron-up md:text-xl rotate-180': openDropdown !== 'capacity',
                  'text-slate-800 transition-transform duration-300 ease-in-out': true,
                }"
              ></span>
            </button>
            <transition name="dropdown">
              <div
                v-if="openDropdown === 'capacity'"
                class="absolute w-full bg-white shadow-lg rounded-lg mt-2 z-10 overflow-hidden"
              >
                <ul class="py-2">
                  <li
                    @click="selectCapacity('')"
                    class="px-4 py-3 hover:bg-brandOrange hover:text-slate-800 cursor-pointer"
                  >
                    Svi kapaciteti
                  </li>
                  <li
                    v-for="capacity in capacities"
                    :key="capacity"
                    @click="selectCapacity(capacity)"
                    class="px-4 py-3 hover:bg-brandOrange hover:text-slate-800 cursor-pointer"
                  >
                    {{ capacity }} tona
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" class="text-center text-gray-500 text-lg mt-6">
          Nema pronađenih proizvoda.
        </div>

        <!-- Lista proizvoda -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in filteredProducts"
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
              <p class="mt-2 text-brandOrange font-bold">{{ product.capacity }} tona</p>
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
