<script setup>
import { computed } from "vue";
const latitude = 20.953905899855933;
const longitude = -86.8361211038529;
const mapLink = computed(
  () =>
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
);
</script>

<template>
  <section class="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Kontaktirajte Nas</h2>
      <p class="text-gray-600 text-lg mb-8">
        Imate pitanje ili želite da sarađujete sa nama? Kontaktirajte nas putem
        informacija ispod.
      </p>
    </div>

    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div class="mb-6">
        <h3 class="text-2xl font-semibold text-gray-700">Podaci o firmi</h3>
        <p class="text-gray-600 mt-2"><strong>Naziv:</strong> XYZ d.o.o.</p>
        <p class="text-gray-600">
          <strong>Adresa:</strong> Ulica 123, 11000 Beograd, Srbija
        </p>
        <p class="text-gray-600"><strong>Telefon:</strong> +381 11 123 456</p>
        <p class="text-gray-600"><strong>Email:</strong> kontakt@xyz.com</p>
        <p class="text-gray-600">
          <strong>Radno vreme:</strong> Pon - Pet: 09:00 - 17:00
        </p>
      </div>

      <div>
        <h3 class="text-2xl font-semibold text-gray-700">Lokacija</h3>
        <iframe
          class="w-full h-64 mt-4 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.244368655417!2d-86.83987993492067!3d20.95314842212426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e86bbc7183c17%3A0x7d452b4b7f19bed!2sHilton%20Cancun%2C%20an%20All-Inclusive%20Resort!5e0!3m2!1ssr!2sus!4v1738275048246!5m2!1ssr!2sus"
          allowfullscreen
        >
        </iframe>
        <div class="mt-8 text-center">
          <a
            :href="mapLink"
            target="_blank"
            class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Otvori u Google Mapama
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
