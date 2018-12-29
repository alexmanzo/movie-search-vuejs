<template>
  <div id="app" :style="{backgroundImage: `${ backdrop }`}">
      <div id="outer-container" :style="{ backgroundImage: `${ movieBackdrop }`}">
          <router-view :key="$route.fullPath"></router-view>
          <app-footer></app-footer>
      </div> 
  </div>
</template>

<script>


export default {
    data () {
        return {
            backdrop: '',
            movieBackdrop: ''
        }
    },
    methods: {

    },
    beforeUpdate(){
        this.$root.$on('changeBackground', (path1, path2) => {
            this.backdrop = path1
            this.movieBackdrop = path2
        })
    }
}
</script>

<style lang="scss">
@import 'main.scss';

body {
    margin: 0 !important;
    background-color: $blue;
}

h2 {
    text-align: center;
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
    margin: 0;
    
}

</style>
