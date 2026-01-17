<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

if (route.query.subject) {
  formData.value.subject = String(route.query.subject)
}

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
  <div class="bg-slate-700 p-6 sm:p-8 rounded-2xl shadow-lg text-white h-full flex flex-col">
    <!-- Header -->
    <div class="mb-6">
      <h3 class="text-brandOrange text-left mb-2">Pošaljite nam poruku</h3>
      <p class="text-gray-300 text-left text-base max-w-none mb-0">
        Popunite formu ispod i javićemo vam se u najkraćem roku.
      </p>
    </div>

    <!-- Error Message -->
    <p v-if="errorMessage" class="bg-red-500/20 text-red-300 p-3 rounded-lg text-center mb-4" aria-live="polite">
      {{ errorMessage }}
    </p>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4 flex-1 flex flex-col">
      <!-- Name & Email Row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="text-sm text-gray-400 mb-1 block">Ime / Firma *</label>
          <input
            v-model="formData.name"
            type="text"
            placeholder="Vaše ime ili naziv firme"
            class="input"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
        </div>
        <div>
          <label class="text-sm text-gray-400 mb-1 block">Email *</label>
          <input
            v-model="formData.email"
            type="email"
            placeholder="vas@email.com"
            class="input"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
        </div>
      </div>

      <!-- Subject -->
      <div>
        <label class="text-sm text-gray-400 mb-1 block">Naslov *</label>
        <input
          v-model="formData.subject"
          type="text"
          placeholder="O čemu se radi?"
          class="input"
          :class="{ 'border-red-500': errors.subject }"
          :readonly="!!route.query.subject"
        />
        <p v-if="errors.subject" class="form-error">{{ errors.subject }}</p>
      </div>

      <!-- Message -->
      <div class="flex-1 flex flex-col">
        <label class="text-sm text-gray-400 mb-1 block">Poruka *</label>
        <textarea
          v-model="formData.message"
          rows="5"
          placeholder="Opišite vaš upit ili projekat..."
          class="input flex-1 min-h-[120px]"
          :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
      </div>

      <!-- Success Message -->
      <p v-if="successMessage" class="bg-green-500/20 text-green-300 p-3 rounded-lg text-center" aria-live="polite">
        {{ successMessage }}
      </p>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="btn-primary w-full"
      >
        <span v-if="!isSubmitting">Pošalji poruku</span>
        <span v-else class="animate-pulse">Slanje...</span>
      </button>
    </form>
  </div>
</template>