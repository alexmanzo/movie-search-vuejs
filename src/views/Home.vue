<template>
  <div class="home">
    <app-header></app-header>
  </div>
</template>

<script>
// @ is an alias to /src
import header from '@/components/header.vue'

export default {
  name: 'home',
  components: {
    'app-header': header
  }
}
</script>
