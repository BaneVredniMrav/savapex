<script setup>
import { ref, watch } from "vue";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const validateForm = () => {
  let valid = true;
  errors.value = { name: "", email: "", subject: "", message: "" };

  if (!formData.value.name.trim()) {
    errors.value.name = "Unesite ime.";
    valid = false;
  }

  if (!validateEmail(formData.value.email)) {
    errors.value.email = "Unesite ispravan email.";
    valid = false;
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = "Naslov je obavezan.";
    valid = false;
  }

  if (!formData.value.message.trim()) {
    errors.value.message = "Unesite poruku.";
    valid = false;
  }

  return valid;
};

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    const response = await fetch("https://formspree.io/f/xyzkrlzo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      successMessage.value = "Poruka uspešno poslata!";
      formData.value = { name: "", email: "", subject: "", message: "" };
    } else {
      errorMessage.value = "Greška pri slanju. Pokušajte ponovo.";
    }
  } catch (err) {
    errorMessage.value = "Došlo je do greške. Proverite konekciju.";
  }

  isSubmitting.value = false;
};
</script>

<template>
  <section class="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
    <div class="max-w-4xl mx-auto bg-slate-600 p-8 p-8 rounded-xl shadow-lg text-white">
      <div class="w-full flex flex-col items-center justify-center mb-8 text-center px-4 animate-fade-in-up">
        <!-- Ikonica -->
        <div class="text-4xl mb-4">💬</div>
        <!-- Naslov -->
        <h3 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Imate dodatnih pitanja?
        </h3>
        <!-- Opis -->
        <p class="text-lg md:text-xl max-w-2xl mb-6">
          Naš tim je ovde da odgovori na sve vaše nedoumice. Slobodno nas kontaktirajte – biće nam zadovoljstvo da pomognemo.
        </p>
      </div>
      <p
        v-if="errorMessage"
        class="text-red-600 text-center font-semibold mb-4"
        aria-live="polite"
      >
        {{ errorMessage }}
      </p>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name -->
        <div>
          <input
            v-model="formData.name"
            type="text"
            placeholder="Ime / Ime firme"
            class="input"
            :class="{ 'border-red-500': errors.name }"
            aria-label="Ime"
          />
          <p v-if="errors.name" class="text-sm text-red-500 mt-1">
            {{ errors.name }}
          </p>
        </div>
        <!-- Email -->
        <div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="input"
            :class="{ 'border-red-500': errors.email }"
            aria-label="Email"
          />
          <p v-if="errors.email" class="text-sm text-red-500 mt-1">
            {{ errors.email }}
          </p>
        </div>
        <!-- Subject -->
        <div>
          <input
            v-model="formData.subject"
            type="text"
            placeholder="Naslov"
            class="input"
            :class="{ 'border-red-500': errors.subject }"
            aria-label="Naslov"
          />
          <p v-if="errors.subject" class="text-sm text-red-500 mt-1">
            {{ errors.subject }}
          </p>
        </div>
        <!-- Message -->
        <div>
          <textarea
            v-model="formData.message"
            rows="4"
            placeholder="Vaša poruka"
            class="input"
            :class="{ 'border-red-500': errors.message }"
            aria-label="Poruka"
          ></textarea>
          <p v-if="errors.message" class="text-sm text-red-500 mt-1">
            {{ errors.message }}
          </p>
        </div>
              <p
        v-if="successMessage"
        class="text-green-600 text-center font-semibold mb-4"
        aria-live="polite"
      >
        {{ successMessage }}
      </p>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="btn-primary w-full sm:w-auto mx-auto block"
        >
          <span v-if="!isSubmitting">Pošalji</span>
          <span v-else class="animate-pulse">Slanje...</span>
        </button>
      </form>
    </div>
  </section>
</template>