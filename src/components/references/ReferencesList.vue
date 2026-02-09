<script setup>
const referentnaLista = [
  { broj: 1, firma: 'ČIP DOO', mesto: 'Prokuplje', opis: 'Jednogredna mosna dizalica na električni pogon nosivosti Q = 3,2 t i raspona L = 12 m.' },
  { broj: 2, firma: 'GAMA CONSULTING DOO', mesto: 'Prokuplje', opis: 'Jednogredna mosna dizalica na električni pogon nosivosti Q = 5 t i raspona L = 22 m.' },
  { broj: 3, firma: 'MATIJAŠEVIĆ DOO', mesto: 'Šopić', opis: 'Jednogredna mosna dizalica na električni pogon nosivosti Q = 3,2 t i raspona L = 21,5 m.' },
  { broj: 4, firma: 'GAMA CONSULTING DOO', mesto: 'Prokuplje', opis: 'Jednogredna mosna dizalica na električni pogon nosivosti Q = 10 t i raspona L = 21 m.' },
  { broj: 5, firma: 'WACKER NEUSON DOO', mesto: 'Kragujevac', opis: 'Stubna dizalica na ručni pogon nosivosti Q = 1 t, dužine strele L = 4 m.' },
  { broj: 6, firma: 'VALJAONICA BAKRA DOO', mesto: 'Sevojno', opis: 'Fiksno električno užetno vitlo nosivosti Q = 3,2 t.' },
  { broj: 7, firma: 'GAMA CONSULTING DOO', mesto: 'Prokuplje', opis: 'Jednogredna mosna dizalica na električni pogon nosivosti Q = 10 t i raspona L = 22 m.' },
  { broj: 8, firma: 'TOPLICAGRADNJA DOO', mesto: 'Prokuplje', opis: 'Modernizacija dvogredne mostne dizalice MIN – Niš, nosivosti Q = 20 t i raspona L = 26 m.' },
  { broj: 9, firma: 'GOŠA FOM DOO', mesto: 'Smederevska Palanka', opis: 'Jednogredna mosna dizalica na električni pogon nosivosti Q = 10 t i raspona L = 14 m.' },
  { broj: 10, firma: 'VALJAONICA BAKRA DOO', mesto: 'Sevojno', opis: 'Modernizacija mostne dizalice nosivosti Q = 10 t i raspona L = 24 m.' },
  { broj: 11, firma: 'UNIPROMET DOO', mesto: 'Čačak', opis: 'Fiksno užetno vitlo nosivosti Q = 3,2 t.' },
  { broj: 12, firma: 'TOPLICAGRADNJA DOO', mesto: 'Prokuplje', opis: 'Modernizacija mostne dizalice nosivosti Q = 20 t i raspona L = 26 m.' },
  { broj: 13, firma: 'MNG PLASTIK GOGIĆ DOO', mesto: 'Inđija', opis: 'Kuka sa koturačom nosivosti Q = 10 t.' },
  { broj: 14, firma: 'VALJAONICA BAKRA DOO', mesto: 'Sevojno', opis: 'Lančano električno vitlo nosivosti Q = 500 kg.' },
  { broj: 15, firma: 'LIGRAP LIVNICA DOO', mesto: 'Belosavci', opis: 'Napajanje dizalice dužine L = 40 m.' },
  { broj: 16, firma: 'SMURFIT KAPPA DOO', mesto: 'Beograd', opis: 'Kuka sa koturačom nosivosti Q = 30 t.' },
  { broj: 17, firma: 'SCHWING STETTER DOO', mesto: 'Smederevo', opis: 'Lančano električno vitlo nosivosti Q = 100 kg i Q = 500 kg.' },
  { broj: 18, firma: 'TEIKOM DOO', mesto: 'Šimanovci', opis: 'Jednogreda mosna dizalica na električni pogon nosivosti Q=10t raspina L = 21m sa kranskom stazom 60m' },
];
</script>

<template>
  <section class="section-dark py-8 sm:py-10 md:py-12 text-left">
    <div class="container-wide">
      <!-- Na većim uređajima cela sekcija u sredini, širina koliko treba -->
      <!-- <div class="md:mx-auto md:w-fit"> -->

        <!-- Lista: mobil = 2 kolone (broj+firma gore), opis ispod col-span-2; desktop = 3 kolone, fiksne širine bez preklapanja -->
        <div class="w-full md:max-w-5xl md:mx-auto">
          <article
            v-for="item in referentnaLista"
            :key="item.broj"
            class="grid grid-cols-[auto_1fr] md:grid-cols-[auto_11rem_1fr] gap-x-3 gap-y-2 md:gap-x-6 lg:gap-x-8 md:gap-y-0 py-4 border-b border-white/15 last:border-0 items-start"
          >
            <!-- Broj -->
            <span class="flex-shrink-0 inline-flex w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brandOrange text-slate-900 font-heading font-bold text-sm sm:text-base items-center justify-center">
              {{ item.broj }}
            </span>
            <!-- Firma + mesto: mobil = pored broja, desktop = fiksna kolona -->
            <div class="min-w-0 md:max-w-[11rem]">
              <p class="text-white font-heading font-semibold text-base sm:text-lg leading-tight break-words">
                {{ item.firma }}
              </p>
              <p v-if="item.mesto" class="text-brandOrange text-sm sm:text-base mt-0.5 leading-tight">
                {{ item.mesto }}
              </p>
            </div>
            <!-- Opis: mobil = ispod u punom redu (col-span-2), desktop = treća kolona -->
            <p class="col-span-2 md:col-span-1 pl-12 md:pl-0 text-slate-300 text-base sm:text-lg leading-relaxed min-w-0">
              {{ item.opis }}
            </p>
          </article>
        </div>
      <!-- </div> -->
    </div>
  </section>
</template>
