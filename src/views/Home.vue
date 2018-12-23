<template>
  <div id="home">
    <app-header></app-header>
    <homepage></homepage>  
  </div>
</template>

<script>

import homepage from '@/components/homepage.vue'

export default {
  name: 'home',
  components: {
    homepage
  }
}
</script>


