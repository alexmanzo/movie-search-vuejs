<template>
  <div id="app" :style="{backgroundImage: `${ backdrop }`}">
      <div id="outer-container">
          <router-view :key="$route.fullPath"></router-view>
      </div>  
  </div>
</template>

<script>


export default {
    data () {
        return {
            backdrop: ''
        }
    },
    methods: {

    },
    beforeUpdate(){
        this.$root.$on('changeBackground', path => {
            this.backdrop = path
        })
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
    background-attachment: fixed;
}

#outer-container {
    background-image: linear-gradient(rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.65) 70%, rgba(0, 0, 0, 1) 100%);
    margin: 0;
}

</style>
