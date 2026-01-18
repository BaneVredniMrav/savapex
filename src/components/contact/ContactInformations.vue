<script setup>
import { computed } from 'vue';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-vue-next';

const latitude = 44.449100;
const longitude = 20.744530;
const mapLink = computed(
    () => `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
);

const contactDetails = [
    { icon: Building2, label: 'Naziv', value: 'Savapex d.o.o.' },
    { icon: MapPin, label: 'Adresa', value: 'Toranjska 17, 11409 Kovačevac' },
    { icon: Phone, label: 'Telefon', value: '+381 64 195 3211', href: 'tel:+381641953211' },
    { icon: Mail, label: 'Email', value: 'savapexdoo@gmail.com', href: 'mailto:savapexdoo@gmail.com' },
    { icon: Clock, label: 'Radno vreme', value: 'Pon - Pet: 08:00 - 16:00' },
];
</script>

<template>
    <div class="flex flex-col h-full">
        <!-- Contact Details Card -->
        <div class="bg-slate-700 p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
            <h3 class="text-brandOrange text-left mb-6">Podaci o firmi</h3>
            
            <div class="space-y-4">
                <div 
                    v-for="detail in contactDetails" 
                    :key="detail.label"
                    class="flex items-start gap-4"
                >
                    <div class="bg-brandOrange/20 p-2 rounded-lg">
                        <component :is="detail.icon" class="w-5 h-5 text-brandOrange" />
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm text-left mb-0">{{ detail.label }}</p>
                        <a 
                            v-if="detail.href"
                            :href="detail.href"
                            class="text-white font-medium hover:text-brandOrange transition-colors text-left block"
                        >
                            {{ detail.value }}
                        </a>
                        <p v-else class="text-white font-medium text-left mb-0">{{ detail.value }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Map Card -->
        <div class="bg-slate-700 p-6 sm:p-8 rounded-2xl shadow-lg flex-1 flex flex-col">
            <iframe
                class="w-full flex-1 min-h-[250px] rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2848.5!2d20.744530!3d44.449100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI2JzU2LjgiTiAyMMKwNDQnNDAuMyJF!5e0!3m2!1ssr!2srs"
                allowfullscreen
                loading="lazy"
            ></iframe>
            <a 
                :href="mapLink" 
                target="_blank" 
                class="btn-primary w-full text-center mt-4"
            >
                <MapPin class="w-4 h-4 inline-block mr-2" />
                Otvori u Google Mapama
            </a>
        </div>
    </div>
</template>