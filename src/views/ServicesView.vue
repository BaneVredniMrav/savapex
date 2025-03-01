<script setup>
import AnimatedText from '@/components/AnimatedText.vue';
import Services from '@/components/Services.vue';
import kran1 from '@/assets/img/kran1.jpg';
import kran2 from '@/assets/img/kran2.jpg';
import kran3 from '@/assets/img/kran3.jpg';
import kran4 from '@/assets/img/kran4.jpg';

</script>

<template>
    <AnimatedText
        title="Usluge koje pružamo"
        subtitle="Kompletna usluga za vaš biznis"
    />
    <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Proizvodnja dizalica'"
            :description="'Projektujemo i proizvodimo dizalice prema vašim specifičnim zahtevima, kombinujući vrhunsku tehnologiju i dugogodišnje iskustvo. Pogledajte naš proces proizvodnje i saznajte kako stvaramo pouzdane i efikasne dizalice.'"
            :details-link="'/details'"
            :slide-direction="'left'"
            :button-name="'Saznajte više'"
    />     <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Prodaja dizalica'"
            :description="'Pomažemo vam da odaberete savršenu dizalicu za vašu industriju, uz stručno savetovanje i širok asortiman rešenja. Bez obzira na zahteve, imamo pravu opciju za vas.'"
            :details-link="'/details'"
            :slide-direction="'right'"
            :button-name="'Pogledajte ponudu'"
    /> 
    <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Ugradnja dizalica'"
            :description="'Naš iskusni tim osigurava preciznu i brzu montažu dizalica na terenu, vodeći računa o sigurnosti i efikasnosti. Prepustite instalaciju stručnjacima.'"
            :details-link="'/details'"
            :slide-direction="'left'"
            :button-name="'Zakažite ugradnju'"
    />     <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Servis i održavanje'"
            :description="'Redovno održavanje i pravovremeni servis produžavaju vek trajanja vaše dizalice i osiguravaju bezbedan rad. Oslonite se na nas za preventivnu i hitnu intervenciju.'"
            :details-link="'/details'"
            :slide-direction="'right'"
            :button-name="'Kontaktirajte servis'"
    /> 
</template>
