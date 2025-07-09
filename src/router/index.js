import { createRouter, createWebHistory } from "vue-router";

const routes = [
{
  path: '/',
  name: 'Home',
  component: () => import('@/views/HomeView.vue'),
  meta: {
    title: 'Savapex | Industrijske dizalice, kranske staze i rešenja po meri',
    description: 'Dobrodošli na zvanični sajt kompanije Savapex – lidera u proizvodnji i ugradnji industrijskih dizalica, kranskih sistema i transportnih rešenja za industriju.'
  }
},
{
  path: '/about-us',
  name: 'AboutUs',
  component: () => import('@/views/AboutUsView.vue'),
  meta: {
    title: 'O nama | Savapex - Lider u industrijskim dizalicama',
    description: 'Saznajte više o kompaniji Savapex – našem iskustvu, misiji, viziji i zašto smo sinonim za kvalitetna i pouzdana industrijska rešenja.'
  }
},
{
  path: '/products',
  name: 'Products',
  component: () => import('@/views/ProductsView.vue'),
  meta: {
    title: 'Proizvodi | Industrijske dizalice i oprema - Savapex',
    description: 'Pregledajte širok asortiman Savapex proizvoda – mosne dizalice, portalne dizalice, kranske staze, upravljački sistemi i još mnogo toga.'
  }
},
{
  path: '/product/:id',
  name: 'Product',
  component: () => import('@/components/Product.vue'),
  props: true,
  meta: {
    title: 'Detalji proizvoda | Savapex industrijska oprema',
    description: 'Detaljan prikaz karakteristika i tehničkih specifikacija proizvoda iz Savapex ponude industrijskih dizalica i opreme.'
  }
},
{
  path: '/services',
  name: 'Services',
  component: () => import('@/views/ServicesView.vue'),
  meta: {
    title: 'Usluge | Montaža, servis i tehnička podrška - Savapex',
    description: 'Saznajte više o uslugama koje nudi Savapex: montaža dizalica, tehnička podrška, servis, modernizacija sistema i projektovanje rešenja po meri.'
  }
},
{
  path: '/references',
  name: 'References',
  component: () => import('@/views/ReferencesView.vue'),
  meta: {
    title: 'Reference | Naši uspešni projekti - Savapex',
    description: 'Pogledajte uspešne realizacije Savapex projekata u različitim industrijskim sektorima – pouzdan partner širom regiona.'
  }
},
{
  path: '/contact-us',
  name: 'ContactUs',
  component: () => import('@/views/ContactUsView.vue'),
  meta: {
    title: 'Kontakt | Savapex - Pošaljite upit ili zatražite ponudu',
    description: 'Kontaktirajte Savapex za informacije, konsultacije i zahteve za ponudu. Naš tim vam stoji na raspolaganju za sva pitanja.'
  }
},
{
  path: '/references-gallery/:id',
  name: 'ReferencesGallery',
  component: () => import('@/components/ReferencesGallery.vue'),
  props: true,
  meta: {
    title: 'Galerija radova | Savapex reference po kategorijama',
    description: 'Pregledajte galeriju fotografija naših realizovanih projekata i montaža, organizovanih po kategorijama proizvoda i usluga.'
  }
}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes
});

export default router;
