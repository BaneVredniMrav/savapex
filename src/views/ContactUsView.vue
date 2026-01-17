<script setup>
import AnimatedText from "@/components/AnimatedText.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactInformations from "@/components/contact/ContactInformations.vue";
</script>

<template>
  <AnimatedText 
    title="Kontaktirajte nas"
    subtitle="Tu smo da odgovorimo na sva vaša pitanja i pomognemo vam da pronađete pravo rešenje za vaše potrebe"
  /> 
  
  <!-- Main Contact Section -->
  <section class="section-light">
    <div class="container-wide">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left: Contact Info + Map -->
        <ContactInformations />
        
        <!-- Right: Contact Form -->
        <ContactForm />
      </div>
    </div>
  </section>
</template>
