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
            :description="'Your Description'"
            :details-link="'/details'"
            :slide-direction="'left'"
            :button-name="'Detaljnije'"
    />     <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Prodaja dizalica'"
            :description="'Your Description'"
            :details-link="'/details'"
            :slide-direction="'right'"
            :button-name="'Pogledajte našu ponudu'"
    /> 
    <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Ugradnja dizalica'"
            :description="'Your Description'"
            :details-link="'/details'"
            :slide-direction="'left'"
            :button-name="'Detaljnije'"
    />     <Services
    :images="[kran1, kran2, kran3, kran4]"
            :title="'Servis i održavanje'"
            :description="'Your Description'"
            :details-link="'/details'"
            :slide-direction="'right'"
            :button-name="'Saznajte više'"
    /> 
</template>
