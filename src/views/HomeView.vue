<script setup>
import { useHead } from '@vueuse/head'


import Hero from "@/components/Hero.vue";
import Products from "@/components/Products.vue";
import ServicesView from "./ServicesView.vue";
import Partners from "@/components/Partners.vue";
import MissionVision from "@/components/Our-mission-vision.vue";
import HomeReferences from "@/components/HomeReferences.vue";

useHead({
  title: 'SAVAPEX | Industrijske dizalice i kranske staze',
  meta: [
    {
      name: 'description',
      content: 'SAVAPEX d.o.o. - Proizvodnja, montaža i servisiranje industrijskih dizalica, kranskih staza i opreme.'
    },
    { property: 'og:title', content: 'SAVAPEX | Industrijske dizalice' },
    { property: 'og:description', content: 'Kompletna rešenja za dizalice i industrijsku opremu.' },
    { property: 'og:image', content: '/savapex/apple-touch-icon.png' },
    { property: 'og:url', content: 'https://www.savapex.com/' },   
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.savapex.com/' }
  ]
})
</script>

<template>
  <Hero />
  <MissionVision />
  <!-- <ServicesView /> -->
  <HomeReferences />
  <Partners />
</template>
