import { createRouter, createWebHistory } from "vue-router";

const BASE_URL = "https://banevrdnimrav.github.io/savapex";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'SAVAPEX | Industrijske dizalice, mosne dizalice, portalne dizalice i kranski sistemi Srbija',
      description: 'Savapex d.o.o. - Pouzdan partner za industrijske dizalice u Srbiji. Mosne, portalne, konzolne dizalice, kranske staze i vitla. 20+ godina iskustva.',
      keywords: 'industrijske dizalice, mosne dizalice, portalne dizalice, kranovi Srbija, Savapex'
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('@/views/AboutUsView.vue'),
    meta: {
      title: 'O nama | SAVAPEX - Iskustvo i pouzdanost',
      description: 'Saznajte više o kompaniji Savapex - preko 30 godina iskustva u proizvodnji industrijskih dizalica. Naša misija, vizija i vrednosti.',
      keywords: 'o nama Savapex, proizvodnja dizalica Srbija, iskustvo dizalice, industrijska oprema'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsView.vue'),
    meta: {
      title: 'Proizvodi | SAVAPEX - Dizalice i kranski sistemi',
      description: 'Kompletan asortiman industrijskih dizalica: mosne, portalne, konzolne dizalice, lančana i užetna vitla. Kapaciteti od 1t do 300t.',
      keywords: 'mosne dizalice, portalne dizalice, konzolne dizalice, vitla, kranski sistemi, industrijske dizalice cena'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/components/products/Product.vue'),
    props: true,
    meta: {
      title: 'Proizvod | SAVAPEX',
      description: 'Detaljne specifikacije i karakteristike industrijske dizalice iz Savapex ponude.',
      keywords: 'specifikacije dizalice, karakteristike dizalice, industrijska oprema'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'Usluge | SAVAPEX - Montaža, servis i projektovanje',
      description: 'Profesionalne usluge: montaža dizalica, tehnička podrška, redovan servis, modernizacija sistema i projektovanje rešenja po meri vaših potreba.',
      keywords: 'montaža dizalica, servis dizalica, projektovanje kranskih sistema, tehnička podrška, modernizacija dizalica'
    }
  },
  {
    path: '/references',
    name: 'References',
    component: () => import('@/views/ReferencesView.vue'),
    meta: {
      title: 'Reference | SAVAPEX - Uspešni projekti',
      description: 'Pogledajte naše uspešno realizovane projekte. 200+ zadovoljnih klijenata širom regiona. Pouzdan partner za industriju.',
      keywords: 'reference Savapex, projekti dizalice, realizacije, industrijski projekti Srbija'
    }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('@/views/ContactUsView.vue'),
    meta: {
      title: 'Kontakt | SAVAPEX - Kontaktirajte nas',
      description: 'Kontaktirajte Savapex za besplatne konsultacije i ponude. Telefon: +381 65 818 9651. Email: savapex@gmail.com. Stojimo vam na raspolaganju.',
      keywords: 'kontakt Savapex, telefon, email, adresa, ponuda dizalice'
    }
  },
  {
    path: '/references-gallery/:id',
    name: 'ReferencesGallery',
    component: () => import('@/components/references/ReferencesGallery.vue'),
    props: true,
    meta: {
      title: 'Galerija radova | SAVAPEX Reference',
      description: 'Galerija fotografija realizovanih projekata montaže industrijskih dizalica i kranskih sistema.',
      keywords: 'galerija dizalice, fotografije projekata, montaža dizalica slike'
    }
  },
  {
    path: '/politika-privatnosti',
    name: 'PrivacyPolicy',
    component: () => import('@/components/privacy/PrivacyPolicy.vue'),
    meta: {
      title: 'Politika privatnosti | SAVAPEX',
      description: 'Politika privatnosti kompanije Savapex. Saznajte kako prikupljamo, koristimo i štitimo vaše lične podatke.',
      keywords: 'politika privatnosti, zaštita podataka, GDPR'
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

// Update meta tags on route change for SEO
router.afterEach((to) => {
  // Update document title
  const defaultTitle = 'SAVAPEX | Industrijske dizalice, mosne dizalice, portalne dizalice i kranski sistemi Srbija';
  document.title = to.meta.title || defaultTitle;

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', to.meta.description || '');
  }

  // Update meta keywords
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta && to.meta.keywords) {
    keywordsMeta.setAttribute('content', to.meta.keywords);
  }

  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  const pageUrl = `${BASE_URL}${to.path}`;
  if (canonicalLink) {
    canonicalLink.setAttribute('href', pageUrl);
  }

  // Update Open Graph tags
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  
  if (ogUrl) ogUrl.setAttribute('content', pageUrl);
  if (ogTitle) ogTitle.setAttribute('content', to.meta.title || defaultTitle);
  if (ogDescription) ogDescription.setAttribute('content', to.meta.description || '');

  // Update Twitter tags
  const twitterUrl = document.querySelector('meta[name="twitter:url"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  
  if (twitterUrl) twitterUrl.setAttribute('content', pageUrl);
  if (twitterTitle) twitterTitle.setAttribute('content', to.meta.title || defaultTitle);
  if (twitterDescription) twitterDescription.setAttribute('content', to.meta.description || '');
});

export default router;
