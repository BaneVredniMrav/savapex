<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
