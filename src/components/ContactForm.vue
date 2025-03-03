<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; 

const route = useRoute();

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    errorMessage.value = "Sva polja su obavezna!";
    return;
  }

  if (!validateEmail(formData.value.email)) {
    errorMessage.value = "Unesite ispravan email!";
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await fetch("https://formsubmit.co/branko1989stankovic@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData.value),
    });

    if (response.ok) {
      successMessage.value = "Poruka uspešno poslata!";
      formData.value = { name: "", email: "", message: "" };
    } else if (response.status >= 400 && response.status < 500) {
      errorMessage.value = "Došlo je do greške sa vašim unosom. Pokušajte ponovo.";
    } else {
      errorMessage.value = "Došlo je do greške na serveru. Pokušajte ponovo kasnije.";
    }
  } catch (error) {
    errorMessage.value = "Nije moguće poslati poruku.";
  }

  isSubmitting.value = false;
};

onMounted(() => {
  if (route.query.subject) {
    formData.value.subject = route.query.subject;
  }
  });

</script>

<template>
  <section class="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
  <div class="max-w-6xl mx-auto p-6 bg-slate-600 shadow-lg rounded-lg my-8">
    <h2 class="text-2xl font-bold text-brandOrange mb-8 text-center">Popunite kontakt formu</h2>
    <p v-if="successMessage" class="text-green-600 text-center font-semibold" aria-live="polite">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600 text-center font-semibold" aria-live="polite">{{ errorMessage }}</p>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
        v-model="formData.name"
        type="text"
        placeholder="Ime / Ime firme"
        class="w-full p-3 border border-slate-400 rounded-lg focus:outline-none hover:ring-1 hover:ring-brandOrange focus:ring-2 focus:ring-brandOrange"
        required
      />
      <input
      v-model="formData.email"
      type="email"
      placeholder="Email"
      class="w-full p-3 border border-slate-400 rounded-lg focus:outline-none hover:ring-1 hover:ring-brandOrange focus:ring-2 focus:ring-brandOrange"
      required
      />
      <input
        v-model="formData.subject"
        type="text"
        placeholder="Naslov"
        class="w-full p-3 border border-slate-400 rounded-lg focus:outline-none hover:ring-1 hover:ring-brandOrange focus:ring-2 focus:ring-brandOrange"
        required/>
      <textarea
        v-model="formData.message"
        rows="4"
        placeholder="Vaša poruka"
        class="w-full p-3 border border-slate-400 rounded-lg focus:outline-none hover:ring-1 hover:ring-brandOrange focus:ring-2 focus:ring-brandOrange"
        required
      ></textarea>
      <button
        :disabled="isSubmitting"
        class="bg-slate-800 text-white py-2 px-8 rounded-lg transition-all duration-300 hover:bg-brandOrange hover:text-slate-800 block mx-auto font-semibold"
      >
        <span v-if="!isSubmitting">Pošalji</span>
        <span v-else class="animate-pulse">Slanje...</span>
      </button>
    </form>
  </div>
</section>
</template>
