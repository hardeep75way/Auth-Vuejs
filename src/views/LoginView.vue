<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = useAuth()
const router = useRouter()

async function submit() {
  await auth.login({
    email: email.value,
    password: password.value
  })
  router.push('/dashboard')
}
</script>

<template>
  <AuthLayout>
    <form
      @submit.prevent="submit"
      class="w-full max-w-md bg-white p-6 rounded-lg shadow"
    >
      <h1 class="text-2xl font-semibold text-center mb-6">
        Login
      </h1>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1 text-gray-700">
          Email
        </label>
        <input
          v-model="email"
          type="email"
          class="w-full border border-gray-300 rounded px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium mb-1 text-gray-700">
          Password
        </label>
        <input
          v-model="password"
          type="password"
          class="w-full border border-gray-300 rounded px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded
               hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  </AuthLayout>
</template>