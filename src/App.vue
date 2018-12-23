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

<style lang="scss">
@import 'main.scss';

body {
    margin: 0 !important;
}

#app {
    color: $white;
    font-family: $font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: $blue;
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
