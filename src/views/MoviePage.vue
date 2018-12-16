<template>
  <div id="moviePage">
      <app-header></app-header>
      <movie-page></movie-page>
  </div>
</template>

<script>
import moviePage from '@/components/moviePage.vue'
export default {
  name: 'moviePage',
  components: {
    'movie-page': moviePage
  }
}
</script>

<style>
</style>
