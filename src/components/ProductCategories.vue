<script setup>
import { ref, computed } from "vue";
import logo from "@/assets/img/footer-logo.png";

// Sample data for categories and products
const categories = [
  {
    id: 1,
    name: "Kablovske dizalice",
    description: "Pouzdane i snažne dizalice za različite industrijske potrebe.",
    image: "@/assets/images/kablovske-dizalice.jpg",
  },
  {
    id: 2,
    name: "Lančane dizalice",
    description: "Idealne za podizanje lakših i srednje teških tereta.",
    image: "@/assets/images/lancane-dizalice.jpg",
  },
  {
    id: 3,
    name: "Mobilne dizalice",
    description: "Fleksibilna i prenosiva rešenja za terenske radove.",
    image: "@/assets/images/mobilne-dizalice.jpg",
  },
  {
    id: 4,
    name: "Dizalice za specijalizovane namene",
    description: "Dizajnirane za specifične industrijske zahteve.",
    image: "@/assets/images/specijalizovane-dizalice.jpg",
  },
  {
    id: 5,
    name: "Dizalice za industrijske hale i postrojenja",
    description: "Savršeno rešenje za rad u zatvorenim industrijskim objektima.",
    image: "@/assets/images/industrijske-dizalice.jpg",
  },
];

// Filter options
const filters = ref({
  capacity: null,
  type: null,
});

// Product data (example for demo purposes)
const products = [
  {
    id: 1,
    name: "Dizalica A",
    category: 1,
    capacity: "do 5t",
    type: "Električna",
    image: "@/assets/images/dizalica-a.jpg",
    description: "Pouzdana kablovska dizalica za manja opterećenja.",
  },
  {
    id: 2,
    name: "Dizalica B",
    category: 2,
    capacity: "5-10t",
    type: "Hidraulična",
    image: "@/assets/images/dizalica-b.jpg",
    description: "Srednje kapacitetna lančana dizalica.",
  },
  {
    id: 3,
    name: "Dizalica C",
    category: 3,
    capacity: "preko 10t",
    type: "Električna",
    image: "@/assets/images/dizalica-c.jpg",
    description: "Mobilna dizalica velikog kapaciteta.",
  },
];

// Filtered products
const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesCapacity =
      !filters.value.capacity || product.capacity === filters.value.capacity;
    const matchesType =
      !filters.value.type || product.type === filters.value.type;
    return matchesCapacity && matchesType;
  });
});

// Selected category
const selectedCategory = ref(null);

// Methods
const selectCategory = (id) => {
  selectedCategory.value = id;
};

const resetFilters = () => {
  filters.value = { capacity: null, type: null };
};
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Category Selector -->
    <div v-if="!selectedCategory" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        class="cursor-pointer p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-all"
      >
        <img :src="category.image" :alt="category.name" class="rounded-lg mb-4">
        <h2 class="text-xl font-semibold">{{ category.name }}</h2>
        <p class="text-gray-600">{{ category.description }}</p>
      </div>
    </div>

    <!-- Products -->
    <div v-else>
      <button @click="selectedCategory = null" class="mb-4 text-blue-500">
        &larr; Povratak na kategorije
      </button>

      <div class="flex flex-wrap gap-4 mb-4">
        <!-- Filters -->
        <div class="w-full sm:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h3 class="font-semibold mb-2">Filteri</h3>
          <label class="block mb-2">
            Kapacitet:
            <select v-model="filters.capacity" class="w-full mt-1 p-2 border rounded-lg">
              <option value="" selected>Sve</option>
              <option value="do 5t">do 5t</option>
              <option value="5-10t">5-10t</option>
              <option value="preko 10t">preko 10t</option>
            </select>
          </label>
          <label class="block mb-2">
            Vrsta:
            <select v-model="filters.type" class="w-full mt-1 p-2 border rounded-lg">
              <option value="" selected>Sve</option>
              <option value="Električna">Električna</option>
              <option value="Hidraulična">Hidraulična</option>
            </select>
          </label>
          <button @click="resetFilters" class="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">
            Resetuj filtere
          </button>
        </div>

        <!-- Product List -->
        <div class="w-full sm:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-all"
          >
            <img :src="product.image" :alt="product.name" class="rounded-lg mb-4">
            <h2 class="text-lg font-semibold">{{ product.name }}</h2>
            <p class="text-gray-600 text-sm">{{ product.description }}</p>
            <p class="text-gray-800 font-semibold mt-2">Kapacitet: {{ product.capacity }}</p>
            <p class="text-gray-800 font-semibold">Vrsta: {{ product.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
