<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  show: Boolean,
  subject: String,
})
const emit = defineEmits(['close'])

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = ref({})
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Auto-popuni subject
onMounted(() => {
  if (props.subject) formData.value.subject = props.subject
})

watch(() => props.subject, (newSubject) => {
  formData.value.subject = newSubject || ''
})

// Zatvori modal
const closeModal = () => {
  emit('close')
}

const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

const validateForm = () => {
  let valid = true
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Unesite ime.'
    valid = false
  }
  if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Unesite ispravan email.'
    valid = false
  }
  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Naslov je obavezan.'
    valid = false
  }
  if (!formData.value.message.trim()) {
    errors.value.message = 'Unesite poruku.'
    valid = false
  }
  return valid
}

const handleSubmit = async () => {
  successMessage.value = ''
  errorMessage.value = ''
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/xyzkrlzo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData.value),
    })

    if (response.ok) {
      successMessage.value = 'Poruka uspešno poslata!'
      formData.value = { name: '', email: '', subject: props.subject || '', message: '' }
    } else {
      errorMessage.value = 'Greška pri slanju. Pokušajte ponovo.'
    }
  } catch (err) {
    errorMessage.value = 'Došlo je do greške. Proverite konekciju.'
  }

  isSubmitting.value = false
}
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div class="bg-white text-black w-full max-w-2xl rounded-2xl shadow-lg p-6 relative mx-2 sm:mx-0">
      <button @click="closeModal" class="absolute top-4 right-4 text-2xl text-gray-700 hover:text-brandOrange transition-colors">
        ✕
      </button>

      <h3 class="mb-2">Zatraži ponudu</h3>
      <p class="text-sm text-center mb-6 text-gray-500">Popunite formu i javićemo vam se što pre.</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <input
            v-model="formData.name"
            type="text"
            placeholder="Ime / Ime firme"
            class="input"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
        </div>

        <div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="input"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
        </div>

        <div>
          <input
            v-model="formData.subject"
            type="text"
            placeholder="Naslov"
            class="input"
            :readonly="!!subject"
            :class="{ 'border-red-500': errors.subject }"
          />
          <p v-if="errors.subject" class="form-error">{{ errors.subject }}</p>
        </div>

        <div>
          <textarea
            v-model="formData.message"
            rows="4"
            placeholder="Vaša poruka"
            class="input"
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
        </div>

        <p v-if="successMessage" class="form-success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="form-error text-center">{{ errorMessage }}</p>

        <button type="submit" :disabled="isSubmitting" class="btn-primary w-full">
          <span v-if="!isSubmitting">Pošalji</span>
          <span v-else class="animate-pulse">Slanje...</span>
        </button>
      </form>
    </div>
  </div>
</template>
