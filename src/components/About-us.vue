<script setup>
import AnimatedText from '@/components/AnimatedText.vue';
</script>

<template>
<section class="hero h-[70vh] bg-fixed relative md:items-center">
  <div class="max-w-4xl px-4 text-center relative z-10">
    <AnimatedText
      title="O firmi Savapex"
      subtitle="Firma Savapex iz Kovačevca bavi se proizvodnjom, prodajom i ugradnjom industrijskih dizalica,
        sa specijalizacijom u rešavanju složenih zahteva industrijskih postrojenja. Naša misija je da pružimo
        visokokvalitetne proizvode koji omogućavaju efikasno i sigurno dizanje tereta u različitim industrijama.
        Sa dugogodišnjim iskustvom i stručnim timom, Savapex je sinonim za pouzdanost i profesionalizam."
        text-color="white"
        background-color="gray"
      />
</div>
<div class="absolute inset-0 bg-black bg-opacity-40"></div>

  </section>

    <div class="p-6 max-w-4xl mx-auto space-y-8">
    <!-- Naslov: Osnovna delatnost -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Osnovna delatnost SAVAPEX d.o.o.:</h2>
      <div>
        <h5 class="text-lg font-semibold mb-2">Proizvodnja, isporuka, montaža i puštanje u rad industrijskih dizalica:</h5>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>mosnih, portalnih, konzolnih, jednošinih (monorail) i specijalnih</li>
          <li>proizvodnja i montaža kranskih staza</li>
          <li>servisiranje opreme</li>
          <li>isporuka opreme i rezervnih delova</li>
          <li>ugradnja (daljinskog) radijskog upravljanja na dizalicama</li>
          <li>ugradnja kliznih napojnih vodova za napajanje dizalica</li>
          <li>davanje i realizacija tehničkih rešenja za specifične situacije dizaličnog transporta</li>
        </ul>
        <p class="mt-4 font-semibold text-gray-800">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kod naše opreme primenjujemo kvalitetne komponente poznatih zapadno-evropskih proizvođača.
        </p>
      </div>
    </section>

    <!-- Naslov: Prednosti -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Prednosti SAVAPEX:</h2>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>specijalizacija na području industrijskih dizalica</li>
        <li>reference</li>
        <li>
          optimalan odnos između kvaliteta i cene<br />
          Ugrađujemo samo komponente zapadno-evropskog kvaliteta naših poslovnih partnera
        </li>
        <li>iskusna i stručno osposobljena kadrovska struktura omogućuje izvođenje kompleksnih projekata</li>
        <li>pristup do kupca – savetujemo izbor adekvatnog rešenja i opreme koje je najpovoljnija za kupca</li>
        <li>obezbeđen servis proizvoda preko naše servisne službe</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/kran10.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  position: relative;
}

/* Responsive adjustment for smaller screens */
@media (max-width: 768px) {
  .hero {
    background-position: top center; 
    min-height: 80vh; 
    background-attachment: scroll;
  }

  .hero button {
    width: 100%; /* Make button full-width on mobile */
    padding: 16px; /* Add padding for better touch target */
  }
}
</style>
