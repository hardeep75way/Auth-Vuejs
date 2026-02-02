<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const { user, logout } = useAuth()
const router = useRouter()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Top Bar -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold text-gray-800">
          Dashboard
        </h1>

        <button
          @click="handleLogout"
          class="text-sm bg-red-500 text-white px-4 py-2 rounded
                 hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Welcome Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-medium text-gray-700 mb-2">
            Welcome 👋
          </h2>

          <p v-if="user" class="text-gray-600">
            Logged in as
            <span class="font-semibold text-gray-900">
              {{ user.name }}
            </span>
          </p>
        </div>

        <!-- Profile Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-medium text-gray-700 mb-4">
            Profile Info
          </h2>

          <div v-if="user" class="space-y-2 text-sm text-gray-600">
            <p>
              <span class="font-medium text-gray-800">Name:</span>
              {{ user.name }}
            </p>
            <p>
              <span class="font-medium text-gray-800">Email:</span>
              {{ user.email }}
            </p>
          </div>
        </div>

       

      </div>
    </main>
  </div>
</template>