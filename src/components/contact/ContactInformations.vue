<script setup>
import { computed } from 'vue';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-vue-next';

const latitude = 44.439385;
const longitude = 20.735282;
const mapLink = computed(
    () => `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
);

const contactDetails = [
    { icon: Building2, label: 'Naziv', value: 'Savapex d.o.o.' },
    { icon: MapPin, label: 'Adresa', value: 'Kovačevac, Srbija' },
    { icon: Phone, label: 'Telefon', value: '+381 64 123 4567', href: 'tel:+381641234567' },
    { icon: Mail, label: 'Email', value: 'info@savapex.rs', href: 'mailto:info@savapex.rs' },
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
        <div class="bg-slate-700 p-4 rounded-2xl shadow-lg flex-1 flex flex-col">
            <iframe
                class="w-full flex-1 min-h-[250px] rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.632752454525!2d20.731731076908517!3d44.440694971075736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750b74e70bb53d3%3A0x3ea6a576343ff0b8!2z0JrQvtCy0LDRh9C10LLQsNGG!5e0!3m2!1ssr!2srs!4v1740952376498!5m2!1ssr!2srs"
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