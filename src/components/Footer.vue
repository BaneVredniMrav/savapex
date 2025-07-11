<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="bg-slate-800 text-white border-t border-brandRose shadow-lg">
    <div class="bg-slate-700 py-4 border-t border-brandRose text-center text-sm text-gray-400">
      <p>
        2025 ©
        <RouterLink to="/" class="link">Savapex d.o.o.</RouterLink>
        |
        <RouterLink to="/politika-privatnosti" class="link">Politika privatnosti</RouterLink>
        |
        Web izrada:
        <a
          href="https://github.com/BaneVredniMrav"
          target="_blank"
          class="link"
        >
          BaneVredniMrav
        </a>
      </p>

      <a
        href="https://instagram.com/savapexdoo/"
        target="_blank"
        rel="noopener"
        class="inline-block mt-2 hover:text-brandOrange transition"
        aria-label="Instagram"
      >
        <i class="pi pi-instagram text-xl"></i>
      </a>
    </div>
  </footer>
</template>
