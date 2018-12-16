<template>
  <div id="app">
      <div id="outer-container">
          <router-view></router-view>
      </div>  
  </div>
</template>

<script>


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
body {
    margin: 0 !important;
}

#app {
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #081c24;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    animation: fadein ease-out 1.4s;
}

#outer-container {
    background-image: linear-gradient(rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.65) 70%, rgba(0, 0, 0, 1) 100%);
    background-attachment: scroll;
    margin: 0;
    height: 120vh;
}

</style>
