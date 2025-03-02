<script setup>
import { computed } from "vue";
import AnimatedText from "@/components/AnimatedText.vue";
import ContactForm from "@/components/ContactForm.vue";
const latitude = 20.953905899855933;
const longitude = -86.8361211038529;
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
  <section class="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 border-b border-t border-brandRose">
    <div class="max-w-6xl mx-auto bg-slate-600 p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-semibold text-white mb-4">Podaci o firmi</h3>
        <p class="text-white mt-2 mb-2"><strong>Naziv:</strong> Savapex d.o.o.</p>
        <p class="text-white mb-2"><strong>Adresa:</strong> Ulica 123, 11000 Beograd, Srbija</p>
        <p class="text-white mb-2"><strong>Telefon:</strong> +381 11 123 456</p>
        <p class="text-white mb-2"><strong>Email:</strong> kontakt@xyz.com</p>
        <p class="text-white mb-2"><strong>Radno vreme:</strong> Pon - Pet: 09:00 - 17:00</p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-white">Lokacija</h3>
        <iframe
          class="w-full h-64 mt-4 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.244368655417!2d-86.83987993492067!3d20.95314842212426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e86bbc7183c17%3A0x7d452b4b7f19bed!2sHilton%20Cancun%2C%20an%20All-Inclusive%20Resort!5e0!3m2!1ssr!2sus!4v1738275048246!5m2!1ssr!2sus"
          allowfullscreen
        ></iframe>
        <div class="mt-8 text-center">
          <a
            :href="mapLink"
            target="_blank"
            class="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brandOrange hover:text-slate-800 transition-all duration-300"
          >
            Otvori u Google Mapama
          </a>
        </div>
      </div>
    </div>
  </section>
  <ContactForm />
</template>
