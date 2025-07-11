import { createRouter, createWebHistory } from "vue-router";

const routes = [
{
  path: '/',
  name: 'Home',
  component: () => import('@/views/HomeView.vue'),
  meta: {
    title: 'Savapex | Početna',
    description: 'Dobrodošli na zvanični sajt kompanije Savapex – lidera u proizvodnji i ugradnji industrijskih dizalica, kranskih sistema i transportnih rešenja za industriju.'
  }
},
{
  path: '/about-us',
  name: 'AboutUs',
  component: () => import('@/views/AboutUsView.vue'),
  meta: {
    title: 'Savapex | O nama',
    description: 'Saznajte više o kompaniji Savapex – našem iskustvu, misiji, viziji i zašto smo sinonim za kvalitetna i pouzdana industrijska rešenja.'
  }
},
{
  path: '/products',
  name: 'Products',
  component: () => import('@/views/ProductsView.vue'),
  meta: {
    title: 'Savapex | Proizvodi',
    description: 'Pregledajte širok asortiman Savapex proizvoda – mosne dizalice, portalne dizalice, kranske staze, upravljački sistemi i još mnogo toga.'
  }
},
{
  path: '/product/:id',
  name: 'Product',
  component: () => import('@/components/products/Product.vue'),
  props: true,
  meta: {
    title: 'Savapex | Proizvod',
    description: 'Detaljan prikaz karakteristika i tehničkih specifikacija proizvoda iz Savapex ponude industrijskih dizalica i opreme.'
  }
},
{
  path: '/services',
  name: 'Services',
  component: () => import('@/views/ServicesView.vue'),
  meta: {
    title: 'Savapex | Usluge',
    description: 'Saznajte više o uslugama koje nudi Savapex: montaža dizalica, tehnička podrška, servis, modernizacija sistema i projektovanje rešenja po meri.'
  }
},
{
  path: '/references',
  name: 'References',
  component: () => import('@/views/ReferencesView.vue'),
  meta: {
    title: 'Savapex | Reference',
    description: 'Pogledajte uspešne realizacije Savapex projekata u različitim industrijskim sektorima – pouzdan partner širom regiona.'
  }
},
{
  path: '/contact-us',
  name: 'ContactUs',
  component: () => import('@/views/ContactUsView.vue'),
  meta: {
    title: 'Savapex | Kontakt',
    description: 'Kontaktirajte Savapex za informacije, konsultacije i zahteve za ponudu. Naš tim vam stoji na raspolaganju za sva pitanja.'
  }
},
{
  path: '/references-gallery/:id',
  name: 'ReferencesGallery',
  component: () => import('@/components/references/ReferencesGallery.vue'),
  props: true,
  meta: {
    title: 'Galerija radova | Savapex reference po kategorijama',
    description: 'Pregledajte galeriju fotografija naših realizovanih projekata i montaža, organizovanih po kategorijama proizvoda i usluga.'
  }
}
,
  {
    path: '/politika-privatnosti',
    component: () => import('@/components/privacy/PrivacyPolicy.vue'),
    meta: {
      title: 'Politika privatnosti | Savapex',
      description: 'Saznajte kako Savapex prikuplja, koristi i štiti vaše lične podatke u skladu sa važećim zakonima o zaštiti privatnosti.'
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

router.afterEach((to) => {
  const defaultTitle = 'Savapex';
  document.title = to.meta.title || defaultTitle;
});

export default router;
