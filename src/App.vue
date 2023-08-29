<template>
  <div>
  <h1>App base</h1>
  <nav v-if="!userStore.loadingsession">
    <RouterLink to="/" v-if="userStore.userData">Home</RouterLink> |
    <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink> |
    <RouterLink to="/register" v-if="!userStore.userData">Register</RouterLink> |
    <button @click="userStore.logOutUser" v-if="userStore.userData">Log out</button>
  </nav>
  <div v-else>
    loading user...
  </div>
  <router-view></router-view>
  </div>
</template>

<script setup>
import {useUserStore} from './stores/user'

const userStore = useUserStore()
</script>
