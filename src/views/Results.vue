<template>
  <div class="search-results">
    <app-header></app-header>
    <search-results> </search-results>
  </div>
</template>

<script>
// @ is an alias to /src
import searchResults from '@/components/searchResults.vue'

export default {
  name: 'results',
  components: {
    'search-results': searchResults
  }
}
</script>
