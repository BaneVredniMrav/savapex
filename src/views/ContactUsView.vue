<script setup>
import { computed } from "vue";
import AnimatedText from "@/components/AnimatedText.vue";
import ContactForm from "@/components/ContactForm.vue";
const latitude = 44.439385;
const longitude = 20.735282;
const mapLink = computed(
  () =>
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
);
</script>

<template>
  <AnimatedText 
  title="Kontaktirajte nas"
  subtitle="Tu smo da odgovorimo na sva vaša pitanja"
  /> 
  <section class="bg-gray-100 py-8 px-4 lg:px-24 border-b border-brandRose">
    <div class="max-w-4xl mx-auto bg-slate-600 p-4 sm:p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-semibold text-brandOrange mb-4">Podaci o firmi</h3>
        <p class="text-white mt-2 mb-2"><strong>Naziv:</strong> Savapex d.o.o.</p>
        <p class="text-white mb-2"><strong>Adresa:</strong> Ulica 123, 11000 Beograd, Srbija</p>
        <p class="text-white mb-2"><strong>Telefon:</strong> +381 11 123 456</p>
        <p class="text-white mb-2"><strong>Email:</strong> kontakt@xyz.com</p>
        <p class="text-white mb-2"><strong>Radno vreme:</strong> Pon - Pet: 09:00 - 17:00</p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-brandOrange">Lokacija</h3>
        <iframe
          class="w-full h-64 mt-4 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.632752454525!2d20.731731076908517!3d44.440694971075736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750b74e70bb53d3%3A0x3ea6a576343ff0b8!2z0JrQvtCy0LDRh9C10LLQsNGG!5e0!3m2!1ssr!2srs!4v1740952376498!5m2!1ssr!2srs"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <div class="mt-8 text-center">
          <a
            :href="mapLink"
            target="_blank"
            class="btn-primary"
          >
            Otvori u Google Mapama
          </a>
        </div>
      </div>
    </div>
  </section>
  <ContactForm />
</template>
