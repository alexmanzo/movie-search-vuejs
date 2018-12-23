<template>
  <div class="home">
      <p>Search for your favorite movies, or click on one below to start exploring.</p>
      <div class="home--trending">
        <h2>This week's trending movies</h2>
        <carousel :items="items" :routerName="routerName"></carousel>
      </div>
  </div>
</template>

<script>
import carousel from '@/components/carousel'
import axios from 'axios'
const apiKey = process.env.VUE_APP_API_KEY

export default {
    components: { carousel },
    data () {
        return {
            items: [],
            routerName: "movie"
        }
    },
    methods: {
        async getTrendingMovies() {
            let movies = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
            this.items = movies.data.results
        }
    },
    created() {
        this.getTrendingMovies()
    },

}
</script>

<style lang="scss">
@import 'main.scss';

.home {
    width: 90%; 
    margin: 0 auto;
    text-align: center;

    p {
        @include setFontSize(18px)
    }

    &--trending {
        margin-top: 50px;
    }
}
</style>