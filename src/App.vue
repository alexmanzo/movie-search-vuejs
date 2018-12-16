<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// IMPORTS //
import header from '@/components/header.vue'
import searchResults from '@/components/searchResults.vue'

export default {
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
#app {
  margin: 0;
    padding: 0;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: black;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
</style>
