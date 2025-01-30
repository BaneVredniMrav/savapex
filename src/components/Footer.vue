<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- O nama -->
        <div>
          <h3 class="text-xl font-semibold mb-4">O nama</h3>
          <img
            src="@/assets/img/footer-logo.png"
            alt="Indenna"
            class="mb-4 w-40 mx-auto sm:mx-0"
          />
          <p class="text-sm sm:text-base">
            Naša firma se specijalizovala za održavanje, servisiranje i popravku
            kranova svih tipova širom Srbije. Pružamo brze, pouzdane i
            kvalitetne usluge koje osiguravaju dugovečnost i bezbednost vaše
            opreme.
          </p>
        </div>

        <!-- Korisni linkovi -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Korisni linkovi</h3>
          <ul class="space-y-2 text-sm sm:text-base">
            <li>
              <RouterLink to="/" class="hover:underline">Početna</RouterLink>
            </li>
            <li>
              <RouterLink to="/about-us" class="hover:underline"
                >O nama</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/" class="hover:underline">Usluge</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Izdvojene industrije -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Izdvojene industrije</h3>
          <ul class="space-y-2 text-sm sm:text-base">
            <li>
              <a href="#" class="hover:underline">Staklarstvo</a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Injekciono livenje plastike i gume
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">Izrada alata</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Automobilska industrija</a>
            </li>
            <li>
              <a href="#" class="hover:underline"> Ekologija i vodoprivreda </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-gray-700 py-4">
      <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p class="text-sm sm:text-base">
          2025 ©
          <a href="#" class="hover:underline">Sava Pex d.o.o.</a>
          |
          <a href="/politika-privatnosti/" class="hover:underline"
            >Politika privatnosti</a
          >
          | Web izrada:
          <a href="https://github.com/BaneVredniMrav">
            <span>BaneVredniMrav</span>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
