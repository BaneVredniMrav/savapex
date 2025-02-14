<template>
  <footer class="bg-slate-800 text-white">
    <div class="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- O nama -->
        <div>
          <h3 class="text-xl font-semibold mb-4">O nama</h3>
          <img
            src="@/assets/img/footer-logo.png"
            alt="Savapex"
            class="mb-4 w-40 mx-auto sm:mx-0"
          />
          <p class="text-sm sm:text-base">
            Savapex se bavi održavanjem, servisiranjem i popravkom kranova širom Srbije. Posvećeni smo kvalitetu, sigurnosti i pouzdanosti vaše opreme.
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
              <RouterLink to="/about-us" class="hover:underline">O nama</RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="hover:underline">Proizvodi</RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="hover:underline">Usluge</RouterLink>
            </li>
            <li>
              <RouterLink to="/service-and-support" class="hover:underline">Servis i Podrška</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact-us" class="hover:underline">Kontakt</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Kontakt</h3>
          <ul class="space-y-2 text-sm sm:text-base">
            <li>
              <a href="tel:+381641234567" class="hover:underline">
                <i class="pi pi-phone mr-2"></i> +381 64 123 4567
              </a>
            </li>
            <li>
              <a href="mailto:info@savapex.rs" class="hover:underline">
                <i class="pi pi-envelope mr-2"></i> info@savapex.rs
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener"
                class="hover:underline"
              >
                <i class="pi pi-map-marker mr-2"></i> Adresa: Beograd, Srbija
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-slate-700 py-4">
      <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p class="text-sm sm:text-base">
          2025 ©
          <a href="/" class="hover:underline">Savapex d.o.o.</a>
          | <RouterLink to="/politika-privatnosti" class="hover:underline">Politika privatnosti</RouterLink>
          | Web izrada:
          <a
            href="https://github.com/BaneVredniMrav"
            target="_blank"
            class="hover:underline"
          >
            BaneVredniMrav
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
