<template>
  <div class="cast-page">
    <app-header></app-header>
    <cast-profile></cast-profile>
  </div>
</template>

<script>
import castProfile from '@/components/castProfile.vue'

export default {
  name: 'castProfile',
  components: {
    'cast-profile': castProfile
  }
}
</script>


