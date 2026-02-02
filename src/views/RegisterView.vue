<script setup lang="ts">
import { ref } from 'vue'
import { authApi } from '@/api/auth.api'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

async function submit() {
  await authApi.register({
    email: email.value,
    password: password.value
  })

  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      @submit.prevent="submit"
      class="w-full max-w-md bg-white p-6 rounded-lg shadow"
    >
      <h1 class="text-2xl font-semibold text-center mb-6">
        Create Account
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
          placeholder="you@example.com"
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
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded
               hover:bg-blue-700 transition"
      >
        Create Account
      </button>

      <p class="text-sm text-center text-gray-500 mt-4">
        Already have an account?
        <RouterLink
          to="/login"
          class="text-blue-600 hover:underline"
        >
          Login
        </RouterLink>
      </p>
    </form>
  </div>
</template>