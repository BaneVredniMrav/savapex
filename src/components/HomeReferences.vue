<script setup>
import { references } from "@/constants/references";

</script>

<template>
    <div class="min-h-screen bg-slate-100 flex items-center justify-center">
        <section class="max-w-4xl mx-auto p-8 flex flex-col items-center">
            <h2>
                Reference Ugrađenih Dizalica
            </h2>
            <ul class="space-y-8 w-full flex flex-col items-center mt-10">
                <li
                    v-for="(item, index) in references"
                    :key="index"
                    class="flex flex-col md:flex-row md:items-center md:space-x-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border-l-8 border-slate-800 p-6 w-full max-w-5xl"
                >
                    <span
                        class="flex-shrink-0 w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md ring-4 ring-slate-200"
                    >
                        {{ index + 1 }}
                    </span>
                    <div class="mt-4 md:mt-0">
                        <h3 >
                            {{ item.client }}
                        </h3>
                        <p class="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
                            {{ item.description }}
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
