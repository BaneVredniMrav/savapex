<template>
    <div class="border border-gray-300 p-4 m-4 text-center">
        <img :src="product.image" :alt="product.name" class="max-w-full h-auto" />
        <h2 class="text-2xl my-2">{{ product.name }}</h2>
        <p class="text-base my-2">{{ product.description }}</p>
        <p class="text-lg text-red-700">{{ currency(product.price) }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    description: String,
    price: Number,
    image: String
});

const currency = (value) => {
    return `$${value.toFixed(2)}`;
};
</script>
