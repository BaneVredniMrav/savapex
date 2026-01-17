<script setup>
import AnimatedText from '@/components/AnimatedText.vue';
import QuestionOrProject from '@/components/services/QuestionOrProject.vue';
import ServicesGrid from '@/components/services/ServicesGrid.vue';
import WhyChooseUs from '@/components/services/WhyChooseUs.vue';
</script>

<template>
  <AnimatedText
    title="Usluge koje pružamo"
    subtitle="Kompletna rešenja za industrijsku dizalnu tehniku – od projektovanja do održavanja"
  />
  
  <ServicesGrid />
  <WhyChooseUs />
  <QuestionOrProject />
</template>
