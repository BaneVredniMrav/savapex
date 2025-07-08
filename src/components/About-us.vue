<script setup>
import AnimatedText from '@/components/AnimatedText.vue';
</script>

<template>
  <main>
    <section class="hero h-[100vh] bg-fixed relative flex items-center justify-center">
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
      <div class="absolute inset-0 bg-black bg-opacity-40" aria-hidden="true"></div>
      <span class="sr-only">Background image of industrial crane</span>
    </section>

    <article class="p-6 max-w-4xl mx-auto space-y-8">
      <section aria-labelledby="osnovna-delatnost">
        <h2 id="osnovna-delatnost" >Osnovna delatnost SAVAPEX d.o.o.</h2>
        <div>
          <h3>Proizvodnja, isporuka, montaža i puštanje u rad industrijskih dizalica:</h3>
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
            Kod naše opreme primenjujemo kvalitetne komponente poznatih zapadno-evropskih proizvođača.
          </p>
        </div>
      </section>

      <section aria-labelledby="prednosti">
        <h2 id="prednosti">Prednosti SAVAPEX:</h2>
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
    </article>
  </main>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/img/kran10.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
}
</style>
